<template>
  <div class="Mine_wrap">
    <div class="header_wrap">
      <div class="header_inner">
        <div class="img_wrap">
          <div class="img_inner">
            <img src="../assets/img/sudaidai.png" alt="">
          </div>
        </div>
        <p>
          <a href="./login.html">
            立即登录
          </a>
        </p>
      </div>
      <a class="logo_btn" href="./login.html">
        <img src="../assets/img/xiaoxi1@3x.png" alt="">
      </a>
    </div>
    <ul class="nav">
      <li>
        <div class="item">--</div>
        <div class="item_title">我的积分</div>
      </li>
      <li>
        <div class="item">--</div>
        <div class="item_title">我的现金</div>
      </li>
      <li>
        <div>
          <div class="img_wrap">
            <div class="img_inner">
              <img src="../assets/img/sign.png" alt="">
            </div>
          </div>
        </div>
        <div class="item_title">签到得积分</div>
      </li>
    </ul>
    <div class="mine_main">
      <ul>
        <li>
          <div class="img_wrap">
            <div class="img_inner">
              <img src="../assets/img/mine_Icon_menu1.gif" alt="">
            </div>
          </div>
          <p>邀友得现金</p>
        </li>
        <li>
          <div class="img_wrap">
            <div class="img_inner">
              <img src="../assets/img/mine_Icon_menu2.png" alt="">
            </div>
          </div>
          <p>信用资料</p>
        </li>
        <li>
          <div class="img_wrap">
            <div class="img_inner">
              <img src="../assets/img/mine_Icon_menu3.png" alt="">
            </div>
          </div>
          <p>智能匹配</p>
        </li>
        <li>
          <div class="img_wrap">
            <div class="img_inner">
              <img src="../assets/img/mine_Icon_menu4.png" alt="">
            </div>
          </div>
          <p>我的申请</p>
        </li>
        <li>
          <div class="img_wrap">
            <div class="img_inner">
              <img src="../assets/img/mine_Icon_menu5.png" alt="">
            </div>
          </div>
          <p>积分商城</p>
        </li>
        <li>
          <div class="img_wrap">
            <div class="img_inner">
              <img src="../assets/img/mine_Icon_menu6.png" alt="">
            </div>
          </div>
          <p>我的关注</p>
        </li>
        <li>
          <div class="img_wrap">
            <div class="img_inner">
              <img src="../assets/img/mine_Icon_menu7.png" alt="">
            </div>
          </div>
          <p>帮助中心</p>
        </li>
        <li>
          <div class="img_wrap">
            <div class="img_inner">
              <img src="../assets/img/mine_Icon_menu8.png" alt="">
            </div>
          </div>
          <p>关注公众号</p>
        </li>
        <li>
          <div class="img_wrap">
            <div class="img_inner">
              <img src="../assets/img/mine_Icon_menu9.png" alt="">
            </div>
          </div>
          <p>设置</p>
        </li>
      </ul>
    </div>
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
  export default {
    data () {
      return {
        fixed_show: false,
        fixed_hidden: true
      }
    }
  }
</script>
<style scoped>
.Mine_wrap{
  background: rgb(245, 245, 245);
}
.header_wrap{
  width: 100%;
  position: relative;
  background: linear-gradient(to right, #02ecfd, #44b7f7);
  background-color: #44b7f7;
  padding-top: .9rem;
  padding-left: .42rem;
  padding-bottom: .38rem;
}
.header_inner{
  display: flex;
}
.header_wrap .img_wrap{
  width: 1.22rem;
  height: 1.22rem;
  background: #fff;
  opacity: .9;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header_wrap .img_inner{
  width: 1.1rem;
  height: 1.1rem;
  position: relative;
}
.header_wrap .img_inner img{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.header_wrap p a{
  display: block;
  font-family:微软雅黑;
  font-size:.32rem;
  font-weight:400;
  line-height: 1.1rem;
  margin-left: .36rem;
}
.header_wrap p a{
  color: white;
}
.header_wrap .logo_btn{
  width: .5rem;
  position: absolute;
  top: .24rem;
  right: .3rem;
}
.header_wrap .logo_btn img{
  width: 100%;
  height: 100%;
  display: block;
}
.nav{
  width: 100%;
  text-align: center;
  color: #00B4FF;
  margin-bottom: .2rem;
  font-size: .26rem;
  padding-top: .24rem;
  padding-bottom: .2rem;
  background: #fff;
}
.nav::after{
  content: "";
  display: block;
  clear: both;
}
.nav li{
  width: 33.33%;
  float: left;
  position: relative;
}
.nav li::after{
  content: '';
  width: 1px;
  height: .8rem;
  background: #50B2F9;
  position: absolute;
  top: .12rem;
  right: 0;
}
.nav li:nth-of-type(3)::after{
  content: '';
  width: 0;
  height: 0;
}
.nav li .item{
  height: .6rem;
  font-size: .38rem;
  font-weight: 400;
}
.nav li .item_title{
  height: .4rem;
}
.nav li .img_wrap{
  padding-top: .2rem;
}
.nav li .img_inner{
  width: .42rem;
  height: .42rem;
  position: relative;
  margin: 0 auto;
}
.nav li img{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: block;
}
.mine_main{
  text-align: center;
  font-size: .26rem;
  margin-top: .2rem;
  background: #fff;
}
.mine_main ul{
}
.mine_main ul::after{
  content: "";
  display: block;
  clear: both;
}
.mine_main li{
  width: 33.33%;
  float: left;
  padding-bottom: .15rem;
}
.mine_main li .img_wrap{
}
.mine_main li .img_inner{
  position: relative;
  width: .8rem;
  height: .8rem;
  margin: .5rem auto .2rem;
}
.mine_main li img{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.mine_main li p{}
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
