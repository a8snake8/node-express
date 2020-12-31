<template>
  <div>
    <el-form :label-position="labelPosition" label-width="80px" :model="model" @submit.native.prevent="save">
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
export default {
  name: '',
  data () {
    return {
      labelPosition: 'left',
      model: {
        name: '',
      }
    };
  },
  computed: {
  },
  watch: {
  },
  methods: {
    async save () {
      await this.$http.post('categories', this.model)
    }
  },
};
</script>

<style scoped>
</style>
