<template>
  <div id="app">
    <img v-bind:style="{width:'100px'}" src="./assets/logo.png">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App'
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 20px;
    width: 100%;
    background-color: rgba(41, 182, 182, 0.2);
  }

</style>
