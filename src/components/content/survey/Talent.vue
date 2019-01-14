<template lang="html">
  <div class="talent">
    <h3 @click="refresh()" class="talent-titl">{{title}}</h3>
    <div class="talent-line"></div>
    <div class="talent-wra" v-show="isShow">
      <h4 class="talent-full-tit">正教授</h4>
      <ul class="talent-full-wra">
        <li class="talent-full" v-for="(item, index) in fullProfessor" :key="index" @click="pushFullProfessor(item)">
          <img :src="item.imageSrc" alt="image">
          <span>{{item.title}}</span>
        </li>
      </ul>
      <h4 class="talent-full-tit">副教授</h4>
      <ul class="talent-full-wra">
        <li class="talent-full" v-for="(item, index) in associateProfessor" :key="index" @click="pushAssociateProfessor(item)">
          <img :src="item.imageSrc" alt="image">
          <span>{{item.title}}</span>
        </li>
      </ul>
    </div>
    <div class="professor" v-show="isShow == false">
      <h4 class="professor-title">{{showContent.title}}</h4>
      <h5 class="professor-phone">电话：{{showContent.phone}}</h5>
      <h5 class="professor-email">Email: {{showContent.email}}</h5>
      <div class="professor-content" v-html="showContent.content"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow: true,
      title: '人才信息',
      fullProfessor: [{
        title: '韩恺1',
        imageSrc: 'https://sz.ustc.edu.cn/upload/201810/10/201810101740565634.jpg',
        phone: '010-48335711',
        email: 'professor@leinao.ai',
        content: `<h5>主要研究方向：</h5> <p>无线网络，算法理论，云计算，社会计算</p> <div>韩恺，男，百人计划特任研究员。分别于1997年和2004年在中国科学技术大学少年班和计算机系获学士和博士学位；2008年于中国科学技术大学数学系计算数学专业博士后流动站出站；后曾在新加坡南洋理工大学从事学术访问研究。主要从事计算机网络、云计算、社会计算以及相关数学理论的研究。在国内外重要学术期刊和会议发表论文三十余篇，其中多篇一作论文发表在CCF A类、中科院一区的国际重要期刊和会议如IEEE INFOCOM、IEEE/ACM Transactions on Networking、IEEE Transactions on Computers、IEEE Communications Magazine等。曾主持和参与国家自然科学基金项目、新加坡教育部MOE AcRF Tier 1、Tier 2项目、国家973项目等多项科研项目。</div>`
      }, {
        title: '韩恺2',
        imageSrc: 'https://sz.ustc.edu.cn/upload/201810/10/201810101740565634.jpg',
        phone: '010-48335711',
        email: 'professor@leinao.ai',
        content: `<h5>主要研究方向：</h5> <p>无线网络，算法理论，云计算，社会计算</p> <div>韩恺，男，百人计划特任研究员。分别于1997年和2004年在中国科学技术大学少年班和计算机系获学士和博士学位；2008年于中国科学技术大学数学系计算数学专业博士后流动站出站；后曾在新加坡南洋理工大学从事学术访问研究。主要从事计算机网络、云计算、社会计算以及相关数学理论的研究。在国内外重要学术期刊和会议发表论文三十余篇，其中多篇一作论文发表在CCF A类、中科院一区的国际重要期刊和会议如IEEE INFOCOM、IEEE/ACM Transactions on Networking、IEEE Transactions on Computers、IEEE Communications Magazine等。曾主持和参与国家自然科学基金项目、新加坡教育部MOE AcRF Tier 1、Tier 2项目、国家973项目等多项科研项目。</div>`
      }],
      associateProfessor: [{
        title: '韩恺1',
        imageSrc: 'https://sz.ustc.edu.cn/upload/201810/10/201810101740565634.jpg',
        phone: '010-48335711',
        email: 'professor@leinao.ai',
        content: `<h5>主要研究方向：</h5> <p>无线网络，算法理论，云计算，社会计算</p> <div>韩恺，男，百人计划特任研究员。分别于1997年和2004年在中国科学技术大学少年班和计算机系获学士和博士学位；2008年于中国科学技术大学数学系计算数学专业博士后流动站出站；后曾在新加坡南洋理工大学从事学术访问研究。主要从事计算机网络、云计算、社会计算以及相关数学理论的研究。在国内外重要学术期刊和会议发表论文三十余篇，其中多篇一作论文发表在CCF A类、中科院一区的国际重要期刊和会议如IEEE INFOCOM、IEEE/ACM Transactions on Networking、IEEE Transactions on Computers、IEEE Communications Magazine等。曾主持和参与国家自然科学基金项目、新加坡教育部MOE AcRF Tier 1、Tier 2项目、国家973项目等多项科研项目。</div>`
      }, {
        title: '韩恺2',
        imageSrc: 'https://sz.ustc.edu.cn/upload/201810/10/201810101740565634.jpg',
        phone: '010-48335711',
        email: 'professor@leinao.ai',
        content: `<h5>主要研究方向：</h5> <p>无线网络，算法理论，云计算，社会计算</p> <div>韩恺，男，百人计划特任研究员。分别于1997年和2004年在中国科学技术大学少年班和计算机系获学士和博士学位；2008年于中国科学技术大学数学系计算数学专业博士后流动站出站；后曾在新加坡南洋理工大学从事学术访问研究。主要从事计算机网络、云计算、社会计算以及相关数学理论的研究。在国内外重要学术期刊和会议发表论文三十余篇，其中多篇一作论文发表在CCF A类、中科院一区的国际重要期刊和会议如IEEE INFOCOM、IEEE/ACM Transactions on Networking、IEEE Transactions on Computers、IEEE Communications Magazine等。曾主持和参与国家自然科学基金项目、新加坡教育部MOE AcRF Tier 1、Tier 2项目、国家973项目等多项科研项目。</div>`
      }, {
        title: '韩恺2',
        imageSrc: 'https://sz.ustc.edu.cn/upload/201810/10/201810101740565634.jpg',
        phone: '010-48335711',
        email: 'professor@leinao.ai',
        content: `<h5>主要研究方向：</h5> <p>无线网络，算法理论，云计算，社会计算</p> <div>韩恺，男，百人计划特任研究员。分别于1997年和2004年在中国科学技术大学少年班和计算机系获学士和博士学位；2008年于中国科学技术大学数学系计算数学专业博士后流动站出站；后曾在新加坡南洋理工大学从事学术访问研究。主要从事计算机网络、云计算、社会计算以及相关数学理论的研究。在国内外重要学术期刊和会议发表论文三十余篇，其中多篇一作论文发表在CCF A类、中科院一区的国际重要期刊和会议如IEEE INFOCOM、IEEE/ACM Transactions on Networking、IEEE Transactions on Computers、IEEE Communications Magazine等。曾主持和参与国家自然科学基金项目、新加坡教育部MOE AcRF Tier 1、Tier 2项目、国家973项目等多项科研项目。</div>`
      }],
      showContent: {
        title: '1',
        phone: '2',
        email: '3',
        content: '4'
      }
    }
  },
  methods: {
    refresh () {
      this.isShow = true
    },
    pushFullProfessor (item) {
      this.isShow = false
      this.showContent = item
    },
    pushAssociateProfessor (item) {
      this.isShow = false
      this.showContent = item
    }
  }
}
</script>

<style lang="css" scoped>
.talent .talent-titl{
  height: 48px;
  line-height: 48px;
  font-size: 14px;
  color: #0066CC;
  cursor: pointer;
}
.talent-line{
  width: 130%;
  height: 1px;
  background: linear-gradient(to right, red, orange, yellow);
  transform: translateX(-20px);
}
.talent-wra{
  width: 100%;
}
.talent-full-tit{
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  color: #333;
  font-weight: 600;
}
.talent-full-wra{
  width: 100%;
  font-size: 0;
  text-align: center;
}
.talent-full{
  display: inline-block;
  width: 24%;
  padding: 2.5% 2.5%;
  background-color: rgb(241, 241, 241);
  position: relative;
  height: auto;
  margin: 4%;
  border-radius: 3px;
  cursor: pointer;
}
.talent-full span{
  display: block;
  height: 24px;
  line-height: 30px;
  font-size: 14px;
  color: #333;
}
.professor{
  width: 80%;
  margin: 10 auto;
}
.professor-title{
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  font-weight: 600;
}
.professor-phone{
  font-size: 14px;
  padding-bottom: 10px;
}
.professor-email{
  font-size: 14px;
  padding-bottom: 10px;
}
.professor-content{
  font-size: 14px;
  line-height: 20px;
}
</style>
