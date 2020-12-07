<template lang="html">
  <div class="layout-wrapper">
    <div class="layout-header">
      <div class="header-logo">
        <img class="logo-image" src="./../../assets/image/logo.png" />
        <!-- <span class="logo-name">扁鹊在线</span> -->
        <span class="logo-name">开放平台</span>
      </div>
      <div class="header-menu">
        <div class="menu-item" v-for="(item, index) in firstLevelMenu" :key="index">
          <router-link class="item-link" :to="{ path: item.path }">
            <span class="link-name">{{ item.title }}</span>
          </router-link>
        </div>
      </div>
      <div class="header-user">
        <el-dropdown class="avatar-container" trigger="hover">
          <div class="avatar-wrapper">
            <i class="el-icon-user user-avatar"></i>
            <span class="user-name">{{ userInfo.nickName }}</span>
            <i class="el-icon-arrow-down el-icon--right user-right-bottom"></i>
          </div>
          <el-dropdown-menu slot="dropdown" class="user-dropdown">
            <el-dropdown-item @click.native="editPassShow">修改密码</el-dropdown-item>
            <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="layout-content">
      <router-view class="content-page-router" />
    </div>
    <!-- <div class="layout-footer">
      <span class="footer-item">Copyright © Beijing Co., Ltd., All Rights Reserved</span>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'layout',
  data () {
    return {
      userInfo: {
        nickName: '测试名称'
      },
      firstLevelMenu: []
    }
  },
  methods: {
    editPassShow () {},
    logout () {}
  },
  created () {
    // console.log(this.$router.options.routes)
    const routes = this.$router.options.routes
    routes.forEach(item => {
      if (item.meta && item.meta.hasShow) {
        this.firstLevelMenu.push({
          path: item.path,
          name: item.name,
          title: item.meta.title
        })
      }
    })
  }
}
</script>

<style lang="less" scoped>
.layout-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-width: 1280px;
  overflow-x: auto;
  .layout-header {
    flex: 0 0 61px;
    padding: 0 12px;
    border-bottom: 1px solid #f2f2f2;
    display: flex;
    .header-logo {
      flex: 0 0 198px;
      padding: 10px 0;
      .logo-image {
        display: inline-block;
        width: auto;
        height: 40px;
        vertical-align: top;
      }
      .logo-name {
        display: inline-block;
        padding-left: 12px;
        line-height: 40px;
        font-size: 20px;
        color: #666666;
      }
    }
    .header-menu {
      flex: 1;
      .menu-item {
        display: inline-block;
        padding: 10px 16px;
        line-height: 40px;
        .link-name {
          font-size: 18px;
          color: #333333;
        }
        .router-link-active {
          .link-name {
            color: #409EFF;
          }
        }
      }
    }
    .header-user {
      flex: 0 0 200px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .avatar-wrapper {
        cursor: pointer;
        .user-avatar {
          font-size: 20px;
          color: #333333;
        }
        .user-name {
          line-height: 20px;
          padding-left: 6px;
          font-size: 14px;
          color: #333333;
          vertical-align: top;
        }
        .user-right-bottom {
          color: #333333;
        }
      }
    }
  }
  .layout-content {
    flex: 1 0 auto;
    .content-page-router {
      width: 100%;
      height: 100%;
    }
  }
  .layout-footer {
    flex: 0 0 60px;
    border-top: 1px solid #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: #666666;
    .footer-item {
      display: inline-block;
      line-height: 24px;
    }
  }
}
</style>
