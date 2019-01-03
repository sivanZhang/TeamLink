<template>
  <div id="agent" class="warp-pb main">
    <van-nav-bar left-arrow @click-left="$router.go(-1)" :border="true">
      <div class="search-warp" slot="title">
        <i class="fa fa-search" aria-hidden="true" @touchend="search()"></i>
        <input
          v-model="searchText"
          type="search"
          class="search"
          placeholder="search"
          @keyup.enter="search()"
        >
      </div>
    </van-nav-bar>
    <section v-for="(item,index) in agentList" :key="index" @click.passive="getDetail(item[0].agentId)">
      <img :src="item[0].image" alt>
      <div class="msg">
        <div class="name">{{item[0].attributes.real_estate_agent_company}}</div>
        <p>{{item[0].title}}</p>
        <div>E:{{item[0].attributes.real_estate_agent_email}}</div>
        <div>M:{{item[0].attributes.real_estate_agent_mobile_number}}</div>
      </div>
      <div class="btn-groups">
        <div @click.stop="$router.push('/inboxDetails')">
          <i class="fa fa-commenting" aria-hidden="true"></i>Chat
        </div>
        <div>
          <span style="white-space:pre"></span>
          <a :href="`tel://${item[0].attributes.real_estate_agent_office_number}`" @click.stop>
            <i class="fa fa-phone" aria-hidden="true"></i>Call
          </a>
        </div>
      </div>
    </section>
    <div class="container">
      <footer-menu />
    </div>
  </div>
</template>
<script>
import Ajax from "@/api/agent";
export default {
  data() {
    return {
      agentList: [null],
      searchText: ""
    };
  },
  name: `agent`,
  methods: {
    search() {
      if (this.searchText != "") {
        let params = {
          name: this.searchText
        };
        this.getAjax(params);
      }
    },
    getDetail(agentid) {
      this.$router.push({
        name: "agentDetail",
        params: {
          aid: agentid
        }
      });
    },
    getAjax(params) {
      this.$toast.loading({
        mask: false
      });
      Ajax.getAgent(params).then(res => {
        this.agentList = JSON.parse(JSON.stringify(res.data.agents));
        this.$toast.clear();
      });
    }
  },
  created() {
    this.getAjax();
  }
};
</script>
<style lang="less" scoped>
#agent {
  & /deep/ .van-nav-bar{
    box-shadow: 0 1px 6px 0px rgba(0, 0, 0, 0.12);
  }
  & /deep/ .van-nav-bar__title {
    width: 100%;
    max-width: unset;
  }
  .search-warp {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .fa-search {
      font-size: 14px;
      margin-right: 15px;
      margin-left: 46px;
      
    }
    .search {
      width: 100%;
      border: 0px;
      font-size: 14px;
      margin-right: 15px;
    }
  }

  section {
    padding: 0 15px;
    margin: 20px auto;
    display: flex;
    justify-content: flex-start;
    flex-flow: row wrap;
    & > img { 
      width: 5.8rem;
      height: 5.8rem;
      border-radius: 50%;
      object-fit: cover;
      border: #eee 1px solid;
    }
    .msg {
      flex: 0 0 auto;
      margin-left: 20px;
      .name {
        font-weight: 600;
      }
    }

    .btn-groups {
      border-top: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
      width: 100%;
      margin-top: 5px;
      display: flex;
      justify-content: center;
      padding: 6px 0;
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
</style>

