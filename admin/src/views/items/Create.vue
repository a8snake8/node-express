<template>
  <div>
    <Goback v-bind:title="title" />
    <el-form :label-position="labelPosition" label-width="80px" :model="model" @submit.native.prevent="save">
      <el-form-item label="装备名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="装备图标">
        <el-upload class="avatar-uploader" :action="$http.defaults.baseURL+'/upload'" :show-file-list="false"
          :on-success="handleSuccess">
          <img v-if="model.icon" :src="model.icon" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
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
      title: '物品分类',
      labelPosition: 'left',
      model: {},
      parentOptions: [],
    };
  },
  created () {
    this.id && this.initEidt()
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': function (e) {
      console.log(e)
      this.$router.push({
        path: e.fullPath
      })
    }
  },
  methods: {
    ha () {
      window.location.reload()
    },
    async initEidt () {
      this.title = '编辑分类'
      await this.$http.get(`rest/item/${this.id}`).then(el => {
        this.model = el.data
      })
    },
    // 上传成功回调
    handleSuccess (e) {
      this.$set(this.model, 'icon', e.url) //用set方法赋值
    },
    // 新增分类
    async save () {
      if (this.id) {
        await this.$http.put(`rest/item/${this.id}`, this.model)
      } else {
        await this.$http.post('rest/item', this.model)
      }
      this.$message({
        type: 'success',
        message: this.id ? '修改成功！' : '添加成功！'
      })
      this.$router.push({ path: '/items/List' })
    }
  },
};
</script>

<style lang="scss" scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  border: 1px solid #cccccc;
  border-radius: 6px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
