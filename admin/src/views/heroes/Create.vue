<template>
  <div>
    <Goback v-bind:title="title" />
    <el-form :label-position="labelPosition" label-width="80px" :model="model" @submit.native.prevent="save">
      <el-tabs type="border-card" value="info">

        <el-tab-pane label="基础信息" name="info">
          <el-form-item label="英雄名称">
            <el-input v-model="model.name"></el-input>
          </el-form-item>
          <el-form-item label="英雄头像">
            <el-upload class="avatar-uploader" :action="$http.defaults.baseURL+'/upload'" :show-file-list="false"
              :on-success="handleSuccess">
              <img v-if="model.avatar" :src="model.avatar" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="英雄角色">
            <el-select v-model="model.roles" placeholder="请选择英雄角色" multiple>
              <el-option v-for="item in rolesData" :key="item._id" :label="item.name" :value="item._id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="英雄属性">
            <ul class="score-class">
              <li>
                <el-rate v-model="model.scores.difficult" :max="10" show-score text-color="#ff9900"
                  score-template="难度{value}分">
                </el-rate>
              </li>
              <li>
                <el-rate v-model="model.scores.skill" :max="10" show-score text-color="#ff9900"
                  score-template="技能{value}分">
                </el-rate>
              </li>
              <li>
                <el-rate v-model="model.scores.attack" :max="10" show-score text-color="#ff9900"
                  score-template="攻击{value}分">
                </el-rate>
              </li>
              <li>
                <el-rate v-model="model.scores.servive" :max="10" show-score text-color="#ff9900"
                  score-template="生存{value}分">
                </el-rate>
              </li>
            </ul>
          </el-form-item>
          <el-form-item label="顺分出装">
            <el-select v-model="model.items1" placeholder="请选择顺风出装" multiple>
              <el-option v-for="item in itemsData" :key="item._id" :label="item.name" :value="item._id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="顺分出装">
            <el-select v-model="model.items2" placeholder="请选择逆风出装" multiple>
              <el-option v-for="item in itemsData" :key="item._id" :label="item.name" :value="item._id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="使用技巧">
            <el-input type="textarea" :rows="2" placeholder="请输入使用技巧" v-model="model.useSkill"></el-input>
          </el-form-item>
          <el-form-item label="对抗技巧">
            <el-input type="textarea" :rows="2" placeholder="请输入对抗技巧" v-model="model.battleSkill"></el-input>
          </el-form-item>
          <el-form-item label="团战思路">
            <el-input type="textarea" :rows="2" placeholder="请输入团战思路" v-model="model.teamSkill"></el-input>
          </el-form-item>
        </el-tab-pane>

        <el-tab-pane label="技能" name="skill">
          <el-button @click="model.skills.push({})" type="primary" size="small" icon="el-icon-plus">添加技能</el-button>
          <div class="skill-class">
            <div class="group" v-for="(item, index) in model.skills" :key="index">
              <h3>技能{{index+1}}</h3>
              <el-form-item label="名称">
                <el-input v-model="item.name" placeholder="请输入技能名称"></el-input>
              </el-form-item>
              <el-form-item label="图标">
                <el-upload class="avatar-uploader" :action="$http.defaults.baseURL+'/upload'" :show-file-list="false"
                  :on-success="(res => {$set(item,'icon',res.url)})">
                  <img v-if="item.icon" :src="item.icon" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
              <el-form-item label="技能描述">
                <el-input v-model="item.description" type="textarea" :rows="2" placeholder="请输入技能描述"></el-input>
              </el-form-item>
              <el-form-item label="小提示">
                <el-input v-model="item.tips" type="textarea" :rows="2" placeholder="请输入小提示"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="danger" @click="model.skills.splice(index,1)" size="small">删除</el-button>
              </el-form-item>
            </div>
          </div>
        </el-tab-pane>

      </el-tabs>
      <el-form-item style="margin-top:20px">
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
        name: '',
        avatar: '',
        roles: [],
        scores: {},
        skills: [],
        items1: [],
        items2: [],
        useSkill: '',
        battleSkill: '',
        teamSkill: '',
      },
      rolesData: [],
      itemsData: []
    };
  },
  created () {
    this.id && this.initEidt()
    this.initRoles()
    this.initItems()
  },
  methods: {
    // 动态删减技能
    removeDomain (item) {
      var index = this.model.skills.indexOf(item)
      if (index !== -1) {
        this.model.skills.splice(index, 1)
      }
    },
    // 获取角色分类
    async initRoles () {
      await this.$http.get('rest/categories').then(el => {
        this.rolesData = el.data
      })
    },
    // 获取角色分类
    async initItems () {
      await this.$http.get('rest/items').then(el => {
        this.itemsData = el.data
      })
    },
    // 获取编辑数据
    async initEidt () {
      this.title = '编辑分类'
      await this.$http.get(`rest/hero/${this.id}`).then(el => {
        this.model = Object.assign({}, this.model, el.data)
      })
    },
    // 上传成功回调
    handleSuccess (e) {
      this.model.avatar = e.url
    },
    // 新增分类
    async save () {
      if (this.id) {
        await this.$http.put(`rest/hero/${this.id}`, this.model)
      } else {
        await this.$http.post('rest/hero', this.model)
      }
      this.$message({
        type: 'success',
        message: this.id ? '修改成功！' : '添加成功！'
      })
      this.$router.push({ path: '/heroes/List' })
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
  width: 6rem;
  height: 6rem;
  line-height: 6rem;
  text-align: center;
}
.avatar {
  width: 6rem;
  height: 6rem;
  display: block;
}
.score-class {
  list-style-type: none;
  margin: 0;
  padding: 0;
  li {
    margin: 0;
    padding: 0;
    height: 40px;
    line-height: 40px;
  }
}
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
