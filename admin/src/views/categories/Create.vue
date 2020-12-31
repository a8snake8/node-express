<template>
  <div>
    <Goback v-bind:title="title" />
    <el-form :label-position="labelPosition" label-width="80px" :model="model" @submit.native.prevent="save">
      <el-form-item label="上级分类">
        <el-select v-model="model.parent">
          <el-option v-for="item in parentOptions" :key="item._id" :value="item._id" :label="item.name" />
        </el-select>
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
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
  name: '',
  components: {
    Goback
  },
  data () {
    return {
      title: '新建分类',
      labelPosition: 'left',
      model: {},
      parentOptions: []
    };
  },
  computed: {
  },
  watch: {
  },
  mounted () {
    this.initParents()
  },
  methods: {
    // 获取分类列表
    async initParents () {
      const res = await this.$http.get('rest/categories')
      this.parentOptions = res.data
    },
    // 新增分类
    async save () {
      await this.$http.post('rest/categories', this.model)
      this.$router.push({ path: '/categories/List' })
      this.$message({
        type: 'success',
        message: '添加成功'
      })
    }
  },
};
</script>

<style scoped>
</style>
