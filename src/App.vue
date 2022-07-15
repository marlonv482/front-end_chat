<template>
<div > 
<img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <BarraChat/>

  





 </div>
 
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import BarraChat from './components/barrarChat.component/BarraChat.vue'
  
export default {
  name: 'App',
  components: {
    HelloWorld,
    BarraChat
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
 
}
.root{
   background-color: black;
}
</style>
