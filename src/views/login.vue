<template lang="html">
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" autocomplete="on" label-position="left">
      <div class="title-container">
        <h3 class="title">系统登录</h3>
      </div>
      <el-form-item prop="username">
        <span class="login-item-icon login-item-icon-user"></span>
        <el-input
          ref="username"
          v-model="loginForm.username"
          placeholder="用户名"
          name="username"
          type="text"
          tabindex="1"
          autocomplete="on"
        />
      </el-form-item>
      <el-form-item prop="password">
        <span class="login-item-icon login-item-icon-pass"></span>
        <el-input
          ref="password"
          v-model="loginForm.password"
          placeholder="密码"
          name="password"
          type="password"
          tabindex="2"
          autocomplete="on"
          @keyup.enter.native="handleLogin"
        />
      </el-form-item>
      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">登录</el-button>
    </el-form>
  </div>
</template>

<script>
import { login } from '@/api/user'

export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: '111111'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', message: '请输入用户名' }],
        password: [{ required: true, trigger: 'blur', message: '请输入密码' }]
      },
      loading: false
    }
  },
  methods: {
    handleLogin () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          login(this.loginForm).then(() => {
            this.$message.success('登录成功')
          }).finally(() => {
            this.loading = false
          })
        }
      })
    }
  }
}
</script>

<style lang="less">
/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 90%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: #ffffff;
      height: 47px;
      caret-color: #ffffff;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px #283443 inset !important;
        -webkit-text-fill-color: #ffffff !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="less" scoped>
.login-container {
  min-height: 100%;
  width: 100%;
  background-color: #283443;
  overflow: hidden;
  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }
  .title-container {
    position: relative;
    .title {
      font-size: 26px;
      color: #ffffff;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }
  .login-item-icon {
    display: inline-block;
    height: 47px;
    width: 10%;
    vertical-align: top;
  }
  .login-item-icon-user {
    background: url(../assets/image/icon-user.png) no-repeat center;
    background-size: 20px 20px;
  }
  .login-item-icon-pass {
    background: url(../assets/image/icon-pass.png) no-repeat center;
    background-size: 28px 28px;
  }
}
</style>
