<template lang="html">
  <div class="survey">
    <div class="survey-nav-wra">
      <h3 class="survey-nav-tit">研究院概况</h3>
      <!-- <a class="survey-nav-item survey-nav-item-active" href="javascript:;">学院简介</a>
      <a class="survey-nav-item" href="javascript:;">机构组织</a>
      <a class="survey-nav-item" href="javascript:;">学院风光</a>
      <a class="survey-nav-item" href="javascript:;">区域地图</a> -->
      <router-link tag="div" to="/survey/college" class="survey-nav-item">学院简介</router-link>
      <router-link tag="div" to="/survey/organization" class="survey-nav-item">机构组织</router-link>
      <router-link tag="div" to="/survey/colleges" class="survey-nav-item">学院风光</router-link>
      <router-link tag="div" to="/survey/regional" class="survey-nav-item">区域地图</router-link>
      <router-link tag="div" to="/survey/talent" class="survey-nav-item">人才信息</router-link>

    </div>
    <div class="survey-content-wra">
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
.survey{
  width: 1050px;
  margin: 0 auto;
  padding-top: 24px;
  padding-bottom: 26px;
  font-size: 0;
}
.survey-nav-wra{
  display: inline-block;
  width: 280px;
  background: #fff;
  padding-bottom: 120px;
}
.survey-nav-tit{
  margin-bottom: 22px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: #0066CC;
  font-size: 16px;
  color: #FFFFFF;
}
.survey-nav-item{
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
/* .survey-nav-item-active,  */
.router-link-active, .router-link-exact-active{
  color: #0066CC;
}
.survey-content-wra{
  display: inline-block;
  width: 750px;
  margin-left: 20px;
  padding: 0 15px 92px 28px;
  vertical-align: top;
  background: #FFFFFF;
  overflow: hidden;
}
</style>
