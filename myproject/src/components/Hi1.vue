<template>
  <div class="hi1">
    {{msg}}-{{$route.params.username}}-{{$route.params.id}}
  </div>
</template>

<script>
export default {
  name: 'hi1',
  data () {
    return {
      msg: 'Welcome to hi1'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
