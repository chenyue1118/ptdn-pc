<template lang="html">
  <div class="new-art">
    <ul class="new-head">
      <li class="new-head-item active">全部</li>
      <li class="new-head-item">公司新闻</li>
      <li class="new-head-item">行业资讯</li>
    </ul>
    <div class="article">
      <h4 class="article-title">{{title}}</h4>
      <div class="article-nav">
        <span>发布时间：</span>&nbsp;{{time}}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>作者：</span>&nbsp;中国科学技术大学
      </div>
      <div class="article-line"></div>
      <div class="article-content" v-html="content"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '学术荣誉',
      time: '2018-12-04 14:50',
      author: ' 中国科学技术大学',
      content: '国际电气与电子工程师学会院士（IEEE Fellow）国际电气与电子工程师学会院士（IEEE Fellow）国际电气与电子工程师学会院士（IEEE Fellow）国际电气与电子工程师学会院士（IEEE Fellow）国际电气与电子工程师学会院士（IEEE Fellow）国际电气与电子工程师学会院士（IEEE Fellow）国际电气与电子工程师学会院士（IEEE Fellow）国际电气与电子工程师学会院士（IEEE Fellow）国际电气与电子工程师学会院士（IEEE Fellow）国际电气与电子工程师学会院士（IEEE Fellow）国际电气与电子工程师学会院士（IEEE Fellow）国际电气与电子工程师学会院士（IEEE Fellow）国际电气与电子工程师学会院士（IEEE Fellow）国际电气与电子工程师学会院士（IEEE Fellow）国际电气与电子工程师学会院士（IEEE Fellow）国际电气与电子工程师学会院士（IEEE Fellow）国际电气与电子工程师学会院士（IEEE Fellow）国际电气与电子工程师学会院士（IEEE Fellow）'
    }
  }
}
</script>

<style lang="css" scoped>
.new-art{
  width: 1050px;
  margin: 0 auto;
  padding: 20px;
  background: #fff;
}
.new-head{
  width: 300px;
  margin: 0 auto;
  padding-bottom: 30px;
  font-size: 0;
  text-align: center;
}
.new-head-item{
  display: inline-block;
  padding-right: 14px;
  font-size: 14px;
  cursor: pointer;
}
.new-head .active{
  color: #0066CC;
}
.article{
  width: 100%;
  margin: 0 auto;
  padding: 100px 100px 30px 100px;
  background: #fff;
}
.article-title{
  width: 100%;
  height: 100px;
  text-align: center;
  font-weight: 600;
  font-size: 30px;
  color: #910006;
  font-weight: normal;
  line-height: 1.2em;
}
.article-nav{
  width: 100%;
  height: 24px;
  text-align: center;
  font-size: 14px;
  color: #444;
}
.article-line{
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, red, orange, yellow);
  margin: 20px auto 40px auto;
}
.article-content{
  padding: 20px 10px 10px 10px;
  line-height: 20px!important;
}
.article-content p{
  padding-bottom: 16px;
}
.article-content p img{
  display: inline-block;
  width: 50%;
  margin: 0 auto;
}
</style>
