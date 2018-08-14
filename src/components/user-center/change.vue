<template>
<div class="container">
    <back></back>
    <div class="row">
            <div class="col-xs-12">
                <div class="img-container">
                   <img id="image" src="../../assets/logo.jpg" alt="Picture">
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
                
                        <div class="modal fade docs-cropped" id="getCroppedCanvasModal" aria-hidden="true" aria-labelledby="getCroppedCanvasTitle"
                            role="dialog" tabindex="-1">
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
require("../../../static/cropper/js/cropper.js");
require("../../../static/cropper/js/canvas-to-blob.js");
import back from "../back";
export default {
  data() {
    return {
        image_src:''
    };
  },
  components: {
    back
  },
 mounted(){
     require("../../../static/cropper/js/main.js");
 },


};

</script>

<style>
@import "../../../static/cropper/css/cropper.css";
.black-btn.btn {
  border-color: #fff;
}
.black-btn.btn:active,
.black-btn.btn:hover {
  color: #fff;
  outline: none;
}
</style>
