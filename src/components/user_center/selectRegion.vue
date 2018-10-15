<template>
    <div class="container">
        <mt-header title="Select Region" class="row">
            <router-link to="/user_center" slot="left">
                 <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
       <ul class="text-left row links">
        <router-link tag="li" to="/waiting">
            <div>Country</div>
            <div>
                {{country}}
                <i class="fa fa-fw fa-chevron-right" aria-hidden="true"></i>
            </div>
        </router-link>
        <router-link tag="li" to="/waiting">
            <div>City</div>
            <div>
                {{city}}
                <i class="fa fa-fw fa-chevron-right" aria-hidden="true"></i>
            </div>
        </router-link>
    </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            country:'Australia',
            city:'Sydney'
        }
    }
};
</script>
<style lang="less" scoped>
ul.links {
  background-color: #fff;
  padding: 0px 15px;
  margin-top: 15px;
  border-top: 1px solid #e1e4e8;
  li {
    padding: 20px 15px;
    border-bottom: 1px solid #e1e4e8;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    div{
        flex: 1 1 auto;
        display: flex;
        align-items: center;
        &:last-of-type{
            justify-content: flex-end;
            text-align: right;
            color: rgb(146, 146, 146);//灰色字体
            i{
                margin-left: 10px;
            }
        }
    }
  }
}
</style>


