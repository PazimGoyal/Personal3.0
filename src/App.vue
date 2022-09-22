<template>
<NavigationBar/>
  <router-view class='body'/>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'

import NavigationBar from "./components/NavigationBar.vue";
export default {
  components: {
    NavigationBar,
  },
  props: {
    msg: String,
  },
};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
}
.body{
}


</style>
