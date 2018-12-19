<template>
  <div id="agent">
    <Menu>
      <i class="fa fa-search" aria-hidden="true" @touchstart="search()"></i>
      <input v-model="searchText" type="search" class="search" placeholder="search"  @keyup.enter="search()">
    </Menu>
    <section v-for="(item,index) in agentList" :key="index" @click="getDetail(item[0].agentId)">
      <img :src="item[0].image" alt>
      <div class="msg">
        <div class="name">{{item[0].attributes.real_estate_agent_company}}</div>
        <p>{{item[0].title}}</p>
        <div>E:{{item[0].attributes.real_estate_agent_email}}</div>
        <div>M:{{item[0].attributes.real_estate_agent_mobile_number}}</div>
      </div>
      <div class="btn-groups">
        <div>
          <i class="fa fa-commenting" aria-hidden="true"></i>Chat
        </div>
        <div>
          
          <span style="white-space:pre"></span>
          <a :href="`tel://${item[0].attributes.real_estate_agent_office_number}`"><i class="fa fa-phone" aria-hidden="true"></i>Call</a>
        </div>
      </div>
    </section>
    <div class="container">
      <footer-menu></footer-menu>
    </div>
  </div>
</template>
<script>
import Menu from "@/components/back";
import Ajax from "@/api/agent";
export default {
  data(){
    return{
  agentList: [null],
  searchText:''
    }
  },
  name: `agent`,
  components: {
    Menu
  },
  methods: {
    search(){
      if(this.searchText!=''){
        let params ={
          name:this.searchText
        }
        this.getAjax(params)
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
      Ajax.getAgent(params).then(res => {
        this.agentList=JSON.parse(JSON.stringify(res.data.agents))
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
  input.search{
      font-size: 16px;
    }
  section {
    padding: 0 15px;
    margin: 20px auto;
    display: flex;
    justify-content: flex-start;
    flex-flow: row wrap;
    & > img {
      width: 6rem;
      height: 6rem;
      border-radius: 50%;
    }
    .msg {
      flex: 0 0 auto;
      margin-left: 30px;
      margin-bottom: 10px;
      .name{
          font-weight: 600;
      }
    }
    
    .btn-groups {
      border-top: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
      width: 100%;
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

