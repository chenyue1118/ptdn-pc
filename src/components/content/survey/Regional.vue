<template lang="html">
  <div class="regional">
    <h3>区域地图</h3>
    <div class="regional-line"></div>
    <div class="amap-wrapper" id="container">
      <el-amap :center="center" :zoom="zoom" class="amap-box" :vid="'VueAMap'">
        <el-amap-info-window :position="center" content="中国科学技术大学北京研究院"></el-amap-info-window>
      </el-amap>
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
  mounted () {
  }
}
</script>

<style lang="css" scoped>
.regional h3{
  height: 48px;
  line-height: 48px;
  font-size: 14px;
  color: #0066CC;
}
.regional-line{
  width: 130%;
  height: 1px;
  background: linear-gradient(to right, red, orange, yellow);
  transform: translateX(-20px);
}
.amap-wrapper{
  padding-top: 20px;
  width: 100%;
  height: 460px;
}
.amap-box{
  width: 100%;
  height: 460px;
  font-size: 14px;
}
</style>
