<template lang="html">
  <div class="new-art">
    <ul class="new-head">
      <!-- <li class="new-head-item">全部</li> -->
      <li class="new-head-item" :class="{active: type == 21}">公司新闻</li>
      <li class="new-head-item" :class="{active: type == 22}">行业资讯</li>
    </ul>
    <div class="article">
      <h4 class="article-title">{{title}}</h4>
      <div class="article-nav">
        <span>发布时间：</span>&nbsp;{{time}}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>作者：</span>&nbsp;{{author}}
      </div>
      <div class="article-line"></div>
      <div class="article-content" v-html="content"></div>
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
      id: 0,
      type: 21,
      title: '学术荣誉',
      time: '2018-12-04 14:50',
      author: '',
      content: ''
    }
  },
  // created () {
  //   setTimeout(() => {
  //     this._getNewsContent()
  //   }, 20)
  // },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.id = vm.$route.query.id
      vm.type = vm.$route.query.type
      vm._getNewsContent()
    })
  },
  methods: {
    _getNewsContent () {
      axios(`${APIYRL}/articleInfo.do?method=articleInfo&article_id=${this.id}`, {
        method: 'GET'
      }).then(response => {
        if (response.data.code === 0) {
          this.title = response.data.result.title
          this.time = response.data.result.createDate.substr(0, 16)
          this.author = response.data.result.releaseMan
          this.content = response.data.result.content
        } else {
          Message.info('查询失败')
        }
      })
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
  font-size: 16px;
  font-weight: 600;
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
