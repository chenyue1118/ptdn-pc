<template lang="html">
  <div class="article">
    <h4 class="article-title">{{title}}</h4>
    <div class="article-nav">
      <span>发布时间：</span>{{time}}
      <span>作者：</span> 中国科技大学
    </div>
    <div class="article-content" v-html="content"></div>
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
      if (to.path === '/search') {
        vm._articleInfo(vm.$route.query.id)
      }
    })
  },
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
            this.author = response.data.result.createBy
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

<style lang="css" scoped>
.article{
  width: 800px;
  margin: 0 auto;
  padding: 30px 20px;
}
.article-title{
  width: 100%;
  height: 60px;
  text-align: center;
  font-size: 20px;
  color: #333;
  font-weight: 600;
}
.article-nav{
  width: 100%;
  height: 24px;
  text-align: center;
  font-size: 14px;
  color: #444;
}
.article-content{
  padding: 20px 0 10px 0;
}
</style>
