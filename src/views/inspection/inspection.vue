<template>
  <div class="main container">
    <mt-header title="Feedback" class="row">
      
    </mt-header>
    <header> 
      <router-link to="/discover" slot="left">
        <mt-button icon="back" class="mybtn"></mt-button>
      </router-link>
      <template v-for="item in week">
        <div :key="item.datenumber" :class="[{ active: classactive == item.weekname }]" @touchstart="classactive = item.weekname" @click="getAjax">
          <div>{{item.weekname}}</div>
          {{item.datenumber}}
        </div>
      </template>
    </header>
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
        {{new Date()}}
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
import AJAX from "@/api/inspection";
export default {
  data() {
    return {
      agentList: "",
      classactive:'Today'
    };
  },
  computed: {
    week() {
      let now = new Date();
      let nowtime = new Date().getTime();
      const DAY = 1000 * 60 * 60 * 24;
      let after1 = new Date(now.setTime(nowtime + DAY));
      let after2 = new Date(now.setTime(nowtime + DAY*2));
      let after3 = new Date(now.setTime(nowtime + DAY*3));
      let after4 = new Date(now.setTime(nowtime + DAY*4));
      let after5 = new Date(now.setTime(nowtime + DAY*5));
      let after6 = new Date(now.setTime(nowtime + DAY*6));
      let  arr = [
        {
          weekname: new Date().getDay(),
          datenumber: new Date().getDate()
        },
        {
          weekname: after1.getDay(),
          datenumber: after1.getDate()
        }
        ,{
          weekname: after2.getDay(),
          datenumber: after2.getDate()
        } 
        ,{
          weekname: after3.getDay(),
          datenumber: after3.getDate()
        } ,
        {
          weekname: after4.getDay(),
          datenumber: after4.getDate()
        } ,
        {
          weekname: after5.getDay(),
          datenumber: after5.getDate()
        } ,
        {
          weekname: after6.getDay(),
          datenumber: after6.getDate()
        }
      ];
      arr.forEach((item,index)=>{
        if(index==0){
          item.weekname=`Today`
        }else{
          switch (item.weekname){
            case 0 :
            item.weekname=`Sun`;
            break;
            case 1 :
            item.weekname=`Mon`;
            break;
            case 2 :
            item.weekname=`Tue`;
            break;
            case 3 :
            item.weekname=`Wed`;
            break;
            case 4 :
            item.weekname=`Thu`;
            break;
            case 5 :
            item.weekname=`Fri`;
            break;
            case 6 :
            item.weekname=`Sat`;
            break;
          }

        }

      });
      return arr
    }
  },
  methods:{
    getAjax(){
      AJAX.getInspections().then(res => {
      this.agentList = res.data.msg;
    });
    }
  },
  created() {
    AJAX.getInspections().then(res => {
      this.agentList = res.data.msg;
    });
  }
};
</script>
<style lang="less" scoped>
.mybtn{
  color: #656b79;
    background-color: white;
    border-color: white;
    border: none;
    padding-left: 0px !important;
    -webkit-box-shadow: None; 
    box-shadow: none; 
}
.active{
  font-weight: 600;
}
header{
  padding: 0 15px ;
  position: fixed;
  background-color: #fff;
  top: 0;
  left: 0;
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-flow: row nowrap;
  overflow: scroll;
  width: 100%;
  i,&>div{
flex: 1 1 auto;
  }
}
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

