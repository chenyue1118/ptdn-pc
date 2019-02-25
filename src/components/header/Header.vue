<template lang="html">
  <div class="header">
    <div class="header-wra">
       <div class="header-logo"></div>
       <div class="header-con">
         <div class="header-con-w" @click="location">
           <i></i>
           <span>智慧农业物联网平台</span>
         </div>
         <div class="header-con-k">
           <i></i>
           <span>智慧农业开放平台</span>
         </div>
       </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
// import qs from 'qs'
// import { Message } from 'iview'
// import { APIYRL } from '@/common/api/api'
export default {
  data () {
    return {
      SpecificDate: '',
      timeWeek: '',
      timeDs: '',
      searchCon: this.$route.query.id || ''
    }
  },
  mounted () {
    this.computingTime()
  },
  methods: {
    // 显示时间
    computingTime () {
      let time = new Date()
      let year = time.getFullYear()
      let month = time.getMonth() + 1
      let date = time.getDate()
      let day = time.getDay()
      let weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
      let week = weeks[day]
      let hour = time.getHours()
      let minutes = time.getMinutes()
      let seconds = time.getSeconds()
      this.SpecificDate = `${year}年${this.getFormat(month)}月${this.getFormat(date)}日`
      this.timeWeek = week
      this.timeDs = `${this.getFormat(hour)}:${this.getFormat(minutes)}:${this.getFormat(seconds)}`
      setTimeout(() => {
        this.computingTime()
      }, 1000)
    },
    // 格式化数据  小于10 补0
    getFormat (str) {
      return str < 10 ? '0' + str : str
    },
    search () {
      this.$router.push({
        path: '/searchList',
        query: {
          id: this.searchCon
        }
      })
    },
    location () {
      window.location.replace('http://yun.nxptdn.com')
    }
  }
}
</script>

<style lang="css" scoped>
.header{
  width: 100%;
  height: 106px;
  /* background: #fff; */
  background: url(../../common/image/header-bg.jpg) no-repeat center;
  background-size: cover;
}
.header-wra{
  width: 1050px;
  padding-top: 30px;
  margin: 0 auto;
  font-size: 0;
}
.header-logo{
  display: inline-block;
  width: 495px;
  height: 70px;
  /* background: url(../../common/image/icon-logo.png) no-repeat center; */
  background: url(../../common/image/icon-logo.png) no-repeat center left;
  /* background-size: 495px 70px; */
  background-size: 36%;
  vertical-align: top;
  margin-top: -10px;
}
.header-con{
  display: inline-block;
  height: 70px;
  padding-left: 150px;
  font-size: 0;
}
.header-con-w{
  cursor: pointer;
}
.header-con-w, .header-con-k{
  display: inline-block;
  height: 30px;
  font-size: 0;
}
.header-con-k{
  padding-left: 20px;
}
.header-con-w i, .header-con-k i{
  display: inline-block;
  width: 25px;
  height: 30px;
  background: url(../../common/image/icon-nav-le.png) no-repeat center;
  background-size: 80%;
  vertical-align: top;
}
.header-con-k i{
  background: url(../../common/image/icon-nav-ri.png) no-repeat center;
  background-size: 80%;
}
.header-con-w span, .header-con-k span{
  display: inline-block;
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  color: #fff;
  padding-left: 12px;
}
</style>
