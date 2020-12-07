<template lang="html">
  <div class="d-table">
    <el-table
      class="d-table"
      v-loading="loading"
      ref="multipleTable"
      :data="dataSource"
      tooltip-effect="dark">
      <slot />
    </el-table>
    <div class="d-pagination" v-if="hasPage && setPageStatus">
      <div v-if="dataSource && dataSource.length > 0">
        <el-pagination @current-change="handleCurrentChange" :current-page="pagination.currentPage"
            @size-change="handleSizeChange"
            :page-size="pagination.curPageSize"
            :page-sizes="[10, 20, 30,50]"
            layout=" total,sizes,prev, pager, next"
            :total="pagination.total">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
// import qs from 'qs'
import request from '@/utils/request'

export default {
  name: 'Dtable',
  data () {
    return {
      loading: false,
      data: [],
      pagination: {
        currentPage: 1,
        curPageSize: 10,
        total: 0
      },
      dataSource: [{ id: 1 }, { id: 2 }, { id: 3 }],
      setPageStatus: true
    }
  },
  props: {
    api: {
      type: String,
      default: ''
    },
    method: {
      type: String,
      default: 'post'
    },
    dataname: {
      type: String,
      default: 'result'
    },
    hasPage: {
      type: Boolean,
      default: true
    },
    searchQuery: {
      type: Object,
      default: () => ({})
    }
  },
  watch: {
    searchQuery: {
      handler () {
        this.pagination.currentPage = 1
        this.getList()
      },
      deep: true
      // immediate: true,
    }
  },
  methods: {
    // 获取数据源
    getList () {
      const { api } = this
      const data = {
        ...this.searchQuery,
        page: this.pagination.currentPage,
        size: this.pagination.curPageSize
      }

      Object.keys(data).map(key => {
        if (data[key] === '全部') {
          delete data[key]
        }
        return key
      })

      if (api) {
        this.loading = true
        request({
          url: api,
          data,
          params: data,
          method: this.method
        }).then(res => {
          if (res instanceof Array) {
            this.dataSource = [...res]
            // this.dataSource = [...res.slice(-10)];
            this.setPageStatus = false
          } else {
            this.dataSource = [...res.results]
            this.pagination.total = res.count
          }
          if (this.dataSource.length === 0) {
            this.dataSource = [
              {
                id: 1234
              }
            ]
          }
        }).finally(() => {
          this.loading = false
        })
      }
    },
    // 当前页数更改
    handleCurrentChange (val) {
      this.pagination.currentPage = val
      this.getList()
    },
    // 当前显示条数更改
    handleSizeChange (val) {
      // this.searchQuery.count = val;
      this.pagination.currentPage = 1
      this.pagination.curPageSize = val
      this.getList()
    }
  }
}
</script>

<style lang="less" scoped>
.d-table {
  width: 100%;
}
.d-pagination {
  margin-top: 20px;
  margin-bottom: 30px;
  text-align: right;
}
</style>
