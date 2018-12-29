<template>
  <div id="chat-warp">
    <van-nav-bar title="Chancy" left-arrow @click-left="$router.go(-1)" fixed border>
      <van-icon name="delete" slot="right"/>
    </van-nav-bar>
    <div class="chat" ref="chat">
      <section class="user">
        <div class="content">Hi,I am interested in this property.</div>
        <div class="img">
          <template v-if="!image_src">
            <div class="df-img">
              <div>{{`B`}}</div>
            </div>
          </template>
          <template v-else>
            <img class="user-img" :src="image_src" alt>
          </template>
        </div>
      </section>
      <section class="server">
        <div>
          <div :style="serverImg"></div>
          <!-- <img class="user-img"  src="@/assets/images.jpg" alt> -->
        </div>
        <div class="content">Hi,how are you?Do you want have an inspection?</div>
      </section>
      <section class="user" v-for="(item,index) in enters" :key="index">
        <div class="content">{{item}}</div>
        <div class="img">
          <template v-if="!image_src">
            <div class="df-img">
              <div>{{`B`}}</div>
            </div>
          </template>
          <template v-else>
            <img class="user-img" :src="image_src" alt>
          </template>
        </div>
      </section>
    </div>
    <div class="enter">
      <img src="@/assets/icons/yuyin1.svg" alt>
      <input @keyup.enter="send" type="text" v-model="enterContent" class="inp"/>
      <img @click="send" src="@/assets/icons/send1.svg" alt>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      image_src: this.$store.state.portrait,
      serverImg: {
        backgroundImage: `url(${require("@/assets/images.jpg")})`,
        backgroundSize: `cover`,
        height: `40px`,
        width: `40px`,
        borderRadius: `50%`,
        boxShadow: `0 1px 7px -5px #000`,
        enterContent: ""
      },
      enters: []
    };
  },
  methods: {
    send(){
      if(this.enterContent){
        this.enters.push(this.enterContent);
        this.enterContent=''
      }else{
        return
      }
    }
  },
  watch: {
   enters() {
     console.log("chatlog change");
     this.$nextTick(() => {
       var container = this.$refs.chat,document;
       console.log(container);
       container.scrollTop = container.scrollHeight;
     })
     //  document.getElementById('chatContainer').scrollTop = document.getElementById('chatContainer').scrollHeight+150;

   }
 },
  mounted() {
  }
};
</script>
<style lang="less">
@boxshadow: 0 1px 7px -5px #000;
#chat-warp {
  .enter {
    padding: 15px 15px 20px;
    border-top: 1px solid #ddd;
    position: fixed;
    justify-content: space-between;
    width: 100%;
    bottom: 0;
    display: flex;
    .inp {
      margin: 0 15px;
      width: 100%;
      border: 1px solid #ccc;
      padding: 6px 12px;
      border-radius: 4px;
    }
    img {
      height: 18px;
      margin-top: 8px;
    }
  }
  height: 100vh;
  width: 100%;
  padding: 31px 0 80px;
  .chat {
    font-size: 14px;
    .user-img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    border-top: 1px solid #ddd;
    height: 100%;
    padding: 15px;
    overflow-y: scroll;
    .user {
      margin-bottom: 20px;
      display: flex;
      justify-content: flex-end;
      .df-img {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #009999;
        color: #fff;
        font-size: 24px;
      }
      .content {
        flex: 1 1 auto;
        background-color: rgb(0, 153, 153);
        color: #fff;
        padding: 10px;
        border-radius: 4px;
        margin: 0 15px 0 30px;
        word-wrap: break-word;
        word-break: break-all;
      }
    }
    .server {
      display: flex;
      justify-content: flex-start;
      margin-bottom: 20px;
      .content {
        flex: 1 1 auto;
        box-shadow: @boxshadow;
        padding: 10px;
        border-radius: 4px;
        margin: 0 30px 0 15px;
        word-wrap: break-word;
        word-break: break-all;
      }
    }
  }
}
</style>