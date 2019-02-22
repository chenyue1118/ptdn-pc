<template>
  <div id="app">
    <div class="wrapper">
      <div class="content">
        <MHeader/>
        <tab/>
        <img v-show="imgShow" class="image-nav" src="https://sias.ustc.edu.cn/_upload/tpl/00/3d/61/template61/res/kdyjy_news.jpg" alt="">
        <keep-alive>
          <router-view/>
        </keep-alive>
      </div>
    </div>
    <BackTop></BackTop>
    <Footer/>
  </div>
</template>

<script>
import MHeader from './components/header/Header'
import Footer from './components/footer/Footer'
import Tab from './components/tab/Tab'
import 'babel-polyfill'

export default {
  name: 'App',
  data () {
    return {
      imgShow: true
    }
  },
  created () {
    if (this.$route.path === '/index' || this.$route.path === '/index22') {
      this.imgShow = false
    } else {
      this.imgShow = true
    }
  },
  updated () {
    if (this.$route.path === '/index' || this.$route.path === '/index22') {
      this.imgShow = false
    } else {
      this.imgShow = true
    }
  },
  components: {
    MHeader,
    Footer,
    Tab
  }
}
</script>

<style scoped>
#app {
  height: 100%;
}
.wrapper{
  height: auto;
  min-height: 100%;
}
.content{
  padding-bottom: 230px;
  /* background: #f4f4f4; */
  /* background: #f4f4f4 url(common/image/content-bg.png) no-repeat center bottom; */
  background: #f4f4f4 url(common/image/icon_body.jpg) no-repeat center bottom;
  /* background-size: 100% 70%; */
}
.image-nav{
  display: block;
  width: 100%;
}
.footer{
  position: relative;
  margin-top: -230px;
  height: 230px;
  clear:both;
  background: #0066CC;
}
</style>
