<template>
  <div class="login">
    <el-card shadow="always">
      <h2>后台管理系统</h2>
      <el-form ref="ruleForm" :model="loginForm" :rules="rules" label-width="auto"
        @submit.native.prevent="submitForm('ruleForm')">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="width:90%" type="primary" native-type="submit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入正确的密码', trigger: 'blur' },
        ]
      }
    };
  },
  computed: {
  },
  watch: {
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http.post('login', this.loginForm).then((res) => {
            console.log(res)
          })
          // this.$router.push({ path: '/categories/create' })
        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  background: #efefef;
  padding-top: 20vh;
  .el-card {
    width: 30%;
    margin: 0 auto;
    padding: 20px;
    h2 {
      margin: 0;
      line-height: 50px;
      text-align: center;
      font-weight: normal;
      margin-bottom: 30px;
      font-size: 1.6rem;
    }
  }
}
</style>
