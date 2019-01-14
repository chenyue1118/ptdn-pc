<template lang="html">
  <div class="tab">
    <div class="tab-wra">
      <router-link tag="div" class="tab-item" to="/index">
        首页
      </router-link>
      <router-link tag="div" class="tab-item" to="/survey">
        研究院概括
      </router-link>
      <router-link tag="div" class="tab-item" to="/news">
        新闻公告
      </router-link>
      <router-link tag="div" class="tab-item" to="/laboratory">
        联合实验室
      </router-link>
      <router-link tag="div" class="tab-item" to="/training">
        人才培养
      </router-link>
      <router-link tag="div" class="tab-item" to="/resource">
        公共资源
      </router-link>
      <router-link tag="div" class="tab-item" to="/download">
        文件下载
      </router-link>
      <router-link tag="div" class="tab-item" to="/contact">
        联系我们
      </router-link>
    </div>
</div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.tab{
  width: 100%;
  height: 38px;
  background: #0066CC;
}
.tab-wra{
  width: 1050px;
  margin: 0 auto;
  display: flex;
}
.tab-item{
  flex: 1;
  height: 38px;
  line-height: 38px;
  font-size: 16px;
  color: #FFFFFF;
  text-align: center;
  cursor: pointer;
}
/* .router-link-active{
  background: #218CFD;
} */
.router-link-active, .router-link-exact-active{
  background: #218CFD;
}
.tab-item:hover{
  background: #218CFD;
}
</style>
