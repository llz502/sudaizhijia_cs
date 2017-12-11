<template>
  <div id="Mine">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Mine',
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
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#Mine {
  color: #2c3e50;
  height: 100vh;
}
</style>
