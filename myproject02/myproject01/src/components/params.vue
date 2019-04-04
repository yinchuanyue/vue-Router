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
    }
}
</script>