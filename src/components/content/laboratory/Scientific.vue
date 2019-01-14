<template lang="html">
  <div class="scientific">
    <h3>科研成果</h3>
    <div class="college-line"></div>
    <div class="college-load" v-show="loading === true">
      <Spin class="college-loading" size="large"></Spin>
    </div>
    <div class="no-data" v-show= "contentArr.length === 0 && loading === false">
      暂无数据
    </div>
    <ul class="college-info-wra">
      <li class="college-info" v-for="(item, index) in contentArr" :key=index @click="showArticle(item)">
        <a href="javascript:;">
          <span class="college-info-tit">·{{item.title}}</span>
          <span class="college-info-time">{{item.createDate.substr(0, 16)}}</span>
        </a>
      </li>
    </ul>
    <div class="college-page" >
      <Page :total="total" @on-change="showContent" show-sizer />
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
      loading: true,
      totalRows: 10,
      pageNo: 1,
      total: 1,
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
        'search_type': 33,
        'search_title': '',
        'pageSize': 10,
        'pageNo': this.pageNo
      })
      axios(`${APIYRL}/articleInfo.do`, {
        method: 'POST',
        data: articleInfo
      }).then(response => {
        if (response.data.code === 0) {
          setTimeout(() => {
            this.loading = false
            this.contentArr = response.data.result.data
            this.total = response.data.result.totalRows
          }, 500)
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
.college-load{
  display: flex;
  justify-content: center;
  padding-top: 12px;
}
.scientific h3{
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
.college-info-wra{
  width: 100%;
  min-height: 460px;
}
.college-info{
  height: 46px;
  line-height: 45px;
  border-bottom: 1px solid #e0e3e8;
}
.college-info a{
  display: block;
  width: 100%;
  padding: 0 26px;
  font-size: 0;
}
.college-info a span{
  display: inline-block;
  font-size: 14px;
}
.college-info-tit{
  width: 80%;
  color: #2D323B;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  vertical-align: top;
}
.college-info-time{
  width: 20%;
  color: #8E9091;
  text-align: right;
}
.college-page{
  padding: 40px 0;
  font-size: 12px;
  text-align: right;
}
.no-data{
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 14px;
  color: #333;
}
</style>
