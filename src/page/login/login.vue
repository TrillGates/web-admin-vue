<template>
  <div class="admin-login-box">
    <!--后台的登录入口，只有登录，没有注册，也没有找回密码-->
    <!--只有门户一个用户入口，如果是管理员则跳转到管理中心，否则，跳转到首页/重定向的页面-->
    <!--如果是门户的登录，则有登录、注册、找回密码这些功能.-->
    <!--顶部内容-->
    <div class="admin-login-header-box">
      <div class="admin-login-header-center center">
        <div class="admin-login-logo">
          登录大标题｜登录
        </div>
      </div>
    </div>
    <!--中间内容-->
    <div class="admin-login-center-box">
      <div class="center login-center-box">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form label-position="right" label-width="100px">
              <el-form-item label="账号" required>
                <el-input v-model="user.userName" placeholder="用户名"></el-input>
              </el-form-item>
              <el-form-item label="密码" required>
                <el-input type="password" v-model="originalPassword" placeholder="请输入密码"></el-input>
              </el-form-item>
              <el-form-item class="login-button">
                <el-button type="primary" @click="doLogin" size="small"> 登 录
                </el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </div>
    </div>
    <!--底部内容-->
  </div>
</template>
<script>
import {hex_md5} from "../../utils/md5";

export default {
  data() {
    return {
      originalPassword: '',
      user: {
        userName: '',
        password: '',
      },
      loginInfo: {
        verifyCode: ''
      },
    }
  },
  methods: {
    toastE(msg) {
      this.$message({
        message: msg,
        center: true,
        type: 'error'
      });
    },
    doLogin() {
      //发起登录
      //检查数据
      if (this.user.userName === '') {
        this.toastE('账号不可以为空.');
        return;
      }

      if (this.originalPassword === '') {
        this.toastE('密码不可以为空.');
        return;
      }

      if (this.loginInfo.verifyCode === '') {
        this.toastE('人类验证码不可以为空.');
        return;
      }
      this.user.password = hex_md5(this.originalPassword);
      console.log(this.user.password);
      console.log(this.verifyCode);
      //向服务器提交数据
    },
    }
}
</script>
<style>
.captcha-code {
  cursor: pointer;
  vertical-align: middle;
  margin-left: 10px;
  border: solid 1px #E6E6E6;
  width: 120px;
  padding-left: 10px;
  padding-right: 10px;
  height: 40px;
}

.login-button {
  margin-bottom: 0;
}

.admin-login-header-box {
  width: 100%;
  height: 46px;
  margin-bottom: 20px;
  background: dodgerblue;
}

.center {
  margin: 0 auto;
  width: 1140px;
}

.admin-login-header-center {
  line-height: 46px;
}

.login-center-box .el-input {
  width: 200px;
}

.login-center-box {
  border-radius: 4px;
  width: 1100px;
  padding: 20px;
  background: #fff;
  box-shadow: 0 1px 10px #afafaf;
}

.admin-login-logo {
  color: #fff;
  font-size: 18px;
  font-weight: 600;
}

.login-center-box .el-input__inner {
  border: solid 1px #E6E6E6;
  height: 42px;
  border-radius: 0;
}

.login-center-box .el-form-item__label {
  background: #FBFBFB;
  border-left: solid 1px #E6E6E6;
  border-top: solid 1px #E6E6E6;
  border-bottom: solid 1px #E6E6E6;
  text-align: center;
}
</style>
