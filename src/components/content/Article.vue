<template lang="html">
  <div class="article-wra">
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
import axios from 'axios'
import qs from 'qs'
import { Message } from 'iview'
import { APIYRL } from '@/common/api/api'
export default {
  data () {
    return {
      title: '',
      time: '',
      author: '',
      content: ''
    }
  },
  created () {
    this._articleInfo(this.$route.query.id)
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (to.path === '/article') {
        vm._articleInfo(vm.$route.query.id)
      }
    })
  },
  // watch: {
  //   '$route' (to, from) {
  //     if (to.path === '/article') {
  //       this._articleInfo(this.$route.query.id)
  //     }
  //   }
  // },
  methods: {
    _articleInfo (id) {
      let articleInfoData = qs.stringify({
        'method': 'articleInfo',
        'article_id': id
      })
      axios(`${APIYRL}/articleInfo.do`, {
        method: 'POST',
        data: articleInfoData
      }).then(response => {
        if (response.data.code === 0) {
          if (response.data.code === 0) {
            // response.data.result
            this.title = response.data.result.title
            this.time = response.data.result.createDate.substr(0, 16)
            this.author = response.data.result.releaseMan
            this.content = response.data.result.content
          } else {
            Message.info(response.data.msg || '查询出错')
          }
        } else {
          Message.info('查询出错')
        }
      })
    }
  }
}
</script>

<style lang="css">
.article-wra{
  width: 100%;
}
.article-image{
  width: 100%;
}
.article{
  width: 1100px;
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
