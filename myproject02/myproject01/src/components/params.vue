<template>
<div>
    <h2>{{msg}}</h2>
    <p>newsId:{{$route.params.newsId}}</p>
    <p>newTitle:{{$route.params.newTitle}}</p>
</div>
</template>
<script>
export default {
    data(){
        return{
            msg:'params pages'
        }
    },
    beforeRouteEnter: (to, from, next) => {
        // ...
        console.log("准备进入params路由模板");
        next();//一定要写next 否则不起作用即页面跳转不了
    },
    beforeRouteLeave:(to, from, next)=> {
        // ...
        console.log("准备离开params路由模板");
        next();
    }

}
</script>