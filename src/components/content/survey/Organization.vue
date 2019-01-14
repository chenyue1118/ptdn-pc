<template lang="html">
  <div class="organization">
    <h3>机构组织</h3>
    <div class="organization-line"></div>
    <div class="organization-org">
      <h4 class="organization-org-tit">中国科技大学北京研究院</h4>
      <div class="organization-org-line"></div>
      <ul class="organization-org-items">
        <li class="organization-org-item">
          <span>院办公室</span>
        </li>
        <li class="organization-org-item">
          <span>科研办公室</span>
        </li>
        <li class="organization-org-item">
          <span>财务办公室</span>
        </li>
        <li class="organization-org-item">
          <span>国家重点工程实验室类脑智能技术及应用联合实验室</span>
        </li>
        <li class="organization-org-item">
          <span>快手科技智能媒体技术联合实验室</span>
        </li>
        <li class="organization-org-item">
          <span>中科视元智能视频技术联合实验室</span>
        </li>
      </ul>
    </div>
    <div class="organization-info">
      <div class="organization-info-items">
        <h4 class="organization-info-items-tit">院办公室</h4>
        <div class="organization-info-item">
          联系人：
          <span>高姗姗</span>
        </div>
        <div class="organization-info-item">
          职责：
          <span>日常行政事务</span>
        </div>
        <div class="organization-info-item">
          联系电话：
          <span></span>
        </div>
        <div class="organization-info-item">
          电子邮箱：
          <span>gaoshanshan@ustc.edu.cn</span>
        </div>
      </div>
      <!-- <div class="organization-info-items">
        <h4 class="organization-info-items-tit">财务办公室</h4>
        <div class="organization-info-item">
          联系人：
          <span>高姗姗</span>
        </div>
        <div class="organization-info-item">
          职责：
          <span>日常行政事务</span>
        </div>
        <div class="organization-info-item">
          联系电话：
          <span>010-12345678</span>
        </div>
        <div class="organization-info-item">
          电子邮箱：
          <span>gaos0@uste.edu.cn</span>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.organization h3{
  height: 48px;
  line-height: 48px;
  font-size: 14px;
  color: #0066CC;
}
.organization-line{
  width: 130%;
  height: 1px;
  background: linear-gradient(to right, red, orange, yellow);
  transform: translateX(-20px);
}
.organization-org{
  width: 720px;
  margin: 0 auto;
  padding: 48px 0 52px 0;
}
.organization-org-tit{
  position: relative;
  width: 100%;
  height: 26px;
  line-height: 26px;
  text-align: center;
  font-size: 18px;
  color: #0066CC;
  font-weight: bold;
}
.organization-org-tit:after{
  position: absolute;
  top: 26px;
  left: 50%;
  margin-left: -1px;
  content: "";
  display: block;
  width: 2px;
  height: 42px;
  background: #0066CC;
}
.organization-org-line{
  width: 602px;
  height: 2px;
  margin: 40px auto;
  background: #0066CC;
}
.organization-org-items{
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.organization-org-item{
  position: relative;
  width: 120px;
}
.organization-org-item span{
  display: inline-block;
  width: 116px;
  padding: 8px 8px;
  text-align: center;
  background: #0066CC;
  font-size: 12px;
  color: #FFFFFF;
  font-family: "PingFangSC-Regular";
}
.organization-org-item:after{
  position: absolute;
  top: -42px;;
  left: 50%;
  margin-left: -1px;
  content: "";
  display: block;
  width: 2px;
  height: 42px;
  background: #0066CC;
}
.organization-info{
  width: 100%;
}
.organization-info-items{
  width: 802px;
  margin: 0 auto 22px auto;
  border: 1px solid #E0E3E8;
}
.organization-info-items-tit{
  width: 100%;
  height: 45px;
  line-height: 45px;
  text-indent: 1em;
  font-size: 14px;
  color: #0066CC;
}
.organization-info-item{
  width: 100%;
  height: 46px;
  line-height: 45px;
  border-top: 1px solid #E0E3E8;
  font-size: 14px;
  color: #2D323B;
  text-indent: 34px;
}
</style>
