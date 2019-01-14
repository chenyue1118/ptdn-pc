<template lang="html">
  <div class="contact">
    <div class="contact-nav-wra">
      <h3 class="contact-nav-tit">联系我们</h3>
      <!-- <router-link tag="div" to="/contact/college" class="contact-nav-item">学院动态</router-link>
      <router-link tag="div" to="/contact/dynamics" class="contact-nav-item">本院动态</router-link>
      <router-link tag="div" to="/contact/notice" class="contact-nav-item">通知公告</router-link> -->
    </div>
    <div class="contact-content-wra">
      <h3>联系我们</h3>
      <div class="contact-line"></div>
      <div class="contact-item">
        <div class="contact-item-tit">
          <!-- 院办公室 -->
        </div>
        <div class="contact-item-con">
          地址： <span> 北京市海淀区西北旺东路10号院5号楼</span>
        </div>
        <div class="contact-item-con">
          邮编：<span>100193</span>
        </div>
        <div class="contact-item-con">
          电话： <span> </span>
        </div>
        <div class="contact-item-con">
          邮箱： <span>ustc-bj@ustc-bj.cn</span>
        </div>
      </div>
      <!-- <div class="contact-img-wra">
        <img src="../../common/image/map.png" alt="map">
      </div> -->
      <div class="amap-wrapper" id="container">
        <el-amap :center="center" :zoom="zoom" class="amap-box" :vid="'VueAMap'">
          <el-amap-info-window :position="center" content="中国科学技术大学北京研究院"></el-amap-info-window>
        </el-amap>
      </div>
      <div class="amap-Look-big" @click="lookMap">
        查看大图
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      center: [116.2798960000, 40.0475350000],
      zoom: 12
    }
  },
  methods: {
    lookMap () {
      window.open('http://map.baidu.com/?latlng=40.0538668975,116.2862520561&title=中国科学技术大学北京研究院&content=北京市海淀区西北旺东路10号院5号楼')
    }
  }
}
</script>

<style lang="css" scoped>
.contact{
  width: 1050px;
  margin: 0 auto;
  padding-top: 24px;
  padding-bottom: 26px;
  font-size: 0;
}
.contact-nav-wra{
  display: inline-block;
  width: 280px;
  background: #fff;
  padding-bottom: 120px;
}
.contact-nav-tit{
  margin-bottom: 22px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: #0066CC;
  font-size: 16px;
  color: #FFFFFF;
}
.contact-nav-item{
  display: block;
  width: 240px;
  height: 50px;
  margin: 0 auto 14px auto;
  line-height: 50px;
  background: rgba(144, 153 ,171, 0.16);
  font-size: 14px;
  color: #2D323B;
  text-align: center;
  cursor: pointer;
}
.router-link-active, .router-link-exact-active{
  color: #0066CC;
}
.contact-content-wra{
  display: inline-block;
  width: 750px;
  margin-left: 20px;
  padding: 0 15px 92px 28px;
  vertical-align: top;
  background: #FFFFFF;
  overflow: hidden;
  font-size: 12px;
}
.contact-content-wra h3{
  height: 48px;
  line-height: 48px;
  font-size: 14px;
  color: #0066CC;
}
.contact-line{
  width: 130%;
  height: 1px;
  background: linear-gradient(to right, red, orange, yellow);
  transform: translateX(-20px);
}
.contact-item{
  width: 100%;
  padding: 20px 10px;
}
.contact-item-tit{
  width: 100%;
  height: 45px;
  line-height: 45px;
  text-indent: 1em;
  font-size: 14px;
  color: #0066CC;
}
.contact-item-con{
  width: 100%;
  height: 46px;
  line-height: 45px;
  border-top: 1px solid #E0E3E8;
  font-size: 14px;
  color: #2D323B;
  text-indent: 34px;
}
.amap-wrapper{
  width: 700px;
  height: 600px;
}
.amap-Look-big{
  width: 700px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  font-size: 14px;
  color: #333;
  background: #d6d6d6;
  cursor: pointer;
}
.amap-Look-big:hover{
  color: #0066CC;
}
</style>
