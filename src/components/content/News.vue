<template lang="html">
  <div class="new_">
    <ul class="new-head">
      <!-- <li class="new-head-item">全部</li> -->
      <li class="new-head-item" :class="{active: navIndex == 21}" @click="_getNews(21, 1)">公司新闻</li>
      <li class="new-head-item" :class="{active: navIndex == 22}" @click="_getNews(22, 1)">行业资讯</li>
    </ul>
    <ul class="new-body">
      <li class="new-body-item" @click="newArticle(item)" v-for="(item, index) in newList" :key="index">
        <div class="new-body-item-img">
          <img v-if="item.pictureUrl" :src="item.pictureUrl" :onerror="imageError">
          <img v-else src="../../common/image/icon-more-news.jpg" :onerror="imageError">
        </div>
        <div class="new-body-item-con">
          <h5>{{item.title}}</h5>
          <span>{{item.description}}</span>
          <i>{{item.createDate.substr(0, 16)}}</i>
        </div>
      </li>
      <!-- <li class="new-body-item">
        <div class="new-body-item-img">
          <img src="../../common/image/scenery002.jpg">
        </div>
        <div class="new-body-item-con">
          <h5>中国科学科学大学北京研究院北京研究院</h5>
          <span>这个是简介这个是简介这个是简介这个是简介这个是简介这个是简介这个是简介这个是简介这个是简介这个是简介这个是简介这个是简介这个是简介</span>
          <i>2018-12-24</i>
        </div>
      </li> -->
    </ul>
    <div class="new-page">
      <Page :current="current" :total="total" @on-change="_getCurr"></Page>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// import qs from 'qs'
import { Message } from 'iview'
import { APIYRL } from '@/common/api/api'

export default {
  data () {
    return {
      navIndex: 21,
      newList: [],
      current: 1,
      total: 1,
      imageError: `this.src="../../common/image/icon-more-news.jpg"`
    }
  },
  // created () {
  //   setTimeout(() => {
  //     this._getNews()
  //   }, 20)
  // },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm._getNews()
    })
  },
  methods: {
    newArticle (item) {
      this.$router.push({
        path: '/NewsArticle',
        query: {
          type: this.navIndex,
          id: item.id
        }
      })
    },
    _getNews (ind, curr) {
      if (this.$route.query.id) {
        this.navIndex = this.$route.query.id
      }
      if (ind) {
        this.navIndex = ind
      }
      if (curr) {
        this.current = curr
      }
      axios(`${APIYRL}/articleInfo.do?method=articleList&search_type=${this.navIndex}&pageSize=10&pageNo=${this.current}`, {
        method: 'GET'
      }).then(response => {
        if (response.data.code === 0) {
          this.newList.length = 0
          this.newList = [...response.data.result.data]
          this.total = parseInt(response.data.result.totalRows)
        } else {
          Message.info('查询失败')
        }
      })
    },
    _getCurr (data) {
      this.current = 1
      this._getNews()
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
  font-size: 16px;
  font-weight: 600;
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
.new-body-item-con h5:hover{
  color: #0066CC;
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
.new-page{
  text-align: right;
}
</style>
