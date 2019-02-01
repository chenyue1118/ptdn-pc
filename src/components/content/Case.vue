<template lang="html">
  <div class="product">
    <h3 class="pro-title">产品案例</h3>
    <div class="pro-nav">
      <Menu mode="horizontal" theme="light" active-name="41" @on-select ="navSelect">
          <!-- <MenuItem name="0">
            全部
          </MenuItem> -->
          <MenuItem name="41">
            智慧农业
          </MenuItem>
          <MenuItem name="42">
            智慧农业温棚
          </MenuItem>
          <MenuItem name="43">
            智慧农业大田
          </MenuItem>
          <MenuItem name="44">
            智慧农业渔业
          </MenuItem>
      </Menu>
    </div>
    <!-- <div class="pro-search">
      <Input search placeholder="Enter something..." />
    </div> -->
    <ul class="pro-popular">
      <li class="pro-popular-item active">推荐</li>
      <li class="pro-popular-item">热门</li>
      <li class="pro-popular-item">最新</li>
    </ul>
    <ul class="pro-lists">
      <li class="pro-list" v-for="(item, index) in deData" :key="index">
        <img class="pro-list-image" src="../../common/image/icon-more-news.jpg" alt="">
        <span class="pro-list-tit">{{item.title}}</span>
        <span class="pro-list-desc">项目介绍 <br /> {{item.description}}</span>
        <a class="pro-list-link" @click="_getDetails(item)">进一步了解</a>
      </li>
      <!-- <li class="pro-list">
        <img class="pro-list-image" src="../../common/image/scenery001.jpg" alt="">
        <span class="pro-list-tit">123项目</span>
        <span class="pro-list-desc">项目介绍 <br /> 这个是项目介绍这个是项目介绍这个是项目介绍</span>
        <a class="pro-list-link">进一步了解</a>
      </li>
      <li class="pro-list">
        <img class="pro-list-image" src="../../common/image/scenery001.jpg" alt="">
        <span class="pro-list-tit">123项目</span>
        <span class="pro-list-desc">项目介绍 <br /> 这个是项目介绍这个是项目介绍这个是项目介绍</span>
        <a class="pro-list-link">进一步了解</a>
      </li>
      <li class="pro-list">
        <img class="pro-list-image" src="../../common/image/scenery001.jpg" alt="">
        <span class="pro-list-tit">123项目</span>
        <span class="pro-list-desc">项目介绍 <br /> 这个是项目介绍这个是项目介绍这个是项目介绍</span>
        <a class="pro-list-link">进一步了解</a>
      </li> -->
    </ul>
    <div class="no-data" v-if="deData.length == 0">
      暂无数据
    </div>
    <div class="new-page" v-if="total > 0">
      <Page :current="current" :total="total" @on-change="_getCurr"></Page>
    </div>
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
      index: 41,
      navType: '1',
      deData: [],
      current: 1,
      total: 0
    }
  },
  created () {
    setTimeout(() => {
      this._getLists()
    }, 20)
  },
  methods: {
    _getLists (name) {
      if (name) this.index = name
      axios(`${APIYRL}/articleInfo.do?method=articleList&search_type=${this.index}&pageSize=10&pageNo=${this.current}`, {
        method: 'GET'
      }).then(response => {
        if (response.data.code === 0) {
          this.deData.length = 0
          this.total = response.data.result.totalRows
          if (response.data.result.data.length > 0) {
            this.deData = [...response.data.result.data]
          }
        } else {
          Message.info('查询失败')
        }
      })
    },
    _getDetails (item) {
      this.$router.push({
        path: '/ProductDetails',
        query: {
          id: item.id
        }
      })
    },
    _getCurr (curr) {
      this.current = curr
      this._getLists()
    },
    navSelect (name) {
      this.current = 1
      this._getLists(name)
    }
  }
}
</script>

<style lang="css">
.product{
  width: 1050px;
  margin: 0 auto;
}
.pro-title{
  height: 100px;
  line-height: 100px;
  font-size: 24px;
  color: #333;
  font-weight: 600;
  text-align: center;
}
.pro-nav{
  padding: 10px 0;
  text-align: center;
}
.pro-nav .ivu-menu{
  display: inline-block;
}
.pro-nav .ivu-menu-light{
  background: transparent;
}
.pro-nav .ivu-menu-horizontal.ivu-menu-light:after{
  height: 0;
}
.pro-search{
  width: 500px;
  margin: 12px auto;
}
.pro-popular{
  height: 40px;
  font-size: 0;
}
.pro-popular .active{
  border-bottom: 2px solid #abc;
}
.pro-popular-item{
  display: inline-block;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  color: #333;
  padding: 0 10px;
  cursor: pointer;
}
.pro-lists{
  width: 100%;
  padding: 20px 0 40px 0;
  font-size: 0;
}
.pro-list{
  display: inline-block;
  width: 23%;
  margin-left: 2.6%;
  background: #fff;
  vertical-align: top;
}
.pro-list:nth-child(4n+1) {
  margin-left: 0;
}
.pro-list-image{
  display: block;
  width: 100%;
}
.pro-list-tit{
  display: block;
  height: 40px;
  line-height: 20px;
  padding: 0 10px;
  margin: 10px 0;
  font-size: 14px;
  font-weight: 600;
  color: #333;
  overflow: hidden;
}
.pro-list-desc{
  display: block;
  height: 66px;
  padding: 0 10px;
  line-height: 22px;
  font-size: 12px;
  color: #666;
  overflow: hidden;
}
.pro-list-link{
  display: block;
  margin-top: 30px;
  padding: 10px;
  font-size: 14px;
  color: #333;
}
.new-page{
  padding: 10px 0;
  text-align: right;
}
.no-data{
  padding-bottom: 10px;
}
</style>
