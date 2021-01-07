<template>
  <div>
    <Goback v-bind:title="title" />
    <el-form :label-position="labelPosition" label-width="80px" :model="model" @submit.native.prevent="save">
      <el-form-item label="文章名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="文章分类">
        <el-select v-model="model.types" multiple>
          <el-option v-for="item in typesOptions" :key="item._id" :value="item._id" :label="item.name" />
        </el-select>
      </el-form-item>
      <el-form-item label="文章内容">
        <editor v-model="model.body"></editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Goback from '../../components/Goback'
import editor from '../../components/editor/index'
export default {
  props: {
    id: {}
  },
  name: '',
  components: {
    Goback,
    editor
  },
  data () {
    return {
      title: '物品分类',
      labelPosition: 'left',
      model: {
      },
      typesOptions: []
    };
  },
  created () {
    this.id && this.initEidt()
    this.initCategory()
  },
  watch: {
  },
  methods: {
    async initCategory () {
      await this.$http.get('rest/categories').then(el => {
        this.typesOptions = el.data
      })
    },
    // 获取详情数据
    async initEidt () {
      this.title = '编辑分类'
      await this.$http.get(`rest/artical/${this.id}`).then(el => {
        this.model = el.data
      })
    },
    // 新增分类
    async save () {
      if (this.id) {
        await this.$http.put(`rest/artical/${this.id}`, this.model)
      } else {
        await this.$http.post('rest/artical', this.model)
      }
      this.$message({
        type: 'success',
        message: this.id ? '修改成功！' : '添加成功！'
      })
      this.$router.push({ path: '/articals/List' })
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
