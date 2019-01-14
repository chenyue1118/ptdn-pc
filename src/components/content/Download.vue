<template lang="html">
  <div class="download">
    <div class="download-nav-wra">
      <h3 class="download-nav-tit">文件下载</h3>
      <!-- <router-link tag="div" to="/download/college" class="download-nav-item">学院动态</router-link>
      <router-link tag="div" to="/download/dynamics" class="download-nav-item">本院动态</router-link>
      <router-link tag="div" to="/download/notice" class="download-nav-item">通知公告</router-link> -->
    </div>
    <div class="download-content-wra">
      <h3>文件下载</h3>
      <div class="download-line"></div>
      <div class="college-load" v-show="loading === true">
        <Spin class="college-loading" size="large"></Spin>
      </div>
      <div class="no-data" v-show= "contentArr.length === 0 && loading === false">
        暂无数据
      </div>
      <ul class="download-info-wra">
        <li class="download-info" v-for="(item, index) in contentArr" :key=index>
          <a :href="item.resourceUrl" :download="item.resourceName.split('.')[0]">
            <span class="download-info-tit">{{item.resourceName}}</span>
            <span class="download-info-time">{{item.createDate.substr(0, 16)}}</span>
          </a>
        </li>
      </ul>
      <div class="download-page">
        <Page :total="total" @on-change="showContent" show-sizer />
      </div>
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
      pageNo: 1,
      contentArr: [],
      total: 1
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
        'method': 'showResources',
        'pageSize': 10,
        'pageNo': this.pageNo
      })
      axios(`${APIYRL}/resourceInfo.do`, {
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
.download{
  width: 1050px;
  margin: 0 auto;
  padding-top: 24px;
  padding-bottom: 26px;
  font-size: 0;
}
.download-nav-wra{
  display: inline-block;
  width: 280px;
  background: #fff;
  padding-bottom: 120px;
}
.download-nav-tit{
  margin-bottom: 22px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: #0066CC;
  font-size: 16px;
  color: #FFFFFF;
}
.download-nav-item{
  display: block;
  width: 240px;
  height: 50px;
  margin: 0 auto 14px auto;
  line-height: 50px;
  background: rgba(144, 153 ,171, 0.16);
  font-size: 14px;
  color: #2D323B;
  text-align: center;
  cursor: pointer;
}
.router-link-active, .router-link-exact-active{
  color: #0066CC;
}
.download-content-wra{
  display: inline-block;
  width: 750px;
  margin-left: 20px;
  padding: 0 15px 92px 28px;
  vertical-align: top;
  background: #FFFFFF;
  overflow: hidden;
}
.download-content-wra h3{
  height: 48px;
  line-height: 48px;
  font-size: 14px;
  color: #0066CC;
}
.download-line{
  width: 130%;
  height: 1px;
  background: linear-gradient(to right, red, orange, yellow);
  transform: translateX(-20px);
}
.download-info-wra{
  width: 100%;
  min-height: 460px;
}
.download-info{
  height: 46px;
  line-height: 45px;
  border-bottom: 1px solid #e0e3e8;
}
.download-info a{
  display: block;
  width: 100%;
  padding: 0 26px;
  font-size: 0;
}
.download-info a span{
  display: inline-block;
  font-size: 14px;
}
.download-info-tit{
  width: 80%;
  color: #2D323B;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  vertical-align: top;
}
.download-info-time{
  width: 20%;
  color: #8E9091;
  text-align: right;
}
.download-page{
  padding: 40px 0;
  font-size: 12px;
  text-align: right;
}
.download-page{
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
