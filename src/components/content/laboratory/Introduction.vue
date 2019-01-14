<template lang="html">
  <div class="introduction">
    <h3>实验室简介</h3>
    <div class="college-line"></div>
    <ul class="introduction-wra">
      <li class="introduction-item" v-for = "(item, index) in contentArr" :key = "index" @click="showArticle(item)">
        <span>{{item.typeName}}</span>
      </li>
      <!-- <li class="introduction-item">
        <span>国家重点工程实验室类脑智能技术及应用联合实验室</span>
      </li>
      <li class="introduction-item">
        <span>快手科技智能媒体技术联合实验室</span>
      </li>
      <li class="introduction-item">
        <span>中科视元智能视频技术联合实验室</span>
      </li> -->
    </ul>
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
      contentArr: []
    }
  },
  created () {
    setTimeout(() => {
      this._getContent()
    }, 200)
  },
  methods: {
    _getContent () {
      let articleInfo = qs.stringify({
        'method': 'articleList',
        'search_type': 31,
        'search_title': '',
        'pageSize': 10,
        'pageNo': 1
      })
      axios(`${APIYRL}/articleInfo.do`, {
        method: 'POST',
        data: articleInfo
      }).then(response => {
        if (response.data.code === 0) {
          this.contentArr = response.data.result.data
        } else {
          Message.info(response.data.msg || '查询出错')
        }
      })
    },
    showContent (data) {
      this.pageNo = data
      this._getContent()
    },
    showArticle (item) {
      this.$router.push({
        path: '/article',
        query: {
          id: item.id
        }
      })
    }
  }
}
</script>

<style lang="css" scoped>
.introduction h3{
  height: 51px;
  line-height: 50px;
  font-size: 14px;
  color: #0066CC;
  font-weight: bold;
}
.college-line{
  width: 130%;
  height: 1px;
  background: linear-gradient(to right, red, orange, yellow);
  transform: translateX(-20px);
}
.introduction-wra{
  width: 100%;
  padding: 30px 0 100px 0;
  display: flex;
  justify-content: space-between;
}
.introduction-item{
  width: 260px;
  height: 118px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  background: #4A90E2;
}
.introduction-item span{
  display: inline-block;
  width: 100%;
  text-align: center;
  font-size: 14px;
  color: #FFFFFF;
}
</style>
