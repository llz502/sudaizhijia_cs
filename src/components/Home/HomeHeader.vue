<template>
  <div class="home_header_wrap">
    <div class="header_inner">
      <mt-button class="listBtn" @click.native.prevent="switchList()">你想借多少</mt-button>
      <a href="./login.html" class="switchLoginBtn_wrap" >
        <img src="../../assets/img/xiaoxi2@3x.png" alt="">
      </a>
    </div>
    <mt-index-list class="amountScope" v-show="amountScopeDisplay">
      <mt-index-section class="amountScope_title" index="金额不限">
        <mt-cell-swipe title="至少500元" @click.native="switchList()"></mt-cell-swipe>
        <mt-cell-swipe title="至少1000元" @click.native="switchList()"></mt-cell-swipe>
        <mt-cell-swipe title="至少2000元" @click.native="switchList()"></mt-cell-swipe>
        <mt-cell-swipe title="至少3000元" @click.native="switchList()"></mt-cell-swipe>
        <mt-cell-swipe title="至少4000元" @click.native="switchList()"></mt-cell-swipe>
        <mt-cell-swipe title="至少5000元" @click.native="switchList()"></mt-cell-swipe>
        <mt-cell-swipe title="至少6000元" @click.native="switchList()"></mt-cell-swipe>
        <mt-cell-swipe title="至少7000元" @click.native="switchList()"></mt-cell-swipe>
        <mt-cell-swipe title="至少8000元" @click.native="switchList()"></mt-cell-swipe>
        <mt-cell-swipe title="至少9000元" @click.native="switchList()"></mt-cell-swipe>
        <mt-cell-swipe title="至少10000元" @click.native="switchList()"></mt-cell-swipe>
        <mt-cell-swipe title="至少15000元" @click.native="switchList()"></mt-cell-swipe>
        <mt-cell-swipe title="至少20000元" @click.native="switchList()"></mt-cell-swipe>
        <mt-cell-swipe title="至少30000元" @click.native="switchList()"></mt-cell-swipe>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>
<script>
export default {
  data () {
    return {
      logined: false,
      amountScopeDisplay: false
    }
  },
  methods: {
    switchList () {
      this.amountScopeDisplay = !this.amountScopeDisplay
    }
  }
}
</script>
<style scoped>
.home_header_wrap{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 1rem;
  background-color: #44b7f7;
  background: linear-gradient(to right, #02ecfd, #44b7f7);
}
.header_inner{
  position: relative;
  height: 100%;
  padding-top: .2rem;;
}
.header_inner::after{
  content: "";
  display: block;
  clear: both;
}
.login_title{
  font-size:19px;
}
.header_inner .listBtn{
  background: #fff; 
  line-height: .6rem;
  float: left;
  width: 5rem;
  height: .6rem;
  margin-left: 1.1rem;
  position: relative;
  font-size: 0.27rem;
  font-weight: 400;
  text-align: center;
  border-radius: .3rem;
  color: rgb(128, 128, 128);
}
.header_inner .switchLoginBtn_wrap{
  display: inline-block;
  float: left;
  width: .5rem;
  height: .5rem;
  margin-left: .5rem;
}
.header_inner img{
  display: block;
  width: .5rem;
  height: .5rem;
  margin-right: 10px;
}
.amountScope{
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: auto;
  background: #fff;
  z-index: 9999;
}
.mint-indexlist-content{
  background: #fff;
  z-index: 9999;
}
.amountScope_title{
  background: #fff;
  z-index: 999;
  font-size: .37rem;
}
.amountScope .mint-cell:hover{
  background: rgba(156, 79, 228, 0.473)
}
</style>
