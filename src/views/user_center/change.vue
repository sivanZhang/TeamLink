<template>
  <div class="container">
    <mt-header title="Login" class="row header">
      <mt-button @click="$router.go(-1)" icon="back" slot="left"></mt-button>
      <mt-button @click="$router.push(`/home`)" slot="right">home</mt-button>
    </mt-header>
    <div class="row">
      <div class="col-xs-12">
        <div class="img-container">
          <img id="image" :src="image_src" alt="Picture">
        </div>
      </div>

      <div class="col-xs-12">
        <div class="docs-preview clearfix">
          <div class="img-preview preview-lg"></div>
          <div class="docs-buttons">
            <!-- 浏览 -->
            <div class="btn-group">
              <button type="button" class="btn black-btn" data-method="rotate" data-option="-30" title="Rotate Left">
                <span class="fa fa-rotate-left"></span>
              </button>
              <button type="button" class="btn black-btn" data-method="rotate" data-option="30" title="Rotate Right">
                <span class="fa fa-rotate-right"></span>
              </button>
              <label class="btn black-btn btn-upload" for="inputImage" title="Upload image file">

                <input type="file" class="sr-only" id="inputImage" name="file" accept="image/*">
                <span class="docs-tooltip">
                  <span class="fa fa-upload">&nbsp;Browse</span>
                </span>
              </label>
              <button title="保存" type="button" class="btn black-btn" data-method="getCroppedCanvas">
                <i class="fa fa-floppy-o"></i>&nbsp;Save
              </button>
            </div>

            <div class="modal fade docs-cropped" id="getCroppedCanvasModal" aria-hidden="true" aria-labelledby="getCroppedCanvasTitle" role="dialog" tabindex="-1">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title" id="getCroppedCanvasTitle">Preview</h4>
                  </div>
                  <div class="modal-body"></div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <a class="btn btn-primary" id="download" href="javascript:void(0);" download="cropped.png">Download</a>
                  </div>
                </div>
              </div>
            </div>
            <!-- /.modal -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import "@/plugins/cropper/cropper.js";
  import "@/plugins/cropper/canvas-to-blob.js";
  export default {
    data() {
      return {
        image_src: this.$store.state.portrait,
        api: this.axios.defaults.baseURL
      };
    },
    components: {
      back
    },
    mounted() {
      let self = this;
      var CookieUtil = {
        get: function(name) {
          var cookieName = encodeURIComponent(name) + "=",
            cookieStart = document.cookie.indexOf(cookieName),
            cookieValue = null;
          if (cookieStart > -1) {
            var cookieEnd = document.cookie.indexOf(";", cookieStart);
            if (cookieEnd == -1) {
              cookieEnd = document.cookie.length;
            }
            cookieValue = decodeURIComponent(
              document.cookie.substring(
                cookieStart + cookieName.length,
                cookieEnd
              )
            );
          }
          return cookieValue;
        },
        set: function(name, value, expires, path, domain, secure) {
          var cookieText =
            encodeURIComponent(name) + "=" + encodeURIComponent(value);
          if (expires instanceof Date) {
            cookieText += "; =" + expires.toGMTString();
          }
          if (path) {
            cookieText += "; path=" + path;
          }
          if (domain) {
            cookieText += "; domain=" + domain;
          }
          if (secure) {
            cookieText += "; secure";
          }
          document.cookie = cookieText;
        },
        unset: function(name, path, domain, secure) {
          this.set(name, "", new Date(0), path, domain, secure);
        }
      };

      ("use strict");
      var console = window.console || { log: function() {} };
      var $image = $("#image");
      var $download = $("#download");
      var $dataX = $("#dataX");
      var $dataY = $("#dataY");
      var $dataHeight = $("#dataHeight");
      var $dataWidth = $("#dataWidth");
      var $dataRotate = $("#dataRotate");
      var $dataScaleX = $("#dataScaleX");
      var $dataScaleY = $("#dataScaleY");
      var options = {
        aspectRatio: 1 / 1,
        preview: ".img-preview",
        crop: function(e) {
          $dataX.val(Math.round(e.x));
          $dataY.val(Math.round(e.y));
          $dataHeight.val(Math.round(e.height));
          $dataWidth.val(Math.round(e.width));
          $dataRotate.val(e.rotate);
          $dataScaleX.val(e.scaleX);
          $dataScaleY.val(e.scaleY);
        }
      };

      // Tooltip
      $('[data-toggle="tooltip"]').tooltip();

      // Cropper
      $image
        .on({
          "build.cropper": function(e) {
            console.log(e.type);
          },
          "built.cropper": function(e) {
            console.log(e.type);
          },
          "cropstart.cropper": function(e) {
            console.log(e.type, e.action);
          },
          "cropmove.cropper": function(e) {
            console.log(e.type, e.action);
          },
          "cropend.cropper": function(e) {
            console.log(e.type, e.action);
          },
          "crop.cropper": function(e) {
            console.log(
              e.type,
              e.x,
              e.y,
              e.width,
              e.height,
              e.rotate,
              e.scaleX,
              e.scaleY
            );
          },
          "zoom.cropper": function(e) {
            console.log(e.type, e.ratio);
          }
        })
        .cropper(options);

      // Buttons
      if (!$.isFunction(document.createElement("canvas").getContext)) {
        $('button[data-method="getCroppedCanvas"]').prop("disabled", true);
      }

      if (
        typeof document.createElement("cropper").style.transition === "undefined"
      ) {
        $('button[data-method="rotate"]').prop("disabled", true);
        $('button[data-method="scale"]').prop("disabled", true);
      }
      // Options
      $(".docs-toggles").on("change", "input", function() {
        var $this = $(this);
        var name = $this.attr("name");
        var type = $this.prop("type");
        var cropBoxData;
        var canvasData;

        if (!$image.data("cropper")) {
          return;
        }

        if (type === "checkbox") {
          options[name] = $this.prop("checked");
          cropBoxData = $image.cropper("getCropBoxData");
          canvasData = $image.cropper("getCanvasData");

          options.built = function() {
            $image.cropper("setCropBoxData", cropBoxData);
            $image.cropper("setCanvasData", canvasData);
          };
        } else if (type === "radio") {
          options[name] = $this.val();
        }

        $image.cropper("destroy").cropper(options);
      });
      // Methods for moblie
      $(".docs-buttons").on("touchstart", "[data-method]", function() {
        var $this = $(this);
        var data = $this.data();
        var $target;
        var result;

        if ($this.prop("disabled") || $this.hasClass("disabled")) {
          return;
        }

        if ($image.data("cropper") && data.method) {
          data = $.extend({}, data); // Clone a new one

          if (typeof data.target !== "undefined") {
            $target = $(data.target);

            if (typeof data.option === "undefined") {
              try {
                data.option = JSON.parse($target.val());
              } catch (e) {
                console.log(e.message);
              }
            }
          }

          result = $image.cropper(data.method, data.option, data.secondOption);

          switch (data.method) {
            case "scaleX":
            case "scaleY":
              $(this).data("option", -data.option);
              break;

            case "getCroppedCanvas":
              if (result) {
                $image.cropper("getCroppedCanvas").toBlob(function(blob) {
                  let formData = new FormData(),
                    jsToken = self.$store.state.token;
                  formData.append("portrain", blob);
                  $.ajax(self.api + "/users/upload_fake_portrait/?json", {
                    headers: {
                      Authorization: jsToken
                    },
                    method: "post",
                    dataType: "json",
                    data: formData,
                    processData: false,
                    contentType: false,
                    success: function(data) {
                      if (data["status"] == "OK") {
                        self.$store.commit(
                          "setPortrait",
                          self.api + data.file.replace("\\", "/")
                        );
                        $().message(data["msg"]);
                        self.$router.push("/user_center");
                      } else {
                        $().message(data["msg"]);
                      }
                    },
                    error: function(error) {
                      $().message("Server is down");
                      console.log(error);
                    }
                  });
                });
              }

              break;
          }

          if ($.isPlainObject(result) && $target) {
            try {
              $target.val(JSON.stringify(result));
            } catch (e) {
              console.log(e.message);
            }
          }
        }
      });

      // Keyboard
      $(document.body).on("keydown", function(e) {
        if (!$image.data("cropper") || this.scrollTop > 300) {
          return;
        }

        switch (e.which) {
          case 37:
            e.preventDefault();
            $image.cropper("move", -1, 0);
            break;

          case 38:
            e.preventDefault();
            $image.cropper("move", 0, -1);
            break;

          case 39:
            e.preventDefault();
            $image.cropper("move", 1, 0);
            break;

          case 40:
            e.preventDefault();
            $image.cropper("move", 0, 1);
            break;
        }
      });

      // Import image
      var $inputImage = $("#inputImage");
      var URL = window.URL || window.webkitURL;
      var blobURL;

      if (URL) {
        $inputImage.change(function() {
          var files = this.files;
          var file;

          if (!$image.data("cropper")) {
            return;
          }

          if (files && files.length) {
            file = files[0];

            if (/^image\/\w+$/.test(file.type)) {
              blobURL = URL.createObjectURL(file);
              $image
                .one("built.cropper", function() {
                  // Revoke when load complete
                  URL.revokeObjectURL(blobURL);
                })
                .cropper("reset")
                .cropper("replace", blobURL);
              $inputImage.val("");
            } else {
              window.alert("Please choose an image file.");
            }
          }
        });
      } else {
        $inputImage
          .prop("disabled", true)
          .parent()
          .addClass("disabled");
      }
    }
  };
</script>

<style>
  @import "../../plugins/cropper/cropper.css";

  .black-btn.btn {
    border-color: #fff;
  }

  .black-btn.btn:active,
  .black-btn.btn:hover {
    color: #fff;
    outline: none;
  }
</style>