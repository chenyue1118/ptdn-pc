<template lang="html">
  <div class="professor">
    <h3>教授简介</h3>
    <div class="professor-line"></div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.professor h3{
  height: 48px;
  line-height: 48px;
  font-size: 14px;
  color: #0066CC;
}
.professor-line{
  width: 130%;
  height: 1px;
  background: linear-gradient(to right, red, orange, yellow);
  transform: translateX(-20px);
}
</style>
