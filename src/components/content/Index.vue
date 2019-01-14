<template lang="html">
  <div class="index">
    <div class="index-banner">
      <Carousel
        v-model="banner"
        :autoplay="setting.autoplay"
        :autoplay-speed="setting.autoplaySpeed"
        :dots="setting.dots"
        :radius-dot="setting.radiusDot"
        :trigger="setting.trigger"
        :arrow="setting.arrow"
        easing="ease">
          <CarouselItem v-for="(item, index) in bannerArr" :key=index>
              <a class="index-banner-img" :href="item.pictureUrl">
                <img :src="item.picture" :alt="item.description" :title="item.title">
              </a>
          </CarouselItem>
      </Carousel>
    </div>
    <div class="index-news-wra">
      <div class="index-news-school">
        <div class="index-news-school-tit"><Icon type="ios-paper-outline" size=22 color="#0066CC" /> &nbsp;校内新闻</div>
        <div class="index-news-school-con-wra" ref="conWra">
          <marquee align="left" ref="marqueeX" @mouseout="marqueeMouseout(1)" @mouseover="marqueeMouseenter(1)">
            <a class="index-news-school-con" href="javascript:;" v-for="(item, index) in listData" :key = "index" @click="pushArtilce(item.id)">{{item.title}}</a>
          </marquee>
        </div>
        <div class="index-news-school-more" @click="pushTo(1)">
          <span>更多</span>
          <Icon size=14 color="#666" type="ios-arrow-forward" />
        </div>
      </div>
      <ul class="index-news-data">
        <li class="index-news-data-item" v-for="(item, index) in noticeBulletin" :key="index" @click="pushArtilce(item.id)">
          <div class="index-news-data-detail">
            <span>{{item.createDate.substr(8, 2)}}</span>
            <span>{{item.createDate.substr(0, 7)}}</span>
          </div>
          <div class="index-news-data-con">
            <span class="title">{{item.title}}</span>
            <span>{{item.description}}</span>
          </div>
        </li>
        <!-- <li class="index-news-data-item">
          <div class="index-news-data-detail">
            <span>25</span>
            <span>2018-09</span>
          </div>
          <div class="index-news-data-con">
            <span>随机数研究新突破：中国科大在国...</span>
            <span>近日，中国科学技术大学教授潘建伟及其同事张强、范靖云、马雄峰等与中科院上海微系统与信息技术研究所和日...</span>
          </div>
        </li>
        <li class="index-news-data-item">
          <div class="index-news-data-detail">
            <span>25</span>
            <span>2018-09</span>
          </div>
          <div class="index-news-data-con">
            <span>常务副校长潘建伟荣获“中国侨界...</span>
            <span>第十次全国归侨侨眷代表大会8月29日上午在北京人民大会堂开幕。习近平、李克强、栗战书、汪洋、王沪宁、韩...</span>
          </div>
        </li> -->
      </ul>
    </div>
    <ul class="index-news-nav">
      <li class="index-news-nav-item">
        <div class="index-news-nav-title">
          <h4 class="index-news-nav-tit"><Icon type="md-pricetags" size=20 />&nbsp;本院快讯</h4>
          <div class="index-news-nav-more" @click="pushTo(2)">
            <span>更多</span>
            <Icon size=14 color="#666" type="ios-arrow-forward" />
          </div>
        </div>
        <div class="index-news-nav-notices">
          <a href="javascript:;" class="index-news-nav-notice" v-for="(item, index) in ourNews" :key = "index" @click="pushArtilce(item.id)">{{item.title}}</a>
          <!-- <a href="javascript:;" class="index-news-nav-notice">·关于2018年国庆节放假的通知</a>
          <a href="javascript:;" class="index-news-nav-notice">·2018年院工会系列活动</a>
          <a href="javascript:;" class="index-news-nav-notice">·2018年院工会系列活动</a>
          <a href="javascript:;" class="index-news-nav-notice">·2018年院工会系列活动</a> -->
        </div>
      </li>
      <li class="index-news-nav-item">
        <div class="index-news-nav-title">
          <h4 class="index-news-nav-tit"><Icon type="md-pricetags" size=20 />&nbsp;公共资源</h4>
          <div class="index-news-nav-more" @click="pushTo(3)">
            <span>更多</span>
            <Icon size=14 color="#666" type="ios-arrow-forward" />
          </div>
        </div>
        <div class="index-news-nav-notices">
          <a href="javascript:;" class="index-news-nav-notice" v-for="(item, index) in publicResource" :key = "index" @click="pushArtilce(item.id)">{{item.title}}</a>
          <!-- <a href="javascript:;" class="index-news-nav-notice">·关于2018年国庆节放假的通知</a>
          <a href="javascript:;" class="index-news-nav-notice">·2018年院工会系列活动</a>
          <a href="javascript:;" class="index-news-nav-notice">·2018年院工会系列活动</a>
          <a href="javascript:;" class="index-news-nav-notice">·2018年院工会系列活动</a> -->
        </div>
      </li>
      <li class="index-news-nav-item">
        <div class="index-news-nav-title">
          <h4 class="index-news-nav-tit"><Icon type="md-pricetags" size=20 />&nbsp;人才培养</h4>
          <div class="index-news-nav-more" @click="pushTo(4)">
            <span>更多</span>
            <Icon size=14 color="#666" type="ios-arrow-forward" />
          </div>
        </div>
        <div class="index-news-nav-notices">
          <a href="javascript:;" class="index-news-nav-notice" v-for="(item, index) in personnelTrain" :key = "index" @click="pushArtilce(item.id)">{{item.title}}</a>
          <!-- <a href="javascript:;" class="index-news-nav-notice">·关于2018年国庆节放假的通知</a>
          <a href="javascript:;" class="index-news-nav-notice">·2018年院工会系列活动</a>
          <a href="javascript:;" class="index-news-nav-notice">·2018年院工会系列活动</a>
          <a href="javascript:;" class="index-news-nav-notice">·2018年院工会系列活动</a> -->
        </div>
      </li>
    </ul>
    <div class="index-news-scenery">
      <ul class="index-news-scenery-hd">
        <li class="index-news-scenery-tit index-news-scenery-active"><Icon type="md-school" size=20 />&nbsp;学院风光</li>
      </ul>
      <ul class="index-news-scenery-bd">
        <marquee align="left" ref="marqueeCon" @mouseout="marqueeMouseout(2)" @mouseover="marqueeMouseenter(2)">
        <li class="index-news-scenery-content" v-for="(item, index) in collegeScenery" :key="index">
          <img :src="item.picture" alt="">
        </li>
        <!-- <li class="index-news-scenery-content">
          <img src="../../common/image/scenery002.jpg" alt="">
        </li>
        <li class="index-news-scenery-content">
          <img src="../../common/image/scenery003.jpg" alt="">
        </li>
        <li class="index-news-scenery-content">
          <img src="../../common/image/scenery001.jpg" alt="">
        </li>
        <li class="index-news-scenery-content">
          <img src="../../common/image/scenery002.jpg" alt="">
        </li>
        <li class="index-news-scenery-content">
          <img src="../../common/image/scenery003.jpg" alt="">
        </li>
        <li class="index-news-scenery-content">
          <img src="../../common/image/scenery001.jpg" alt="">
        </li> -->
        </marquee>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
import Marquee from 'vue-marquee'
import { Message } from 'iview'
import { APIYRL } from '@/common/api/api'
export default {
  data () {
    return {
      banner: 0,
      setting: {
        imgShow: true,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: 'inside',
        radiusDot: false,
        trigger: 'click',
        arrow: 'hover'
      },
      // banner 图片
      bannerArr: [],
      // 校内新闻
      listData: [],
      // 通知公告
      noticeBulletin: [],
      // 本院快讯
      ourNews: [],
      // 公共资源
      publicResource: [],
      // 人才培养
      personnelTrain: [],
      // 学院风光
      collegeScenery: []
    }
  },
  created () {
    setTimeout(() => {
      this._getBanner()
      this._getList()
      this._getNoticeBulletin()
      this._getOurNews()
      this._getPublicResource()
      this._getPersonnelTrain()
      this._getCollegeScenery()
    }, 20)
  },
  methods: {
    _getBanner () {
      let articleInfo = qs.stringify({
        'method': 'showRollingPicture',
        'rollingType': 1
      })
      axios(`${APIYRL}/rolling.do?method=showRollingPicture`, {
        method: 'GET',
        data: articleInfo
      }).then(response => {
        if (response.data.code === 0) {
          this.bannerArr = response.data.result
        } else {
          Message.info('查询失败')
        }
      })
    },
    _getList () {
      let newsInfo = qs.stringify({
        'method': 'articleListNumber',
        'search_type': 21,
        'search_number': 10
      })
      axios(`${APIYRL}/articleInfo.do`, {
        method: 'POST',
        data: newsInfo
      }).then(response => {
        if (response.data.code === 0) {
          this.listData = response.data.result
        } else {
          Message.info('查询失败')
        }
      })
    },
    _getNoticeBulletin () {
      let newsInfo = qs.stringify({
        'method': 'articleListNumber',
        'search_type': 23,
        'search_number': 3
      })
      axios(`${APIYRL}/articleInfo.do`, {
        method: 'POST',
        data: newsInfo
      }).then(response => {
        if (response.data.code === 0) {
          this.noticeBulletin = response.data.result
        } else {
          Message.info('查询失败')
        }
      })
    },
    _getOurNews () {
      let newsInfo = qs.stringify({
        'method': 'articleListNumber',
        'search_type': 22,
        'search_number': 4
      })
      axios(`${APIYRL}/articleInfo.do`, {
        method: 'POST',
        data: newsInfo
      }).then(response => {
        if (response.data.code === 0) {
          this.ourNews = response.data.result
        } else {
          Message.info('查询失败')
        }
      })
    },
    _getPublicResource () {
      let newsInfo = qs.stringify({
        'method': 'articleListNumber',
        'search_type': 51,
        'search_number': 4
      })
      axios(`${APIYRL}/articleInfo.do`, {
        method: 'POST',
        data: newsInfo
      }).then(response => {
        if (response.data.code === 0) {
          this.publicResource = response.data.result
        } else {
          Message.info('查询失败')
        }
      })
    },
    _getPersonnelTrain () {
      let newsInfo = qs.stringify({
        'method': 'articleListNumber',
        'search_type': 42,
        'search_number': 4
      })
      axios(`${APIYRL}/articleInfo.do`, {
        method: 'POST',
        data: newsInfo
      }).then(response => {
        if (response.data.code === 0) {
          this.personnelTrain = response.data.result
        } else {
          Message.info('查询失败')
        }
      })
    },
    _getCollegeScenery () {
      let articleInfo = qs.stringify({
        'method': 'showRollingPicture',
        'rollingType': 2
      })
      axios(`${APIYRL}/rolling.do`, {
        method: 'POST',
        data: articleInfo
      }).then(response => {
        if (response.data.code === 0) {
          this.collegeScenery = response.data.result.concat(response.data.result)
        } else {
          Message.info('查询失败')
        }
      })
    },
    pushTo (index) {
      if (index === 1) {
        this.$router.push({
          path: '/news/college'
        })
      } else if (index === 2) {
        this.$router.push({
          path: '/news/dynamics'
        })
      } else if (index === 3) {
        this.$router.push({
          path: '/resource/college'
        })
      } else if (index === 4) {
        this.$router.push({
          path: '/training/enrolment'
        })
      }
    },
    pushArtilce (id) {
      this.$router.push({
        path: '/article',
        query: {
          id: id
        }
      })
    },
    marqueeMouseenter (index) {
      if (index === 2) {
        this.$refs.marqueeCon.stop()
      } else {
        this.$refs.marqueeX.stop()
      }
    },
    marqueeMouseout (index) {
      if (index === 2) {
        this.$refs.marqueeCon.start()
      } else {
        this.$refs.marqueeX.start()
      }
    }
  },
  components: {
    'vue-marquee': Marquee,
    'item': ''
  }
}
</script>

<style lang="css" scoped>
.index{
  width: 1050px;
  margin: 0 auto;
  padding-bottom: 26px;
}
.index-banner-img{
  width: 100%;
  height: 465px;
}
.index-banner-img img{
  display: block;
  width: 100%;
  height: 465px;
}
.index-news-wra{
  width: 100%;
  margin-top: 14px;
  background: #fff;
  box-shadow: 2px 2px 4px 0px #999;
}
.index-news-school{
  display: flex;
  width: 100%;
  padding: 0 18px 0 26px;
  height: 52px;
  border-bottom: 1px solid #e0e3e8;
}
.index-news-school-tit{
  flex: 0 0 116px;
  height: 52px;
  line-height: 60px;
  font-size: 18px;
  color: #0066CC;
  font-weight: 500;
  font-family: "PingFangSC-Medium";
}
.index-news-school-con-wra{
  flex: 1;
  padding: 0 20px;
  overflow: hidden;
}
.index-news-school-con{
  display: inline-block;
  padding-right: 20px;
  height: 52px;
  line-height: 60px;
  font-size: 14px;
  color: #2D323B;
}
.index-news-school-con:hover{
  color: #0056a8!important;
}
.index-news-school-more{
  flex: 0 0 60px;
  height: 52px;
  line-height: 60px;
  font-size: 14px;
  cursor: pointer;
}
.index-news-school-more span{
    color: #666;
}
.index-news-school-more:hover span{
  color: #0066CC;
}
.index-news-school-more:hover i{
  color: #0066CC!important;
}
.index-news-data{
  display: flex;
  width: 100%;
}
.index-news-data-item{
  flex: 1;
  padding: 44px 18px 56px 18px;
  font-size: 0;
  cursor: pointer;
}
.index-news-data-detail{
  display: inline-block;
  width: 60px;
  height: 60px;
  background: rgba(76, 93, 121, 0.06);
  color: #0066CC;
  border-radius: 4px;
  transition: all 0.5s;
}
.index-news-data-item:hover .index-news-data-con .title{
  color: #0066CC;
}
.index-news-data-item:hover .index-news-data-detail{
  color: #fff;
  background: #0066CC;
}
.index-news-data-detail span:first-child{
  display: block;
  width: 100%;
  height: 36px;
  line-height: 36px;
  text-align: center;
  font-size: 24px;
  font-weight: 600;
}
.index-news-data-detail span:last-child{
  display: block;
  width: 100%;
  height: 24px;
  line-height: 1;
  text-align: center;
  font-size: 12px;
}
.index-news-data-con{
  display: inline-block;
  padding-left: 24px;
  width: 250px;
  vertical-align: top;
}
.index-news-data-con span:first-child{
  display: block;
  height: 32px;
  line-height: 22px;
  font-size: 16px;
  color: #2D323B;
  font-weight: 600;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.index-news-data-con span:last-child{
  display: block;
  width: 100%;
  font-size: 12px;
  color: #2D323B;
  line-height: 22px;
}
.index-news-nav{
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
}
.index-news-nav-item{
  width: 392px;
  background: #fff;
  box-shadow: 2px 2px 4px 0px #999;
}
.index-news-nav-title{
  display: flex;
  justify-content: space-between;
  padding: 0 18px 0 27px;
  width: 100%;
  height: 43px;
  border-bottom: 1px solid #e0e3e8;
}
.index-news-nav-tit{
  height: 42px;
  line-height: 42px;
  font-size: 18px;
  color: #0066CC;
  font-weight: 500;
}
.index-news-nav-more{
  height: 42px;
  line-height: 42px;
  font-size: 14px;
  color: #0066CC;
  cursor: pointer;
}
.index-news-nav-more span{
  color: #666;
}
.index-news-nav-more:hover span{
  color: #0066CC;
}
.index-news-nav-more:hover i{
  color: #0066CC!important;
}
.index-news-nav-notices{
  padding: 16px 0 40px 40px;
}
.index-news-nav-notice{
  display: block;
  height: 36px;
  line-height: 36px;
  padding-right: 18px;
  font-size: 14px;
  color: #2D323B;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.index-news-scenery{
  margin-top: 10px;
  background: #fff;
  box-shadow: 2px 2px 4px 0px #999;
}
.index-news-scenery-hd{
  height: 49px;
  padding-left: 27px;
  font-size: 0;
  border-bottom: 1px solid #e0e3e8;
}
.index-news-scenery-tit{
  display: inline-block;
  height: 48px;
  line-height: 48px;
  padding-right: 62px;
  font-size: 16px;
  color: #2D323B;
  font-weight: 600;
  cursor: pointer;
}
.index-news-scenery-active{
  color: #0066CC;
}
.index-news-scenery-bd{
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: space-between;
}
.index-news-scenery-content{
  display: inline-block;
  width: 280px;
  height: 180px;
  overflow: hidden;
}
</style>
