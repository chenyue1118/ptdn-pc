<template lang="html">
  <div class="header">
    <div class="header-wra">
       <div class="header-logo"></div>
       <div class="header-con">
         <div class="header-time">
           <span>{{SpecificDate}}</span>
           <span>{{timeWeek}}</span>
           <span>{{timeDs}}</span>
         </div>
         <div class="header-search">
           <input class="header-sea" type="text" name="search" v-model="searchCon" placeholder="请输入关键字" @keyup.enter="search"/>
           <!-- <span class="header-sea-btn" @click="search"></span> -->
           <div class="header-sea-wra"  @click="search">
             <Icon size="24" color="#8e8e93" type="md-search" />
           </div>
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
      // let Info = qs.stringify({
      //   'method': 'articleList',
      //   'search_type': '',
      //   'search_title': this.searchCon,
      //   'pageSize': 10,
      //   'pageNo': 1
      // })
      // axios(`${APIYRL}/articleInfo.do`, {
      //   method: 'POST',
      //   data: Info
      // }).then(response => {
      //   if (response.data.code === 0) {
      //     if (response.data.result.data.length > 0) {
      //       // this.$router.push({
      //       //   path: '/searchList',
      //       //   query: {
      //       //     id: this.searchCon
      //       //   }
      //       // })
      //     } else {
      //       Message.info('暂无数据')
      //     }
      //   } else {
      //     Message.info(response.data.msg || '查询出错')
      //   }
      // })
    }
  }
}
</script>

<style lang="css" scoped>
.header{
  width: 100%;
  height: 106px;
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
  background: url(../../common/image/icon-logo.png) no-repeat center;
  /* background-size: 495px 70px; */
  background-size: 92%;
  vertical-align: top;
  margin-top: -10px;
}
.header-con{
  display: inline-block;
  padding-left: 300px;
}
.header-time{
  display: flex;
  justify-content: space-between;
  width: 246px;
  height: 30px;
  line-height: 20px;
  font-size: 12px;
  color: #999;
}
.header-search{
  width: 246px;
  height: 32px;
  background: #fff;
  border-radius: 4px;
  padding-right: 10px;
  padding-left: 16px;
  background: #f8f9fa;
}
.header-sea{
  display: inline-block;
  width: 188px;
  height: 32px;
  padding: 0;
  line-height: 32px;
  font-size: 12px;
  color: #2D323B;
  border: none;
}
.header-sea-btn{
  display: inline-block;
  width: 20px;
  height: 32px;
  background: url(../../common/image/icon-search.png) no-repeat center;
  background-size: 20px 20px;
  vertical-align: top;
  cursor: pointer;
}
.header-sea-wra{
  display: inline-block;
  width: 32px;
  height: 32px;
  cursor: pointer;
  vertical-align: top;
}
.header-sea-wra i{
  display: block;
  width: 32px;
  height: 32px;
  line-height: 32px;
  text-align: center;
}
</style>
