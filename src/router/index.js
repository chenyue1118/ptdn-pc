import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/content/Index'
import Article from '@/components/content/Article'
import Survey from '@/components/content/Survey'
import News from '@/components/content/News'
import Laboratory from '@/components/content/Laboratory'
import Training from '@/components/content/Training'
import Resource from '@/components/content/Resource'
import Download from '@/components/content/Download'
import Contact from '@/components/content/Contact'
import Product from '@/components/content/Product'

import College from '@/components/content/survey/College'
import Organization from '@/components/content/survey/Organization'
import Colleges from '@/components/content/survey/Colleges'
import Regional from '@/components/content/survey/Regional'
import TalentInfo from '@/components/content/survey/Talent'

import NewsCollege from '@/components/content/news/College'
import Dynamics from '@/components/content/news/Dynamics'
import Notice from '@/components/content/news/Notice'

import Introduction from '@/components/content/laboratory/Introduction'
import Research from '@/components/content/laboratory/Research'
import Scientific from '@/components/content/laboratory/Scientific'

import Enrolment from '@/components/content/training/Enrolment'
import Talent from '@/components/content/training/Talent'

import ReCollege from '@/components/content/resource/College'
import ReDynamics from '@/components/content/resource/Dynamics'

import SearchList from '@/components/header/SearchList'
import Search from '@/components/header/search'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index'
    }, {
      path: '/index',
      name: '首页',
      component: Index
    }, {
      path: '/survey',
      // 研究院概括
      name: '',
      component: Survey,
      children: [
        {
          path: '/',
          redirect: '/survey/college'
        }, {
          path: 'college',
          name: '学院简介',
          component: College
        }, {
          path: 'organization',
          name: '机构组织',
          component: Organization
        }, {
          path: 'colleges',
          name: '学院风光',
          component: Colleges
        }, {
          path: 'regional',
          name: '区域地图',
          component: Regional
        }, {
          path: 'talent',
          name: '人才信息',
          component: TalentInfo
        }
      ]
    }, {
      path: '/news',
      // 新闻公告
      name: '',
      component: News,
      children: [
        {
          path: '/',
          redirect: '/news/college'
        }, {
          path: 'college',
          name: '学院动态',
          component: NewsCollege
        }, {
          path: 'dynamics',
          name: '本院动态',
          component: Dynamics
        }, {
          path: 'notice',
          name: '通知公告',
          component: Notice
        }
      ]
    }, {
      path: '/laboratory',
      // 联合实验室
      name: '',
      component: Laboratory,
      children: [
        {
          path: '/',
          redirect: '/laboratory/introduction'
        }, {
          path: 'introduction',
          name: '实验室简介',
          component: Introduction
        }, {
          path: 'research',
          name: '科研项目',
          component: Research
        }, {
          path: 'scientific',
          name: '科研成果',
          component: Scientific
        }
      ]
    }, {
      path: '/training',
      // 人才培养
      name: '',
      component: Training,
      children: [
        {
          path: '/',
          redirect: '/training/enrolment'
        }, {
          path: 'enrolment',
          name: '招生信息',
          component: Enrolment
        }, {
          path: 'talent',
          name: '人才招聘',
          component: Talent
        }
      ]
    }, {
      path: '/resource',
      // 公共资源
      name: '',
      component: Resource,
      children: [
        {
          path: '/',
          redirect: '/resource/college'
        }, {
          path: 'college',
          name: '校区服务',
          component: ReCollege
        }, {
          path: 'dynamics',
          name: '科大资源',
          component: ReDynamics
        }
      ]
    }, {
      path: '/download',
      name: '文件下载',
      component: Download
    }, {
      path: '/contact',
      name: '联系我们',
      component: Contact
    }, {
      path: '/article',
      name: '文章详情',
      component: Article
    }, {
      path: '/searchList',
      name: '搜索列表',
      component: SearchList
    }, {
      path: '/search',
      name: '搜索',
      component: Search
    }, {
      path: '/product',
      name: '产品',
      component: Product
    }
  ]
})
