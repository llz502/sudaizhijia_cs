<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  created () {
    if (window.screen.width < 1024) {
      document.documentElement.style.fontSize = '50px'
    } else {
      document.documentElement.style.fontSize = '80px'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*,*::before,*::after{
  margin: 0;
  padding: 0;
}
ul,ol{
  list-style: none;
}
a{
  text-decoration: none;
}
</style>
