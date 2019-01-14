<template lang="html">
  <div class="talent">
    <h3>人才招聘</h3>
    <div class="college-line"></div>
    <ul class="talent-items">
      <li class="talent-items">
        <h4 class="talent-titl"> 日常行政事务</h4>
        <div class="talent-condition">
          <div class="condition">
            <span>工作地点</span>3人
          </div>
          <div class="condition">
            <span>部门</span>行政部
          </div>
          <div class="condition">
            <span>发布日期</span>2018-11-18
          </div>
        </div>
        <div class="talent-condition">
          <div class="condition">
            <span>工作年限</span>不限
          </div>
          <div class="condition">
            <span>学历</span>本科
          </div>
          <div class="condition">
            <span>招聘人数</span>3人
          </div>
        </div>
        <div class="talent-item-line"></div>
        <div class="talent-con">
          <h5 class="talent-con-tit">工作职责：</h5>
          <p class="talent-con-dd">1、负责日常日常行政事务</p>
        </div>
        <div class="talent-con">
          <h5 class="talent-con-tit">职位要求：</h5>
          <p class="talent-con-dd">1、为人正直，诚恳踏实，品行端正</p>
          <p class="talent-con-dd">2、有较强的沟通能力与协调能力</p>
          <p class="talent-con-dd">3、能承受一定的工作压力</p>
          <p class="talent-con-dd">4、工作经验不限，有思维，有主见，善于学习，能配合团队协作，执行效率高</p>
        </div>
        <div class="talent-con">
          <h5 class="talent-con-tit">待遇：</h5>
          <p class="talent-con-dd"><strong>工作地址：</strong>北京市海淀区中关村软件园互联网创新中心</p>
          <p class="talent-con-dd"><strong>工作时间：</strong>周一到周五9:00-12:00 13:00-18:00；周末双休，节假日按国家标准休假</p>
          <p class="talent-con-dd"><strong>员工福利：</strong>五险一金</p>
        </div>
        <div class="talent-con">
          <h5 class="talent-con-tit">投递说明：</h5>
          <p class="talent-con-dd"><strong>简历邮箱：</strong>gaoshanshan@ustc.edu.cn</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.talent h3{
  height: 51px;
  line-height: 50px;
  font-size: 14px;
  color: #0066CC;
  font-weight: bold;
}
.college-line{
  width: 130%;
  height: 1px;
  background: linear-gradient(to right, red, orange, yellow);
  transform: translateX(-20px);
}
.talent-items{
  width: 100%;
}
.talent-items{
  padding-top: 20px;
  padding-bottom: 20px;
}
.talent-titl{
  height: 50px;
  padding: 0 20px;
  line-height: 50px;
  font-size: 16px;
  background: #1a568e;
  color: #fff;
  margin-bottom: 12px;
}
.talent-condition{
  width: 100%;
  font-size: 0;
}
.talent-condition .condition{
  display: inline-block;
  width: 33%;
  height: 24px;
  line-height: 24px;
  padding-left: 12px;
  font-size: 12px;
  color: #666;
}
.talent-condition .condition span{
  padding-right: 8px;
  color: #1a568e;
}
.talent-item-line{
  margin: 20px 0;
  height: 1px;
  background: #999;
}
.talent-con{
  width: 100%;
  padding-left: 14px;
}
.talent-con-tit{
  line-height: 40px;
  font-size: 14px;
  color: #1a568e;
  padding-top: 10px;
}
.talent-con-dd{
  line-height: 24px;
  color: #666;
  font-size: 12px;
}
</style>
