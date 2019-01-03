<template>
  <div id="agent" class="warp-pb">
    <van-nav-bar left-arrow @click-left="$router.go(-1)"/>
    <section>
      <img :src="agentData[0].image" alt>
      <div class="msg">
        <div>{{agentData[0].attributes.real_estate_agent_company}}</div>
        <div>E:{{agentData[0].attributes.real_estate_agent_email}}</div>
        <div>M:{{agentData[0].attributes.real_estate_agent_mobile_number}}</div>
        <div class="btn-groups">
          <div @click.passive="$router.push('/inboxDetails')">
            <i class="fa fa-commenting" aria-hidden="true"></i>Chat
          </div>
          <div>
            <span style="white-space:pre"></span>
            <a :href="`tel://${agentData[0].attributes.real_estate_agent_office_number}`">
              <i class="fa fa-phone" aria-hidden="true"></i>Call
            </a>
          </div>
        </div>
      </div>
      <div class="about">
        <h4>About {{agentData[0].attributes.real_estate_agent_company}}</h4>
        {{agentData[0].attributes.real_estate_agent_description}}
      </div>

      <div class="filter">
        {{agentData[0].attributes.real_estate_agent_company}} Listing for Sale
        <i
          class="fa fa-angle-down"
          aria-hidden="true"
        ></i>
      </div>


      <div class="p-data" v-for="(item,index) in properties" @click.passive="target(item[0].propertyId)" :key="index">
        <div class="left">
          <img :src="item[0].images[0]" alt>
          <i class="fa fa-heart-o" aria-hidden="true"></i>
        </div>
        <div class="right">
          <div>{{item[0].title}}</div>
          <div class="adress">Modern Apartment</div>
          <div class="money">$ {{item[0].attributes.real_estate_property_price}}</div>
          {{item[0].attributes.real_estate_property_bedrooms}}
          <i class="fa fa-bed" aria-hidden="true"></i>
          {{item[0].attributes.real_estate_property_bathrooms}}
          <i class="fa fa-bath" aria-hidden="true"></i>
          {{item[0].attributes.real_estate_property_garage}}
          <i class="fa fa-car" aria-hidden="true"></i>
        </div>
      </div>
      <footer-menu />
    </section>
  </div>
</template>
<script>
import Ajax from "@/api/agent";
export default {
  data() {
    return {
      agentData: [null],
      properties:[null]
    };
  },
  name: `agent`,
  methods: {
    target(id){
      this.$router.push({
        name:'property',
        params:{
          pid:id
        }
      })
    },
    back() {
      this.$router.go(-1);
    },
    getAjax() {
      let params = {
        agentID: this.$route.params.aid
      };
      Ajax.getAgentDetail(this.$route.params.aid).then(res => {
        this.agentData = res.data.agent;
        this.properties = res.data.properties;
        this.$toast.clear();
      });
    }
  },
  created() {
    this.$toast.loading({
        mask: false
      });
    this.getAjax();
  }
};
</script>
<style lang="less" scoped>
#agent {
  section {
    .p-data {
      box-shadow: 0 3px 5px 0px rgba(0, 0, 0, 0.18);
      display: flex;
      justify-content: space-between;
      margin: 15px 0;
      padding: 15px;
      border: 1px solid #ddd;
      width: 100%;
      .left {
        flex: 0 0 0;
        position: relative;
        img {
          width: 7rem;
          height: 7rem;
          object-fit: cover;
        }
        .fa {
          position: absolute;
          right: 1rem;
          top: 1rem;
          color: #fff;
          font-size: 16px;
        }
      }
      .right {
        margin-left: 30px;
        width: 100%;
        color: #757575;
        & > div {
          margin: 0.5rem 0;
        }
        .adress {
          color: #333;
        }
        .money {
          color: rgb(177, 69, 55);
        }
      }
    }
    .about {
      margin: 30px auto 20px;
    }
    .filter {
      text-align: center;
      width: 100%;
      background-color: rgb(0, 153, 153);
      color: #fff;
      padding: 12px 0;
    }
    padding: 0 15px;
    margin: 20px auto;
    display: flex;
    justify-content: flex-start;
    flex-flow: row wrap;
    & > img {
      width: 6rem;
      height: 6rem;
      object-fit: cover;
    }
    .msg {
      flex: 1 0 auto;
      margin-left: 30px;
      margin-bottom: 10px;
      & > div + div {
        margin-top: 5px;
      }
      .btn-groups {
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 3px 0;
        & > div {
          width: 50%;
          text-align: center;
          .fa {
            margin-right: 10px;
          }
          &:last-of-type {
            border-left: 1px solid #ddd;
          }
        }
      }
    }
  }
}
</style>

