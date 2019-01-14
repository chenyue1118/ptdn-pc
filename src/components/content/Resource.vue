<template lang="html">
  <div class="resource">
    <div class="resource-nav-wra">
      <h3 class="resource-nav-tit">公共资源</h3>
      <router-link tag="div" to="/resource/college" class="resource-nav-item">校区服务</router-link>
      <router-link tag="div" to="/resource/dynamics" class="resource-nav-item">科大资源</router-link>
      <!-- <router-link tag="div" to="/resource/notice" class="resource-nav-item">会议室预约</router-link> -->
    </div>
    <div class="resource-content-wra">
      <keep-alive>
         <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.resource{
  width: 1050px;
  margin: 0 auto;
  padding-top: 24px;
  padding-bottom: 26px;
  font-size: 0;
}
.resource-nav-wra{
  display: inline-block;
  width: 280px;
  background: #fff;
  padding-bottom: 120px;
}
.resource-nav-tit{
  margin-bottom: 22px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: #0066CC;
  font-size: 16px;
  color: #FFFFFF;
}
.resource-nav-item{
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
.resource-content-wra{
  display: inline-block;
  width: 750px;
  margin-left: 20px;
  padding: 0 15px 92px 28px;
  vertical-align: top;
  background: #FFFFFF;
  overflow: hidden;
}
</style>
