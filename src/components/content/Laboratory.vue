<template lang="html">
  <div class="laboratory">
    <div class="laboratory-nav-wra">
      <h3 class="laboratory-nav-tit">联合实验室</h3>
      <router-link tag="div" to="/laboratory/introduction" class="laboratory-nav-item">实验室简介</router-link>
      <router-link tag="div" to="/laboratory/research" class="laboratory-nav-item">科研项目</router-link>
      <router-link tag="div" to="/laboratory/scientific" class="laboratory-nav-item">科研成果</router-link>
    </div>
    <div class="laboratory-content-wra">
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
.laboratory{
  width: 1050px;
  margin: 0 auto;
  padding-top: 24px;
  padding-bottom: 26px;
  font-size: 0;
}
.laboratory-nav-wra{
  display: inline-block;
  width: 280px;
  background: #fff;
  padding-bottom: 120px;
}
.laboratory-nav-tit{
  margin-bottom: 22px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: #0066CC;
  font-size: 16px;
  color: #FFFFFF;
}
.laboratory-nav-item{
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
.laboratory-content-wra{
  display: inline-block;
  width: 750px;
  margin-left: 20px;
  padding: 0 15px 92px 28px;
  vertical-align: top;
  background: #FFFFFF;
  overflow: hidden;
}
</style>
