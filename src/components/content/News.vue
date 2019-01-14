<template lang="html">
  <div class="news">
    <div class="news-nav-wra">
      <h3 class="news-nav-tit">新闻公告</h3>
      <router-link tag="div" to="/news/college" class="news-nav-item">学院动态</router-link>
      <router-link tag="div" to="/news/dynamics" class="news-nav-item">本院动态</router-link>
      <router-link tag="div" to="/news/notice" class="news-nav-item">通知公告</router-link>
    </div>
    <div class="news-content-wra">
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
.news{
  width: 1050px;
  margin: 0 auto;
  padding-top: 24px;
  padding-bottom: 26px;
  font-size: 0;
}
.news-nav-wra{
  display: inline-block;
  width: 280px;
  background: #fff;
  padding-bottom: 120px;
}
.news-nav-tit{
  margin-bottom: 22px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: #0066CC;
  font-size: 16px;
  color: #FFFFFF;
}
.news-nav-item{
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
.news-content-wra{
  display: inline-block;
  width: 750px;
  margin-left: 20px;
  padding: 0 15px 92px 28px;
  vertical-align: top;
  background: #FFFFFF;
  overflow: hidden;
}
</style>
