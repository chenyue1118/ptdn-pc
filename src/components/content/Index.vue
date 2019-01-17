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
      <!-- 校内新闻 -->
      <div class="index-news-school">
        <div class="index-news-school-tit"><Icon type="ios-paper-outline" size=22 color="#0066CC" /> &nbsp;公司新闻</div>
        <div class="index-news-school-con-wra" ref="conWra">
          <marquee align="left" ref="marqueeX" @mouseout="marqueeMouseout(1)" @mouseover="marqueeMouseenter(1)">
            <a class="index-news-school-con" href="javascript:;" v-for="(item, index) in listData" :key = "index" @click="pushArtilce(item.id)">{{item.title}}</a>
          </marquee>
        </div>
        <div class="index-news-school-more">
          <span>更多</span>
          <Icon size=14 color="#666" type="ios-arrow-forward" />
        </div>
      </div>
      <div class="index-news-content">
        <div class="index-news-content-w">
          <img class="index-news-content-image" src="../../common/image/scenery001.jpg">
          <div class="index-news-content-items-wra">
            <div class="index-news-c-i-w">
              <h3 class="index-news-c-i-w-t">公司新闻</h3>
              <div class="index-news-c-i-w-m" @click="pushTo(21)">
                <a>更多</a>
                <Icon size=14 color="#666" type="ios-arrow-forward" />
              </div>
            </div>
            <ul class="index-news-content-items">
              <li class="index-news-content-item" v-for="(item, index) in listData" :key="index" v-if="index < 4">
                <span>{{item.title}}</span>
                <i>{{item.updateDate.substr(0, 10)}}</i>
              </li>
              <!-- <li class="index-news-content-item">
                <span>研究院学术资料等等</span>
                <i>2018-12-24</i>
              </li>
              <li class="index-news-content-item">
                <span>研究院学术资料等等等等</span>
                <i>2018-12-24</i>
              </li>
              <li class="index-news-content-item">
                <span>研究院学术资料等等等等等等</span>
                <i>2018-12-24</i>
              </li> -->
            </ul>
          </div>
          <div class="index-news-content-items-wra"  @click="pushTo(22)">
            <div class="index-news-c-i-w">
              <h3 class="index-news-c-i-w-t">行业新闻</h3>
              <div class="index-news-c-i-w-m">
                <a>更多</a>
                <Icon size=14 color="#666" type="ios-arrow-forward" />
              </div>
            </div>
            <ul class="index-news-content-items">
              <li class="index-news-content-item" v-for="(item, index) in industry" :key="index" v-if="index < 4">
                <span>{{item.title}}</span>
                <i>{{item.updateDate.substr(0, 10)}}</i>
              </li>
              <!-- <li class="index-news-content-item">
                <span>研究院学术资料等等</span>
                <i>2018-12-24</i>
              </li>
              <li class="index-news-content-item">
                <span>研究院学术资料等等等等</span>
                <i>2018-12-24</i>
              </li>
              <li class="index-news-content-item">
                <span>研究院学术资料等等等等等等</span>
                <i>2018-12-24</i>
              </li> -->
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 相关产品 -->
    <div class="index-product">
      <div class="index-product-head">
        <h3 class="index-product-tit">相关产品</h3>
        <a class="index-product-more">查看详情</a>
      </div>
      <div class="index-product-body">
        <div class="index-product-banner">
          <img src="../../common/image/scenery002.jpg">
        </div>
        <ul class="index-product-lists">
          <li class="index-product-list">
            <img class="index-product-list-img" src="../../common/image/scenery003.jpg" >
            <h5>1234项目</h5>
            <span>这个是项目介绍这个是项目介绍这个是项目介绍这个是项目介绍这个是项目介绍这个是项目介绍这个是项目介绍这个是项目介绍...</span>
          </li>
          <li class="index-product-list">
            <img class="index-product-list-img" src="../../common/image/scenery003.jpg" >
            <h5>1234项目</h5>
            <span>这个是项目介绍这个是项目介绍这个是项目介绍这个是项目介绍这个是项目介绍这个是项目介绍这个是项目介绍这个是项目介绍...</span>
          </li>
          <li class="index-product-list">
            <img class="index-product-list-img" src="../../common/image/scenery003.jpg" >
            <h5>1234项目</h5>
            <span>这个是项目介绍这个是项目介绍这个是项目介绍这个是项目介绍这个是项目介绍这个是项目介绍这个是项目介绍这个是项目介绍...</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- 项目案例 -->
    <div class="index-project">
      <div class="index-project-head">
        <div class="index-project-border">
          <span class="index-project-title">项目案例</span>
        </div>
      </div>
      <ul class="index-project-body">
        <li class="index-project-item">
          <img src="../../common/image/scenery003.jpg" alt="">
          <h5>123项目</h5>
          <span>项目简介<br>项目简介项目简介项目简介项目简介</span>
          <a>进一步了解</a>
        </li>
        <li class="index-project-item">
          <img src="../../common/image/scenery003.jpg" alt="">
          <h5>123项目</h5>
          <span>项目简介<br>项目简介项目简介项目简介项目简介</span>
          <a>进一步了解</a>
        </li>
        <li class="index-project-item">
          <img src="../../common/image/scenery003.jpg" alt="">
          <h5>123项目</h5>
          <span>项目简介<br>项目简介项目简介项目简介项目简介</span>
          <a>进一步了解</a>
        </li>
        <li class="index-project-item">
          <img src="../../common/image/scenery003.jpg" alt="">
          <h5>123项目</h5>
          <span>项目简介<br>项目简介项目简介项目简介项目简介</span>
          <a>进一步了解</a>
        </li>
      </ul>
    </div>
    <!-- list tag -->
    <!-- <ul class="index-news-nav">
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
        </div>
      </li>
    </ul> -->
    <!-- 学院风光 -->
    <!-- <div class="index-news-scenery">
      <ul class="index-news-scenery-hd">
        <li class="index-news-scenery-tit index-news-scenery-active"><Icon type="md-school" size=20 />&nbsp;学院风光</li>
      </ul>
      <ul class="index-news-scenery-bd">
        <marquee align="left" ref="marqueeCon" @mouseout="marqueeMouseout(2)" @mouseover="marqueeMouseenter(2)">
        <li class="index-news-scenery-content" v-for="(item, index) in collegeScenery" :key="index">
          <img :src="item.picture" alt="">
        </li>
        </marquee>
      </ul>
    </div> -->
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
import Marquee from 'vue-marquee'
import { Message } from 'iview'
// import { APIYRL } from '@/common/api/api'
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
      // 公司新闻
      listData: [],
      // 行业新闻
      industry: []
    }
  },
  created () {
    setTimeout(() => {
      this._getBanner()
      this._getList()
      this._getIndustry()
    }, 20)
  },
  methods: {
    _getBanner () {
      let articleInfo = qs.stringify({
        'rollingType': 1
      })
      // axios(`${APIYRL}/rolling.do?method=showRollingPicture`, {
      axios(`http://139.129.203.44:8680/rolling.do?method=showRollingPicture`, {
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
      // axios(`${APIYRL}/articleInfo.do?method=articleList&search_type=21&pageSize=10&pageNo=1`, {
      axios(`http://139.129.203.44:8680/articleInfo.do?method=articleList&search_type=21&pageSize=10&pageNo=1`, {
        method: 'GET'
      }).then(response => {
        if (response.data.code === 0) {
          this.listData = response.data.result.data
        } else {
          Message.info('查询失败')
        }
      })
    },
    _getIndustry () {
      // axios(`${APIYRL}/articleInfo.do?method=articleList&search_type=21&pageSize=10&pageNo=1`, {
      axios(`http://139.129.203.44:8680/articleInfo.do?method=articleList&search_type=22&pageSize=10&pageNo=1`, {
        method: 'GET'
      }).then(response => {
        if (response.data.code === 0) {
          this.industry = response.data.result.data
        } else {
          Message.info('查询失败')
        }
      })
    },
    pushTo (index) {
      if (index === 21 || index === 22) {
        this.$router.push({
          path: '/news',
          query: {
            id: index
          }
        })
      } else if (index === 22) {
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
    // _getNoticeBulletin () {
    //   let newsInfo = qs.stringify({
    //     'method': 'articleListNumber',
    //     'search_type': 23,
    //     'search_number': 3
    //   })
    //   axios(`${APIYRL}/articleInfo.do`, {
    //     method: 'POST',
    //     data: newsInfo
    //   }).then(response => {
    //     if (response.data.code === 0) {
    //       this.noticeBulletin = response.data.result
    //     } else {
    //       Message.info('查询失败')
    //     }
    //   })
    // },
    // _getOurNews () {
    //   let newsInfo = qs.stringify({
    //     'method': 'articleListNumber',
    //     'search_type': 22,
    //     'search_number': 4
    //   })
    //   axios(`${APIYRL}/articleInfo.do`, {
    //     method: 'POST',
    //     data: newsInfo
    //   }).then(response => {
    //     if (response.data.code === 0) {
    //       this.ourNews = response.data.result
    //     } else {
    //       Message.info('查询失败')
    //     }
    //   })
    // },
    // _getPublicResource () {
    //   let newsInfo = qs.stringify({
    //     'method': 'articleListNumber',
    //     'search_type': 51,
    //     'search_number': 4
    //   })
    //   axios(`${APIYRL}/articleInfo.do`, {
    //     method: 'POST',
    //     data: newsInfo
    //   }).then(response => {
    //     if (response.data.code === 0) {
    //       this.publicResource = response.data.result
    //     } else {
    //       Message.info('查询失败')
    //     }
    //   })
    // },
    // _getPersonnelTrain () {
    //   let newsInfo = qs.stringify({
    //     'method': 'articleListNumber',
    //     'search_type': 42,
    //     'search_number': 4
    //   })
    //   axios(`${APIYRL}/articleInfo.do`, {
    //     method: 'POST',
    //     data: newsInfo
    //   }).then(response => {
    //     if (response.data.code === 0) {
    //       this.personnelTrain = response.data.result
    //     } else {
    //       Message.info('查询失败')
    //     }
    //   })
    // },
    // _getCollegeScenery () {
    //   let articleInfo = qs.stringify({
    //     'method': 'showRollingPicture',
    //     'rollingType': 2
    //   })
    //   axios(`${APIYRL}/rolling.do`, {
    //     method: 'POST',
    //     data: articleInfo
    //   }).then(response => {
    //     if (response.data.code === 0) {
    //       this.collegeScenery = response.data.result.concat(response.data.result)
    //     } else {
    //       Message.info('查询失败')
    //     }
    //   })
    // },
    // pushTo (index) {
    //   if (index === 1) {
    //     this.$router.push({
    //       path: '/news/college'
    //     })
    //   } else if (index === 2) {
    //     this.$router.push({
    //       path: '/news/dynamics'
    //     })
    //   } else if (index === 3) {
    //     this.$router.push({
    //       path: '/resource/college'
    //     })
    //   } else if (index === 4) {
    //     this.$router.push({
    //       path: '/training/enrolment'
    //     })
    //   }
    // },
    // pushArtilce (id) {
    //   this.$router.push({
    //     path: '/article',
    //     query: {
    //       id: id
    //     }
    //   })
    // },
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
/* new */
.index-news-content{
  width: 100%;
  padding: 20px;
}
.index-news-content-w{
  width: 100%;
  font-size: 0;
}
.index-news-content-image{
  display: inline-block;
  width: 26%;
  height: 210px;
}
.index-news-content-items-wra{
  display: inline-block;
  width: 37%;
  height: 210px;
  padding: 0 16px;
  vertical-align: top;
}
.index-news-c-i-w{
  height: 42px;
  font-size: 0;
}
.index-news-c-i-w-t{
  display: inline-block;
  width: 80%;
  height: 42px;
  line-height: 42px;
  color: #0066CC;
  font-size: 18px;
  font-weight: 600;
  vertical-align: top;
}
.index-news-c-i-w-m{
  display: inline-block;
  height: 42px;
  padding-top: 8px;
  /* color: #0066CC; */
  color: #666;
  font-size: 14px;
}
.index-news-c-i-w-m a{
  color: #666;
}
.index-news-c-i-w-m:hover a{
  color: #0066CC;
}
.index-news-c-i-w-m:hover i{
  color: #0066CC!important;
}
.index-news-content-items{
  width: 100%;
  padding-top: 12px;
}
.index-news-content-item{
  height: 40px;
  font-size: 0;
  cursor: pointer;
}
.index-news-content-item span{
  display: inline-block;
  width: 70%;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: top;
}
.index-news-content-item:hover span, .index-news-content-item:hover i{
  color: #0066CC;
}
.index-news-content-item i{
  display: inline-block;
  width: 30%;
  height: 40px;
  line-height: 40px;
  font-size: 12px;
  text-align: right;
  color: #333;
}
.index-product{
  width: 100%;
  margin-top: 14px;
  padding: 10px 20px 20px 20px;
  background: #fff;
  box-shadow: 2px 2px 4px 0px #999;
}
.index-product-head{
  display: flex;
  height: 40px;
}
.index-product-tit{
  flex: 1;
  height: 40px;
  line-height: 40px;
  color: #0066CC;
  font-size: 18px;
  font-weight: 600;
}
.index-product-more{
  flex: 0 0 100px;
  height: 30px;
  line-height: 30px;
  margin-top: 5px;
  text-align: center;
  background: #333;
  color: #fff;
  font-size: 12px;
}
.index-product-body{
  padding-top: 10px;
  display: flex;
}
.index-product-banner{
  flex: 0 0 240px;
  height: 200px;
}
.index-product-banner img{
  display: block;
  width: 100%;
  height: 200px;
}
.index-product-lists{
  flex: 1;
  padding-left: 10px;
  font-size: 0;
}
.index-product-list{
  display: inline-block;
  width: 30%;
  margin-left: 5%;
}
.index-product-list:nth-child(1){
  margin-left: 0;
}
.index-product-list-img{
  display: block;
  width: 100%;
  height: 100px;
}
.index-product-list h5{
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  color: #333;
}
.index-product-list span{
  line-height: 20px;
  font-size: 12px;
  color: #666;
}
.index-project{
  width: 100%;
  margin-top: 14px;
  padding: 30px 20px 20px 20px;
  background: #fff;
  box-shadow: 2px 2px 4px 0px #999;
}
.index-project-head{
  width: 100%;
  padding-bottom: 20px;
}
.index-project-border{
  position: relative;
  width: 120px;
  height: 30px;
  margin: 0 auto;
  border: 2px solid #fbcc0e;
}
.index-project-title{
  position: absolute;
  top: -13px;
  left: 50%;
  display: block;
  width: 90px;
  text-align: center;
  background: #fff;
  font-size: 16px;
  color: #333;
  font-weight: 600;
  transform: translateX(-50%);
}
.index-project-body{
  width: 100%;
  font-size: 0;
}
.index-project-item{
  display: inline-block;
  width: 23%;
  margin-left: 2.6%;
}
.index-project-item:nth-child(1){
  margin-left: 0;
}
.index-project-item img{
  display: block;
  width: 100%;
  height: 160px;
}
.index-project-item h5{
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  font-size: 14px;
  color: #333;
  font-weight: 500;
}
.index-project-item span{
  display: block;
  padding: 0 10px;
  line-height: 20px;
  font-size: 12px;
  color: #666;
}
.index-project-item a{
  display: block;
  padding: 0 10px;
  margin-top: 20px;
  font-size: 14px;
}
/* 可以删除 */
/* .index-news-nav{
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
} */
</style>
