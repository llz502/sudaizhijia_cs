<template>
  <div class="Product">
    <div class="mask" @click="my_selections_show=money_list_show=false" v-show="my_selections_show===true||money_list_show===true"></div>      
    <div class="header_wrap">
      <div class="login_header" title="速贷大全">
        <a href="./index.html" class="left">
          <img src="../assets/img/dingwei-sudaidaquan@3x.png" alt="">
          全国
        </a>
        <span class="title">
          速贷大全
        </span>
        <a href="./index.html" class="right">
          <img src="../assets/img/intelligence1@2x.png" alt="">
        </a>
      </div>
      <div class="filter_wrap">
        <div class="filter_inner">
          <div class="item money" @click="money_list_show=!money_list_show">
            <em>
              1000元
            </em>
            <i class="icon icon_money"></i>
          </div>
          <div class="item loanType" @click="my_selections_show=!my_selections_show">
            <em>
              个性选择
            </em>
            <i class="icon icon_loanType"></i>
          </div>
        </div>
        <div class="money_list" :class="{money_list_show}" @click="money_list_show=false">
          <h3>金额不限</h3>
          <ul>
            <li>500元</li>
            <li>1000元</li>
            <li>1500元</li>
            <li>2000元</li>
            <li>3000元</li>
            <li>4000元</li>
            <li>5000元</li>
            <li>6000元</li>
            <li>7000元</li>
            <li>8000元</li>
            <li>9000元</li>
            <li>10000元</li>
            <li>15000元</li>
            <li>20000元</li>
            <li>30000元</li>
            <li>50000元</li>
            <li>10万元</li>
            <li>20万元</li>
          </ul>
        </div>
        <div class="my_selections" :class="{my_selections_show}" @click="my_selections_show=false">
          <dl>
            <dt>我是</dt>
            <dd>
              <span>上班族</span>
              <span>学生党</span>
              <span>生意人</span>
              <span>自由职业</span>
            </dd>
          </dl>
          <dl>
            <dt>我有</dt>
            <dd>
              <span v-for="hasitem in searchtagList.loan_has_lists">{{hasitem.value}}</span>
            </dd>
          </dl>
          <dl>
            <dt>我要</dt>
            <dd>
              <span v-for="needitem in searchtagList.loan_need_lists">{{needitem.value}}</span>
            </dd>
          </dl>
          <div class="btns_wrap">
            <button class="btn reset_btn">重置</button>
            <button class="btn sure_btn">确定</button>
          </div>
        </div>
      </div>
    </div>
    <div class="scroll_wrap">
      <div class="productsIcon">
        <img src="../assets/img/productsTopIcon.png" alt="">
        <b>申请３款以上产品成功率更高</b>
      </div>
      <div class="productList">
        <ul>
          <li class="product_wrap" v-for="item in productListData">
            <div class="product_inner">
              <dl>
                <dt>
                  <div class="img_wrap">
                    <img :src="item.product_logo" alt="">
                  </div>
                </dt>
                <dd>
                  <div class="product_left">
                    <h3>{{item.platform_product_name}}</h3>
                    <em>
                      {{item.star}} 上线
                      <strong>{{item.success_count}}人已申请</strong>
                    </em>
                    <p>
                      <span v-for="tag in item.tag_name">{{tag.name}}</span>
                    </p>
                  </div>
                  <img :src="item.sortImgUrl" alt="">
                </dd>
              </dl>
              <div class="introduce">
                <b>{{item.product_introduct}}</b>
                <span>
                  <img src="../assets/img/list_time_icon.png" alt="">
                  {{item.fast_time}}
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
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
  import { Toast } from 'mint-ui'
  export default {
    data () {
      return {
        selectionType: '',
        money_list_show: false,
        my_selections_show: false,
        fixed_show: false,
        fixed_hidden: true,
        searchtagList: [],
        productListData: [],
        sortImgUrls: [
          'https://i.loli.net/2017/12/09/5a2be2890af25.png',
          'https://i.loli.net/2017/12/09/5a2be28b9230a.png',
          'https://i.loli.net/2017/12/09/5a2be28b923c8.png',
          'https://i.loli.net/2017/12/09/5a2be28b800de.png',
          'https://i.loli.net/2017/12/09/5a2be28b9ab58.png',
          'https://i.loli.net/2017/12/09/5a2be28b92502.png',
          'https://i.loli.net/2017/12/09/5a2be28b92502.png',
          'https://i.loli.net/2017/12/09/5a2be28b92502.png',
          'https://i.loli.net/2017/12/09/5a2be28b92502.png',
          'https://i.loli.net/2017/12/09/5a2be28b92502.png'
        ]
      }
    },
    methods: {
      getProductTypeList () {
        this.$ajax({
          method: 'get',
          url: 'http://api.sudaizhijia.com/v2/product/lists?productType=3&indent=0&loanMoney=1000&pageSize=1&pageNum=10&loanNeed=&loanHas=&areaId=0&deviceId=Mozilla%2F5.0-201712041209-5855884412&terminalType=3'
        })
        .then((response) => {
          if (response.status === 200) {
            if (response.data.code === 200) {
              this.productListData = response.data.data.list
              for (var i = 0; i < this.sortImgUrls.length; i++) {
                this.productListData[i]['sortImgUrl'] = this.sortImgUrls[i]
              }
            } else if (response.data.code === 400) {
              Toast(response.data.error)
            }
          }
        })
        .catch(function (error) {
          Toast(error)
        })
      },
      getSearchTag () {
        this.$ajax({
          method: 'get',
          url: 'http://api.sudaizhijia.com/v1/product/searchtag'
        })
        .then((response) => {
          if (response.status === 200) {
            if (response.data.code === 200) {
              this.searchtagList = response.data.data
            } else if (response.data.code === 400) {
              Toast(response.data.error)
            }
          }
        })
        .catch(function (error) {
          Toast(error)
        })
      }
    },
    created () {
      this.getProductTypeList()
      this.getSearchTag()
    }
  }
</script>
<style scoped>
.Product{
  position: relative;
  background: #F5F5F5;
}
.Product .mask{
  position: absolute;
  left: 0;
  top: 1.68rem;
  width: 100%;
  height: calc(100% - 1.68rem);
  background: rgba(0, 0, 0, 0.2);;
  z-index: 10008;
}
em{ 
  font-style: normal;
  display: block;
}
.header_wrap{
  width: 100%;
  height: 1.68rem;
  position: fixed;
  z-index: 10010;
  background: #fff;
}
.login_header {
  width: 100%;
  height: .9rem;
  text-align: center;
  color: white;
  font-size: .34rem;
  position: relative;
  background-color: #44b7f7;
  background: linear-gradient(to right, #02ecfd, #44b7f7);
  z-index: 10022;
}
.login_header .left{
  width: 2rem;
  color: white;
  text-align: left;
  font-size: .26rem;
  position: absolute;
  left: .3rem;
  top: .26rem;
}
.login_header .left img{
  width: .35rem;
  height: .35rem;
}
.login_header .right{
  line-height: .9rem;
  width: .9rem;
  position: absolute;
  right: .013rem;
  top: .1rem;
}
.login_header .right img{
  width: .4rem;
  height: .4rem;
}
.login_header .title{
  line-height: .9rem;
  font-size: .34rem;
}
.filter_wrap{
  position: relative;
  z-index: 10009;
}
.filter_inner{
  z-index: 10015;
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-size: .28rem;
  border-bottom: 1px solid #efefef;
}
.filter_inner::after{
  content: "";
  display: block;
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  height: 1px;
  background: #E6E6E6;
  transform: scaleY(.5);
  z-index: 10002;
}
.filter .login_header{
}
.filter_inner .item{
  flex-grow: 1;
  text-align: center;
  height: 100%;
  line-height: 44px;
  position: relative;
  z-index: 10016;
  background: #fff;
}
.filter_inner .item:hover{
  background: #eee;
}
.filter_inner .item.money::after{
  content: '';
  width: 1px;
  height: .8rem;
  position: absolute;
  right: 0;
  top: .05rem;
  background: #efefef;
}
.filter_inner .icon{
  display: block;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 7px solid RGB(179,179,179);
  position: absolute;
  left: calc(50% + 30px);
  top: calc(50% - 3px);
}
.filter_inner .icon_loanType{
  left: calc(50% + 36px);
}
.filter_wrap .money_list{
  position: absolute;
  top: calc(100% - 7.3rem);
  left: 0;
  background: #fff;
  z-index: 10000;
  width: 100%;
  text-align: center;
  max-height: 7.3rem;
  overflow-y: scroll;
  z-index: 10011;
  transition: top .2s linear;
}
.filter_wrap .money_list.money_list_show{
  top: 100%;
}
.filter_wrap .money_list h3,.filter_wrap .money_list li{
  cursor: pointer;
  width: 100%;
  height: .9rem;
  font-size: .3rem;
  text-align: center;
  line-height: .9rem;
  border-bottom: 1px solid #efefef;
  position: relative;
}
.filter_wrap .money_list h3：hover,.filter_wrap .money_list li:hover{
  color: #44b7f7;
}
.filter_wrap .money_list ul{

}
.filter_wrap .money_list h3::after,.filter_wrap .money_list li::after{
  position: absolute;
  left: 0;
  top: 100%;
  height: 1px;
  width: 100%;
  background: #ddd;
  transform: scaleY(.5);
}
.filter_wrap .my_selections{
  position: absolute;
  top: calc(100% - 7.3rem);
  left: 0;
  background: #fff;
  max-height: 7.3rem;
  overflow-y: scroll;
  z-index: 10011;
  transition: top .2s linear;
}
.filter_wrap .my_selections_show{
  top: 100%;
}
.filter_wrap .my_selections dl{
}
.filter_wrap .my_selections dt{
  text-align: left;
  padding: .15rem 0 0 4%;
  color: #4d4d4d;
  font-size: .32rem;
  font-weight: 400;
}
.filter_wrap .my_selections dd{
  overflow: hidden;
  border-bottom: 1px solid #E6E6E6;
  padding-bottom: .3rem;
}
.filter_wrap .my_selections dd span{
  margin: .2rem 0 0 4%;
  border-radius: .3rem;
  font-size: .28rem;
  border: 1px solid #99E2FE;
  color: #62B3D3;
  cursor: pointer;
  float: left;
  display: block;
  width: 1.5rem;
  height: .5rem;
  text-align: center;
  line-height: .5rem;
}
.filter_wrap .my_selections .btns_wrap{
  height: 1.2rem;
  border-top: 1px solid #E6E6E6;
}
.filter_wrap .my_selections .btns_wrap .btn{
  cursor: pointer;
  width: 2.3rem;
  height: .7rem;
  text-align: center;
  line-height: .7rem;
  border-radius: .12rem;
  font-size: .28rem;
  color: #666;
  margin-top: .25rem;
  box-shadow: none;
  border: none;
}
.filter_wrap .my_selections .btns_wrap .reset_btn{
  float: left;
  margin-left: 1rem;
  background: #E6E6E6;
}
.filter_wrap .my_selections .btns_wrap .sure_btn{
  float: right;
  margin-right: 1rem;
  background: #44b7f7;
  color: white;
}
.scroll_wrap{
  padding-top: 1.68rem;
}
.productsIcon{
  font-size: 0;
  width: 100%;
  text-align: center;
  color: #f4a600;
  height: .36rem;
  padding-top: .2rem;
  padding-bottom: .1rem;
}
.productsIcon img{
  display: inline-block;
  width: .28rem;
  height: .3rem;
  position: relative;
  top: .05rem;
}
.productsIcon b{
  padding-left: .16rem;
  font-size: .26rem;
  font-weight: 400;
}
.productList{
  
}
.productList .product_wrap{
  background: RGB(255,240,120);
  padding-top: 3px;
  position: relative;
}
.productList .product_inner{
  background: #fff;
}
.productList dl{
  display: flex;
}
.productList dt{
  width: 15.67%;
  padding: 21px;
}
.productList .img_wrap{
  width: 100%;
  position: relative;
  padding-top: 100%;
}
.productList .img_wrap img{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.productList dd{
  width: 83.33%;
  display: flex;
}
.productList dd .product_left{
  flex: 1 0 auto;
  text-align: left;
  display: block;
}
.productList .product_left h3{
  font-family: 微软雅黑;
  font-size: .28rem;
  color: #4d4d4d;
  line-height: .42rem;
  padding-top: .26rem;
  font-weight: 400;
}
.productList .product_left em{
  font-size: .26rem;
  font-weight: bold;
  color: #bfa74d;
  vertical-align: top;
}
.productList .product_left strong{
  font-size: .2rem;
  color: #808080;
  float: right;
  padding-right: .2rem;
}
.productList .product_left p{
  margin-top: .1rem;
  height: .6rem;
}
.productList .product_left p::after{
  content: "";
  display: block;
  clear: both;
}
.productList .product_left p span{
  font-size: .2rem;
  color: #b39832;
  margin-right: .11rem;
  margin-top: .125rem;
  width: 1rem;
  height: .35rem;
  line-height: .34rem;
  display: inline-block;
  border-radius: .2rem;
  float: left;
  text-align: center;
  border: 1px solid #e3cd84;
  overflow: hidden;
}
.productList dd img{
  position: absolute;
  right: 0rem;
  top: .1rem;
  width: .83rem;
  height: .7rem;
}
.productList .introduce{
  font-size: .24rem;
  height: .4rem;
  line-height: .4rem;
  color: #666;
  padding-left: .25rem;
  overflow: hidden;
}
.productList .introduce b{
  width: 4.4rem;
  height: .4rem;
  float: left;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.productList .introduce span{
  height: .4rem;
  line-height: .4rem;
  float: right;
  padding-right: .3rem;
  font-size: .2rem;
  color: #00b4ff;
}
.productList .introduce span img{
  width: .4rem;
  height: .4rem;
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
