<template lang="html">
  <div class="colleges">
    <h3>学院风光</h3>
    <div class="colleges-line"></div>
    <div class="college-load" v-show="loading === true">
      <Spin class="college-loading" size="large"></Spin>
    </div>
    <div class="no-data" v-show= "contentArr.length === 0 && loading === false">
      暂无数据
    </div>
    <!-- <ul class="colleges-wra">
      <li class="colleges-item" v-for="(item, index) in imageArr" :key="index">
        <img :src="item.picture" alt="image">
        <div class="con">
          <h6>{{item.title}}</h6>
          <p>{{item.description}}</p>
        </div>
      </li>
    </ul> -->
    <ul class="college-info-wra">
      <li class="college-info" v-for="(item, index) in contentArr" :key=index @click="showArticle(item)">
        <a href="javascript:;">
          <span class="college-info-tit">·{{item.title}}</span>
          <span class="college-info-time">{{item.createDate.substr(0, 16)}}</span>
        </a>
      </li>
    </ul>
    <div class="college-page">
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
    }, 20)
  },
  methods: {
    // _getImage () {
    //   let articleInfo = qs.stringify({
    //     'method': 'showRollingPicture',
    //     'rollingType': 2
    //   })
    //   axios(`${APIYRL}/rolling.do`, {
    //     method: 'POST',
    //     data: articleInfo
    //   }).then(response => {
    //     if (response.data.code === 0) {
    //       setTimeout(() => {
    //         this.loading = false
    //         this.imageArr = response.data.result
    //       }, 500)
    //     } else {
    //       this.loading = false
    //       Message.info('查询失败')
    //     }
    //   })
    // }
    _getContent () {
      let articleInfo = qs.stringify({
        'method': 'articleList',
        'search_type': 13,
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
          this.loading = false
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
.colleges h3{
  height: 48px;
  line-height: 48px;
  font-size: 14px;
  color: #0066CC;
}
.colleges-line{
  width: 130%;
  height: 1px;
  background: linear-gradient(to right, red, orange, yellow);
  transform: translateX(-20px);
}
.colleges-wra{
  width: 100%;
  padding-top: 20px;
}
.colleges-item{
  width: 100%;
  display: flex;
  height: 160px;
}
.colleges-item img{
  flex: 0 0 200px;
  width: 200px;
  padding-bottom: 10px
}
.colleges-item .con{
  flex: 1;
  padding-top: 10px;
  padding-left: 12px;
}
.colleges-item .con h6{
  height: 24px;
  line-height: 24px;
  font-size: 18px;
  color: #333;
  font-weight: 600;
}
.colleges-item .con p{
  line-height: 20px;
  font-size: 12px;
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
