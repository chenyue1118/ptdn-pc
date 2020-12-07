<template lang="html">
  <div class="basics-wrapper">
    <page-title>
      <el-button type="primary" size="small">主要按钮</el-button>
    </page-title>
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
        <el-table-column prop="id" label="用户id" width="180"></el-table-column>
        <el-table-column prop="date1" label="用户姓名"></el-table-column>
        <el-table-column prop="date1" label="账户角色"></el-table-column>
        <el-table-column prop="date1" label="归属药房"></el-table-column>
        <el-table-column prop="date1" label="登陆账号"></el-table-column>
        <el-table-column prop="date1" label="账户状态"></el-table-column>
        <el-table-column min-width="120" label="操作">
          <template slot-scope="scope">
            <a @click="disableUser(scope)">禁用</a><el-divider direction="vertical" />
            <a>角色变更</a><el-divider direction="vertical" />
            <a>重置密码</a>
          </template>
        </el-table-column>
      </Dtable>
    </div>

    <el-dialog title="创建账号" :visible.sync="userVisible">
      <el-form
        class="dialog-user-form"
        ref="ruleForm"
        label-width="100px"
        :model="userForm"
        :rules="userRules">
        <el-form-item label="用户姓名" prop="name">
          <el-input class="user-form-item" v-model="userForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="用户角色">
          <el-select class="user-form-item" v-model="userForm.key2" placeholder="请选择">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="归属药房">
          <el-select class="user-form-item" v-model="userForm.key3" placeholder="请选择">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="登陆账号">
          <el-input class="user-form-item" v-model="userForm.key4" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="登陆密码">
          <el-input class="user-form-item" v-model="userForm.key5" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="userVisible = false">取 消</el-button>
        <el-button type="primary" @click="userSubmit">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
export default {
  name: 'testPage',
  data () {
    return {
      querySearch: {},
      userVisible: false,
      userForm: {},
      userRules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 搜索操作
    handleSearch () {},
    // 禁用操作
    disableUser () {
      this.$confirm('是否禁用该用户', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '禁用成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消禁用'
        })
      })
    },
    // 新建用户提交
    userSubmit () {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          console.log(this.userForm)
        }
      })
    }
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
.dialog-user-form {
  .user-form-item {
    width: 80%;
  }
}
</style>
