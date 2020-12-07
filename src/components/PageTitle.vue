<template>
  <div class="common-page-header">
    <!-- 设置导航 -->
    <div class="page-header-items page-header-left">
      <el-breadcrumb separator="/">
        <!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item> -->
        <el-breadcrumb-item v-for="(item, index) in breadcrumbs" :key="index">
          <a class="page-header-title" v-if="item.path" @click="linkTo(item.path)">{{ item.name }}</a>
          <span class="page-header-title page-header-title-no" v-else>{{ item.name }}</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="page-header-items page-header-right">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'common-page-header',
  data () {
    return {
      breadcrumbs: []
    }
  },
  watch: {
    $route () {
      this.getBreadcrumb()
    }
  },
  created () {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb () {
      this.breadcrumbs.length = 0
      const route = this.$route
      route.matched.forEach(item => {
        if (item.path && !item.meta.hidden) {
          this.breadcrumbs.push({
            name: item.meta.title,
            path: item.path !== route.path ? item.path : ''
          })
        }
      })
    },
    linkTo (path) {
      this.$router.push({
        path
      })
    }
  }
}
</script>

<style lang="less" scoped>
.common-page-header {
  flex: 0 0 52px;
  padding: 5px 10px;
  // margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  background: #fff;
  .page-header-items {
    flex: 1;
    display: flex;
    min-height: 32px;
    align-items: center;
  }
  .page-header-left {
    // display: flex;
    // min-height: 32px;
    // align-items: center;
  }
  .page-header-right {
    text-align: right;
    justify-content: flex-end;
  }
  .page-header-title {
    font-size: 14px;
    font-weight: 500!important;
  }
  .page-header-title-no {
    // font-weight: 400!important;
  }
}
</style>
