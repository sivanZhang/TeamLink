<template>
  <div>
    <van-button @click="show2 = true;">{{ ('button2') }}</van-button>

      <van-popup
        v-model="show2"
        position="bottom"
      >
        <van-picker
          show-toolbar
          :columns="('columns')"
          @confirm="show2 = false"
          @cancel="show2 = false"
        />
      </van-popup>
  </div>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      position: '弹出位置',
      button1: '弹出 Popup',
      button2: '底部弹出',
      button3: '弹出 Dialog',
      button4: '顶部弹出',
      button5: '右侧弹出',
      button6: '关闭弹层',
      columns: ['杭州', '宁波', '温州', '嘉兴', '湖州']
    },
    'en-US': {
      position: 'Position',
      button1: 'Show Popup',
      button2: 'From Bottom',
      button3: 'Show Dialog',
      button4: 'From Top',
      button5: 'From Right',
      button6: 'Close Popup',
      columns: ['Delaware', 'Florida', 'Georqia', 'Indiana', 'Maine']
    }
  },
  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false
    };
  },
  watch: {
    show3(val) {
      if (val) {
        setTimeout(() => {
          this.show3 = false;
        }, 2000);
      }
    }
  },
  methods: {
    showDialog() {
      this.$dialog.confirm({
        title: 'confirm标题',
        message: '弹窗提示文字，左右始终距离边20PX，上下距离20PX，文字左对齐。弹窗提示文字，左右始终距离边20PX，上下距离20PX，文字左对齐。'
      });
    }
  }
};
</script>