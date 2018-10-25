<template>
    <div class="container">
        <h4>
            Inbox
            <div class="">
                <i class="fa fa-trash" aria-hidden="true"></i>
                <i class="fa fa-search" aria-hidden="true"></i>
            </div>
        </h4>
        <section>
            <div>
                <img src="" alt="">
            </div>
            <div>
                <div class="name">
                    Chancy
                    <div class="time">

                    </div>
                </div>
                <div class="msg">

                </div>
                <div class="recent-chat">

                </div>
            </div>
        </section>
        <footer-menu></footer-menu>
    </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.flex {
  display: flex;
  justify-content: space-between;
}
h4 {
  .flex;
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
}
</style>


