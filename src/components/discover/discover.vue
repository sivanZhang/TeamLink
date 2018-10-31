<template>
  <div class="container main">
    <mt-header title="teamlink" class="row header">
        </mt-header>
    <mt-swipe class="row" :auto="3000">
      <mt-swipe-item class="slide1">
        <img src="../../assets/h3.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item @click.native="test" class="slide2">
        <img src="../../assets/h1.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item class="slide3">
        <img src="../../assets/h2.jpg" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <div class="group">
      <div>
        <img src="../../assets/s1.png" alt="">
      </div>
      <div>
        <img src="../../assets/s2.png" alt="">
      </div>
      <div>
        <img src="../../assets/s3.png" alt="">
      </div>
      <div>
        <img src="../../assets/s1.png" alt="">
      </div>
    </div>
    <h5 class="suggestd-header">Suggestd for you</h5>
    <div class="suggest">
      <div class="suggest-title">
        <i class="fa fa-clock-o" aria-hidden="true"></i>
        {{postedTime}}
      </div>
      <div class="suggest-details">

      </div>
      <div class="suggest-info">
        <div>
          {{info}}
        </div>
        <div>
          <i class="fa fa-picture-o" aria-hidden="true"></i> {{pictureNumber}}
       		</div>
     	</div>
	 	<div class="container">
			 <h5>Modern Apartment</h5>
		<div class="price">${{price}}</div>
		<div class="outfit">
			{{outfit.bed}}<i class="fa fa-bed" aria-hidden="true"></i>
			{{outfit.toilet}}<i class="fa fa-bath" aria-hidden="true"></i>
			{{outfit.carport}}<i class="fa fa-car" aria-hidden="true"></i>
		</div>
		 </div>
    </div>
    <footer-menu></footer-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Discover",
      postedTime: `Today 1:00 PM - 5:00 PM`,
      info: `Epping Station,NSW,2000`,
      pictureNumber: 3,
      price: 7000,
      outfit: {
        bed: 3,
        toilet: 2,
        carport: 1 
      }
    };
  },
  methods: {
    test() {
      alert("click event");
    }
  },
  mounted() {
    document
      .querySelector("body")
      .setAttribute("style", "background-color:#fff");
    document.title = "TeamLink " + this.title;
    /* 设置展图宽高相等 */
    let imgWidth = $(".item-img").width() / 2;
    $(".item-img>img").height(imgWidth);
  }
};
</script>

<style lang="less" scoped>
.suggestd-header {
  margin: 0px;
  padding: 0 0 10px 0;
}
.suggest {
  .outfit {
    color: rgb(91, 91, 91);
    .fa {
      margin: 0 2px 0 6px;
    }
  }
  .price {
    color: rgb(177, 69, 55);
  }
  .suggest-info {
    display: flex;
    justify-content: space-between;
    background: #000;
    color: #fff;
    padding: 4px 15px;
  }
  .suggest-details {
    height: 200px;
    background: url(../../../static/image/home.png) no-repeat;
    background-size: 100% 100%;
  }
  .suggest-title {
    color: #fff;
    background: rgb(255, 87, 34);
    padding: 0 15px;
  }
}
.mint-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
  .mint-swipe-item {
    img {
      height: 100%;
      width: 100%;
      overflow: hidden;
    }
  }
}
.group {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  div {
    width: 48%;
    padding-bottom: 15px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 8px;
    }
  }
}
/* 头CSS */
.header {
  background-color: #fff;
  position: fixed;
  width: 100%;
  border-bottom: 1px solid #ddd;
  top: 0;
  z-index: 200;
  height: unset;
  padding: 0 0 15px;
}
.header /deep/ h1 {
  margin: 0;
}
.header /deep/ .mint-button {
  height: 16px;
}
.header /deep/ a {
  color: inherit;
}
.main{
  padding-top: 31px;
}
</style>
