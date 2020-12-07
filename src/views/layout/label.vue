<template lang="html">
  <div class="label-wrapper">
    <!-- <router-view /> -->
    <div class="label-nav">
      <!-- 导航菜单 -->
      <el-menu
        class="label-menu"
        :default-active="activeMenu"
        :collapse-transition="false"
      >
      <!-- :default-active="activeMenu" -->
        <div v-for="item in secondLevelMenu" :key="item.path">
          <el-submenu v-if="item.meta.navShow" :index="item.path">
            <template slot="title">
              <svg-icon class="nav-icon" :icon-class="item.path" />
              <span>{{ item.meta.title }}</span>
            </template>
            <el-menu-item-group>
              <router-link
                class="item-link"
                v-for="list in item.children"
                :key="list.path"
                :to="{ path: getPath(item.path, list.path) }">
                <el-menu-item :index="getPath(item.path, list.path)">
                  <span slot="title">{{ list.meta.title }}</span>
                </el-menu-item>
              </router-link>

            </el-menu-item-group>
          </el-submenu>

            <router-link v-else class="item-link" :to="{ path: getPath(item.path) }">
              <el-menu-item  :index="getPath(item.path)">
                <svg-icon class="nav-icon" :icon-class="item.path" />
                <span slot="title">{{ item.meta.title }}</span>
              </el-menu-item>
            </router-link>
        </div>
      </el-menu>
    </div>
    <div class="label-content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'labelSecond',
  data () {
    return {
      user: 'user',
      secondLevelMenu: [],
      firstLevelPath: ''
    }
  },
  computed: {
    activeMenu () {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.hidden) {
        return meta.activeMenu
      }
      return path
    }
  },
  watch: {
    $route () {
      this.initRoute()
    }
  },
  methods: {
    // 获取路径
    getPath (item, list = '') {
      const itemPath = item ? `/${item}` : ''
      const listPath = list ? `/${list}` : ''
      return `${this.firstLevelPath}${itemPath}${listPath}`
    },
    initRoute () {
      const routes = this.$router.options.routes
      const currentFirLevel = this.$route.matched[0]
      this.firstLevelPath = currentFirLevel.path
      routes.forEach(item => {
        if (item.meta && item.meta.hasShow && item.path === currentFirLevel.path) {
          this.secondLevelMenu = [...item.children]
        }
      })
    }
  },
  mounted () {
    this.initRoute()
  }
}
</script>
<style lang="less" scoped>
.label-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  .label-nav {
    flex: 0 0 210px;
    height: 100%;
    .label-menu {
      height: 100%;
      border-right: 1px solid #e8e8e8;
      .nav-icon {
        padding-right: 10px;
      }
    }
  }
  .label-content {
    flex: 1;
    height: 100%;
    overflow: hidden;
  }
}
</style>
