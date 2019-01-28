<template lang="html">
  <div class="company_">
    <ul class="new-head">
      <li class="new-head-item" :class="{active: index == 11}" @click="_getContent(11)">公司简介</li>
      <li class="new-head-item" :class="{active: index == 12}" @click="_getContent(12)">主营业务</li>
      <li class="new-head-item" :class="{active: index == 13}" @click="_getContent(13)">智慧农业物联网平台简介</li>
      <li class="new-head-item" :class="{active: index == 14}" @click="_getContent(14)">智慧农业开放平台简介</li>
    </ul>
    <h4 class="company-tit">{{conTitle}}</h4>
    <div class="company-content" v-html="comData"></div>
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
      index: 11,
      comData: '',
      conTitle: ''
    }
  },
  created () {
    setTimeout(() => {
      this._getContent()
    }, 20)
  },
  methods: {
    _getContent (ind) {
      if (ind) this.index = ind
      axios(`${APIYRL}/articleInfo.do?method=articleList&search_type=${this.index}&pageSize=10&pageNo=1`, {
        method: 'GET'
      }).then(response => {
        if (response.data.code === 0) {
          if (response.data.result.data.length > 0) {
            this.comData = response.data.result.data[0].content
            this.conTitle = response.data.result.data[0].title
          } else {
            this.comData = ''
            this.conTitle = '暂无'
          }
        } else {
          Message.info('查询失败')
        }
      })
    }
  }
}
</script>

<style lang="css" scoped>
.company_{
  width: 1050px;
  margin: 0 auto;
  padding:  20px 100px;
  background: #fff;
}
.new-head{
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
.company-tit{
  height: 80px;
  line-height: 60px;
  font-size: 16px;
  color: #333;
  font-weight: 600;
  text-align: center;
}
.company-content{
  line-height: 20px;
}
</style>
