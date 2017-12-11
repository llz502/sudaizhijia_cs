<template>
  <div class="HomeGlobalNav">
    <ul class="list">
        <li v-for="item in imgUrls">
          <a :href="item.link" class="img_wrap">
            <img v-lazy="item.url">
          </a>
        </li>
      </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imgUrls: [
        {
          link: './product.html',
          url: 'http://p0dj8dxtk.bkt.clouddn.com/sudaizhijia/img/btnImg1.png'
        },
        {
          link: './product.html',
          url: 'http://p0dj8dxtk.bkt.clouddn.com/sudaizhijia/img/btnImg2.jpg'
        },
        {
          link: './product.html',
          url: 'http://p0dj8dxtk.bkt.clouddn.com/sudaizhijia/img/btnImg3.png'
        },
        {
          link: './product.html',
          url: 'http://p0dj8dxtk.bkt.clouddn.com/sudaizhijia/img/btnImg4.png'
        }
      ]
    }
  },
  methods: {
  }
}
</script>
<style scoped>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.HomeGlobalNav{

}
.HomeGlobalNav .list{
  display: flex;
}
.HomeGlobalNav .list li{
  width: 25%;
}
.HomeGlobalNav .list li .img_wrap{
  display: block;
  padding-top: 145.24%;
  position: relative;
}
.HomeGlobalNav .list li img{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 990;
}
</style>
