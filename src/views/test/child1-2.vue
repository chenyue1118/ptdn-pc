<template lang="html">
  <div class="basics-wrapper">
    <page-title />
    <div class="basics-container">
      <div class="query-search">
        <div class="query-items">
          <div class="query-item">
            <div class="query">
              <span class="query-name">商品ID:</span>
              <el-input v-model.trim="querySearch.goodsId" size="small" placeholder="请输入商品ID"></el-input>
            </div>
            <div class="query">
              <span class="query-name">日期:</span>
              <el-date-picker
                v-model="querySearch.timer"
                type="daterange"
                size="small"
                range-separator="-"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
            </div>
          </div>
        </div>
        <div class="search">
          <el-button type="primary" size="small" @click="handleSearch">搜索</el-button>
        </div>
      </div>
      <Dtable
        api="test"
      >
        <el-table-column prop="id" label="日期" width="180"></el-table-column>
        <el-table-column prop="date1" label="1日期"></el-table-column>
      </Dtable>
    </div>
  </div>
</template>

<script>
export default {
  name: 'testPage2',
  data () {
    return {
      querySearch: {}
    }
  },
  methods: {
    handleSearch () {}
  }
}
</script>

<style lang="less" scoped>
.basics-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.basics-container {
  flex: 1 0 auto;
  width: 100%;
}
</style>
