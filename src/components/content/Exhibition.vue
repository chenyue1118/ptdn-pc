<template lang="html">
  <div class="product">
    <h3 class="pro-title">产品展示</h3>
    <div class="pro-nav">
      <Menu mode="horizontal" theme="light" active-name="0">
        <MenuItem name="0">
          全部
        </MenuItem>
        <MenuItem name="1">
          智慧农业
        </MenuItem>
        <MenuItem name="2">
          智慧农业温棚
        </MenuItem>
        <MenuItem name="3">
          智慧农业大田
        </MenuItem>
        <MenuItem name="4">
          智慧农业渔业
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
      </li>
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
  line-height: 40px;
  padding: 0 10px;
  font-size: 14px;
  font-weight: 600;
  color: #333;
}
.pro-list-desc{
  display: block;
  padding: 0 10px;
  line-height: 22px;
  font-size: 12px;
  color: #666;
}
.pro-list-link{
  display: block;
  margin-top: 30px;
  padding: 10px;
  font-size: 14px;
  color: #333;
}
</style>
