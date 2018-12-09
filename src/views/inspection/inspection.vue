<template>
  <div class="main">
    <mt-header title="Inspection" class="header">
      <mt-button @touchstart.native="$router.go(-1)" icon="back" slot="left"></mt-button>
    </mt-header>
222
    <router-link
    v-if="agentList"
      tag="div"
      v-for="(item,index) in agentList"
      class="suggest"
      :key="index"
      :to="{name:'benaa',params:{pid:item[0].propertyId}}"
    >
      <div class="suggest-title">
        <i class="fa fa-clock-o" aria-hidden="true"></i>
        {{postedTime}}
      </div>
      <div class="suggest-details">
        <img :src="item[0].images[0]" alt>
      </div>
      <div class="suggest-info">
        <div>{{item[0].title}}</div>
        <div>
          <i class="fa fa-picture-o" aria-hidden="true"></i>
          {{item[0].images.length}}
        </div>
      </div>
      <div class="container">
        <h5>Modern Apartment</h5>
        <div class="price">${{item[0].attributes.real_estate_property_price}}</div>
        <div class="outfit">
          {{item[0].attributes.real_estate_property_bedrooms}}
          <i
            class="fa fa-bed"
            aria-hidden="true"
          ></i>
          {{item[0].attributes.real_estate_property_bathrooms}}
          <i
            class="fa fa-bath"
            aria-hidden="true"
          ></i>
          {{item[0].attributes.real_estate_property_garage}}
          <i
            class="fa fa-car"
            aria-hidden="true"
          ></i>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
    data(){
        return{
            agentList:''
        }
    }
};
</script>
<style lang="less" scoped>
.suggest {
  & {
    margin: 15px 0;
  }

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
    padding: 6px 12px;
  }

  .suggest-details {
    height: 180px;
    overflow: hidden;

    img {
      height: auto;
      width: 100%;
    }
  }

  .suggest-title {
    color: #fff;
    background: rgb(255, 87, 34);
    padding: 0 15px;
  }
}
</style>

