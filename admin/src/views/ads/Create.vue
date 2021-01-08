<template>
  <div>
    <Goback v-bind:title="title" />
    <el-form :label-position="labelPosition" label-width="80px" :model="model" @submit.native.prevent="save">
      <el-form-item label="广告名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="广告内容">
        <el-button @click="model.ads.push({})" type="primary" size="small" icon="el-icon-plus">添加广告位</el-button>
        <div class="skill-class">
          <div class="group" v-for="(item, index) in model.ads" :key="index">
            <h3>广告位{{index+1}}</h3>
            <el-form-item label="标题">
              <el-input v-model="item.title" placeholder="请输入标题名称"></el-input>
            </el-form-item>
            <el-form-item label="图片">
              <el-upload class="avatar-uploader" :headers="initHeader()" :action="upload_url" :show-file-list="false"
                :on-success="(res => {$set(item,'image',res.url)})">
                <img v-if="item.image" :src="item.image" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <el-form-item label="链接地址">
              <el-input v-model="item.url" placeholder="请输入小提示"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="danger" @click="model.ads.splice(index,1)" size="small">删除</el-button>
            </el-form-item>
          </div>
        </div>
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
      model: {
        ads: []
      },
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
      await this.$http.get(`rest/ads/${this.id}`).then(el => {
        this.model = el.data
      })
    },
    // 上传成功回调
    handleSuccess (e) {
      this.$set(this.model, 'image', e.url) //用set方法赋值
    },
    // 新增分类
    async save () {
      if (this.id) {
        await this.$http.put(`rest/ads/${this.id}`, this.model)
      } else {
        await this.$http.post('rest/ads', this.model)
      }
      this.$message({
        type: 'success',
        message: this.id ? '修改成功！' : '添加成功！'
      })
      this.$router.push({ path: '/ads/List' })
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
</style>
