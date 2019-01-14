<template lang="html">
  <div class="search">
    <h3><Icon type="ios-list-box-outline" size=20 /> <span>搜索列表</span> </h3>
    <div class="search-line"></div>
    <div class="college-load" v-show="loading === true">
      <Spin class="college-loading" size="large"></Spin>
    </div>
    <div class="no-data" v-show= "contentArr.length === 0 && loading === false">
      暂无数据
    </div>
    <ul class="search-wra">
      <li class="search-item" v-for = "(item, index) in contentArr" :key = "index" @click="showArticle(item)">
        <span class="search-tit">{{item.title}}</span>
        <span class="search-time">{{item.createDate.substr(0, 16)}}</span>
      </li>
    </ul>
    <div class="search-page">
      <Page :total="total" @on-change="showContent" show-sizer v-show= "contentArr.length > 0"/>
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
      total: 0,
      pageNo: 1,
      contentArr: []
    }
  },
  created () {
    setTimeout(() => {
      this._getContent()
    }, 200)
  },
  watch: {
    '$route' () {
      this.loading = true
      this._getContent()
    }
  },
  methods: {
    _getContent () {
      let Info = qs.stringify({
        'method': 'articleList',
        'search_type': '',
        'search_title': this.$route.query.id,
        'pageSize': 10,
        'pageNo': this.pageNo
      })
      axios(`${APIYRL}/articleInfo.do`, {
        method: 'POST',
        data: Info
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
        path: '/search',
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
.search{
  width: 900px;
  margin: 12px auto;
}
.search h3{
  height: 51px;
  line-height: 50px;
  font-size: 15px;
  color: #0066CC;
  font-weight: 500;
}
.search h3 span{
  display: inline-block;
  transform: translate(6px, 2px);
  font-size: 18px;
}
.search-line{
  width: 130%;
  height: 1px;
  background: linear-gradient(to right, red, orange, yellow);
  transform: translateX(-20px);
}
.search-wra{
  width: 100%;
  min-height: 460px;
  padding: 10px 6px;
}
.search-item{
  width: 100%;
  height: 46px;
  line-height: 45px;
  border-bottom: 1px solid #e0e3e8;
  font-size: 0;
  cursor: pointer;
}
.search-tit{
  display: inline-block;
  font-size: 14px;
  width: 80%;
  color: #2D323B;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  vertical-align: top;
}
.search-time{
  display: inline-block;
  font-size: 14px;
  width: 20%;
  color: #8E9091;
  text-align: right;
}
.search-page{
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
