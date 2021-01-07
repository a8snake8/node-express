<template>
  <div>
    <Goback v-bind:title="title" />
    <el-card class="box-card">
      <el-form ref="ruleForm" label-width="auto" :model="model" @submit.native.prevent="save">
        <el-form-item label="用户名">
          <el-input v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="model.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">保存</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import Goback from '../../components/Goback'
export default {
  props: {
    id: {}
  },
  name: '',
  components: {
    Goback
  },
  data () {
    return {
      title: '新增用户',
      model: {
        username: '',
        password: '',
      }
    };
  },
  created () {
    this.id && this.initEidt()
  },
  methods: {
    async initEidt () {
      this.title = '编辑分类'
      await this.$http.get(`rest/userinfo/${this.id}`).then(el => {
        this.model = el.data
      })
    },
    // 新增用户
    async save () {
      if (this.id) {
        await this.$http.put(`rest/userinfo/${this.id}`, this.model)
      } else {
        await this.$http.post('rest/userinfo', this.model)
      }
      this.$message({
        type: 'success',
        message: this.id ? '修改成功！' : '添加成功！'
      })
      this.$router.push({ path: '/users/List' })
    }
  },
};
</script>

<style lang="scss" scoped>
.skill-class {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 10px;
  .group {
    box-sizing: border-box;
    width: 49%;
    padding: 20px 30px;
    border: 1px dashed #cccccc;
    margin-bottom: 10px;
    border-radius: 6px;
  }
}
.box-card {
  width: 40%;
}
</style>
