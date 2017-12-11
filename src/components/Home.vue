<template>
  <div class="home_wrap">
    <HomeHeader></HomeHeader>
    <HomeGlobalNav></HomeGlobalNav>
    <footer class="fixed_nav" :class="{fixed_show,fixed_hidden}">
      <div class="switch_btn" @click="fixed_show=!fixed_show;fixed_hidden=!fixed_hidden"></div>
      <dl>
        <dt>
          <a class="img_wrap">
            <img src="../assets/img/nav1.2.png" alt="">
          </a>
        </dt>
        <dd>首页</dd>
      </dl>
      <dl>
        <dt>
          <a class="img_wrap">
            <img src="../assets/img/nav2.1.png" alt="">
          </a>
        </dt>
        <dd>速贷大全</dd>
      </dl>
      <dl>
        <dt>
          <a class="img_wrap">
            <img src="../assets/img/nav3.2.jpg" alt="">
          </a>
        </dt>
        <dd>社区</dd>
      </dl>
      <dl>
        <dt>
          <a href="./mine.html" class="img_wrap">
            <img src="../assets/img/nav4.2.png" alt="">
          </a>
        </dt>
        <dd>我的</dd>
      </dl>
    </footer>
  </div>
</template>
<script>
import HomeHeader from './Home/HomeHeader'
import HomeGlobalNav from './Home/HomeGlobalNav'

export default {
  data () {
    return {
      fixed_show: false,
      fixed_hidden: true
    }
  },
  components: {
    HomeHeader,
    HomeGlobalNav
  }
}
</script>
<style scoped>
.home_wrap{
  height: auto;
  width: 100%;
}
.home_wrap::after{
  content: "";
  display: block;
  clear: both;
}
.fixed_nav{
  background: #fff;
  width: 6rem;
  height: 1.2rem;
  position: fixed;
  bottom: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: right .2s linear;
}
.fixed_nav.fixed_show{
  right: .05rem;
}
.fixed_nav.fixed_hidden{
  right: -6rem;
}
.fixed_nav::before{
  content: "";
  display: block;
  width: 1rem;
  height: .9rem;
  position: absolute;
  top: .15rem;
  left: -1rem;
}
.fixed_nav .switch_btn{
  width: 1rem;
  height: .9rem;
  position: absolute;
  top: .15rem;
  left: -1rem;
}
.fixed_nav.fixed_show::before{
  background: url(../assets/img/navRight.png) no-repeat;
  background-size: 100% 100%;
}
.fixed_nav.fixed_hidden::before{
  background: url(../assets/img/navLeft.png) no-repeat;
  background-size: 100% 100%;
}
.fixed_nav dl{
  flex: 1 0 auto;
}
.fixed_nav dt{
  display: flex;
}
.fixed_nav .img_wrap{
  margin-top: .2rem;
  margin: .2rem auto .15rem;
  width: .5rem;
  height: .5rem;
  position: relative;
}
.fixed_nav img{
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.fixed_nav dd{
  /* width: 100%;
  height: .4rem; */
  line-height: .4rem;
  font-size: .2rem;
  color: #808080;
}
</style>
