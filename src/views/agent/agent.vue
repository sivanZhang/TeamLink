<template>

    <div id="agent">
        <Menu></Menu>
        <section @click="getDetail">
            <img src="@/assets/touxiang.jpg" alt="">
            <div class="msg">
                <div>{{`Home 789 Team`}}</div>
                <p>{{`Redfern,Sydney`}}</p>
                <div>E:{{`sale@home789.com.cn`}}</div>
                <div>M:{{123456789}}</div>
            </div>
            <div class="btn-groups">
                <div><i class="fa fa-commenting" aria-hidden="true"></i>Chat</div>
                <div><i class="fa fa-phone" aria-hidden="true"></i>Call</div>
            </div>
        </section>
        <div class="container"><footer-menu></footer-menu></div>
    </div>
</template>
<script>
import Menu from '@/components/back'
import Ajax from '@/api/agent'
export default {
    name:`agent`,
    components:{
        Menu
    },
    created(){
        Ajax.getAgent().then(res=>{
            console.log(res)
        })
    },
    methods:{
        getDetail(){
            this.$router.push({
                name:'agentDetail',
                params:{
                    aid:1
                }
            })
        },
    }
}
</script>
<style lang="less" scoped>
#agent{
    section{
        padding: 0 15px;
        margin: 20px auto;
        display: flex;
        justify-content: flex-start;
        flex-flow: row wrap;
        &>img{
            width: 6rem;
            height: 6rem;
            border-radius: 50%;
        }
        .msg{
            flex: 0 0 auto;
            margin-left: 30px;
            margin-bottom: 10px;
        }
        .btn-groups{
            border-top: 1px solid #ddd;
            border-bottom: 1px solid #ddd;
            width: 100%;
            display: flex;
            justify-content: center;
            padding: 6px 0;
            &>div{
                width: 50%;
                text-align: center;
                .fa{
                    margin-right: 10px;
                }
                &:last-of-type{
                    border-left: 1px solid #ddd;
                }
            }
        }
    }
}
</style>

