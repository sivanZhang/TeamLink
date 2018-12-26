<template>
    <div class="container warp-pb">
        <h2>
            Inbox
            <div class="">
                <i class="fa fa-trash" aria-hidden="true"></i>
                <i class="fa fa-search" aria-hidden="true"></i>
            </div>
        </h2>
        <router-link v-for="(item,index) in msgList" to="/inboxDetails"
        :key="index" tag="section">
            <div class="profile-phone">
                <img :src="item.img?item.img:defultImg" alt="">
            </div>
            <div class="brief-chat">
                <div class="name">
                   <span>{{item.userName}}</span>
                    <div class="time">
                        {{item.time}}
                    </div>
                </div>
                <div class="msg">
                    {{item.msg}}
                </div>
                <div class="recent-chat">
                    {{item.content}}
                </div>
            </div>
        </router-link>
        <footer-menu />
    </div>
</template>
<script>
export default {
  data() {
    return {
      defultImg: require("../../assets/touxiang.png"),
      msgList: [
        {
          userName: "Chancy",
          time: "3:00 pm Mon",
          msg: "Epping Station,NSW,2000",
          content: "Hi,How are you?Do you want set an inspecttion......",
          img: ""
        }
      ]
    };
  },
  methods: {
  },
  mounted() {
  }
};
</script>
<style lang="less" scoped>
.fs12 {
  font-size: 12px;
}
.flex {
  display: flex;
  justify-content: space-between;
}
h2 {
  .flex;
  align-items: center;
  text-align: left;
  div {
    text-align: right;
    font-size: 14px;
    .fa {
      &:last-of-type {
        margin-left: 30px;
      }
    }
  }
}
section {
  .flex;
  .profile-phone {
    flex: auto;
    img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
    }
  }
  .brief-chat {
    padding-left: 15px;
    flex: auto;
    .name {
      .flex;
      span {
        font-weight: 600;
      }
      .time {
        .fs12;
      }
    }
    .msg {
      .fs12;
      color: rgb(0, 153, 153);
    }
    .recent-chat {
      margin-top: 6px;
      font-weight: 600;
    }
  }
  &:first-of-type {
    margin-top: 30px;
  }
}
</style>


