<template lang="html">
  <div class="new_">
    <ul class="new-head">
      <li class="new-head-item active">全部</li>
      <li class="new-head-item">公司新闻</li>
      <li class="new-head-item">行业资讯</li>
    </ul>
    <ul class="new-body">
      <li class="new-body-item" @click="newArticle">
        <div class="new-body-item-img">
          <img src="../../common/image/scenery002.jpg">
        </div>
        <div class="new-body-item-con">
          <h5>中国科学科学大学北京研究院北京研究院</h5>
          <span>这个是简介这个是简介这个是简介这个是简介这个是简介这个是简介这个是简介这个是简介这个是简介这个是简介这个是简介这个是简介这个是简介</span>
          <i>2018-12-24</i>
        </div>
      </li>
      <li class="new-body-item">
        <div class="new-body-item-img">
          <img src="../../common/image/scenery002.jpg">
        </div>
        <div class="new-body-item-con">
          <h5>中国科学科学大学北京研究院北京研究院</h5>
          <span>这个是简介这个是简介这个是简介这个是简介这个是简介这个是简介这个是简介这个是简介这个是简介这个是简介这个是简介这个是简介这个是简介</span>
          <i>2018-12-24</i>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    newArticle () {
      this.$router.push({
        path: '/NewsArticle'
      })
    }
  }
}
</script>

<style lang="css" scoped>
.new_{
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
.new-body{
  width: 100%;
  padding-bottom: 20px;
}
.new-body-item{
  display: flex;
  width: 100%;
  padding-bottom: 30px;
  cursor: pointer;
}
.new-body-item-img{
  flex: 0 0 250px;
  padding-right: 20px;
}
.new-body-item-img img{
  display: inline-block;
  width: 100%;
  height: 180px;
}
.new-body-item-con{
  flex: 1;
  padding-right: 10px;
}
.new-body-item-con h5{
  height: 40px;
  font-size: 16px;
}
.new-body-item-con span{
  display: block;
  height: 110px;
  line-height: 20px;
  font-size: 12px;
  color: #666;
}
.new-body-item-con i{
  display: block;
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  color: #444;
}
</style>
