<template lang="html">
  <div class="product">
    <h3 class="pro-title">解决方案</h3>
    <div class="pro-nav">
      <Menu mode="horizontal" theme="light" active-name="0">
          <MenuItem name="0">
            全部
          </MenuItem>
          <MenuItem name="1">
            内容管理
          </MenuItem>
          <MenuItem name="2">
            用户管理
          </MenuItem>
          <Submenu name="3">
              <template slot="title">
                  统计分析
              </template>
              <MenuGroup>
                  <MenuItem name="3-4">用户留存</MenuItem>
                  <MenuItem name="3-5">流失用户</MenuItem>
              </MenuGroup>
          </Submenu>
          <MenuItem name="4">
              综合设置
          </MenuItem>
      </Menu>
    </div>
    <div class="pro-search">
      <Input search placeholder="Enter something..." />
    </div>
    <ul class="pro-popular">
      <li class="pro-popular-item active">推荐</li>
      <li class="pro-popular-item">热门</li>
      <li class="pro-popular-item">最新</li>
    </ul>
    <ul class="pro-lists">
      <li class="pro-list"></li>
    </ul>
  </div>
</template>

<script>
export default {
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
}
</style>
