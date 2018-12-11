<template>
    <div class="container">
        <h2>
            Inbox
            <div class="">
                <i class="fa fa-trash" aria-hidden="true"></i>
                <i class="fa fa-search" aria-hidden="true"></i>
            </div>
        </h2>
        <section v-for="(item,index) in msgList" @touchstart="getHtml(`http://www.demo-it.com.au/teamlink/wp-admin/edit.php?post_type=notification`)"
        :key="index">
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
        </section>
        <footer-menu></footer-menu>
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
    getHtml(val) {
      this.$store.commit("setUrl", val);
      this.$router.push("/iframe");
    }
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


