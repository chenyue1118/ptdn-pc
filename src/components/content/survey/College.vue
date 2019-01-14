<template lang="html">
  <div class="college">
    <h3>学院介绍</h3>
    <div class="college-line"></div>
    <div class="college-content" v-html="content_"></div>

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
      content_: ''
    }
  },
  created () {
    setTimeout(() => {
      this._getContent()
    }, 20)
  },
  methods: {
    _getContent () {
      let articleInfo = qs.stringify({
        'method': 'getArticleLatestByType',
        'typeId': 11
      })
      axios(`${APIYRL}/articleInfo.do`, {
        method: 'POST',
        data: articleInfo
      }).then(response => {
        if (response.data.code === 0) {
          this.content_ = response.data.result.content
        } else {
          Message.info('查询失败')
        }
      })
    }
  }
}
</script>

<style lang="css" scoped>
.college h3{
  height: 48px;
  line-height: 48px;
  font-size: 14px;
  color: #0066CC;
}
.college-line{
  width: 130%;
  height: 1px;
  background: linear-gradient(to right, red, orange, yellow);
  transform: translateX(-20px);
}
.college-content{
  padding-top: 20px;
  font-size: 14px;
}
.college p{
  padding-top: 12px;
  padding-bottom: 10px;
  font-size: 14px;
  color: #2D323B;
  line-height: 24px;
}
</style>
