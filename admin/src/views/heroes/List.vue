<template>
  <div>
    <Goback v-bind:title="title" />
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="_id" label="ID" width="300">
      </el-table-column>
      <el-table-column prop="name" label="分类名称">
      </el-table-column>
      <el-table-column label="英雄类型">
        <template slot-scope="scope">
          <el-tag class="space" type="warning" v-for="it in scope.row.roles" :key="it._id">{{it.name}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="avatar" label="预览图">
        <template slot-scope="scope">
          <img class="icon-pic" :src="scope.row.avatar" alt="pic">
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
          <el-button @click="deletefn(scope.row)" type="text" slot="reference" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
import Goback from '@/components/Goback'
export default {
  name: '',
  components: {
    Goback
  },
  data () {
    return {
      title: '分类列表',
      tableData: [],
    };
  },
  computed: {
  },
  watch: {
  },
  mounted () {
    this.initList()
  },
  methods: {
    // 引入表单
    async initList () {
      const res = await this.$http.get('rest/hero')
      this.tableData = res.data
    },
    // 编辑获取单条信息
    handleClick (e) {
      this.$router.push(`/heroes/edite/${e._id}`)
    },
    // 删除
    deletefn (e) {
      this.$confirm(`此操作将永久删除分类${e.name}, 是否续?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$http.delete(`rest/hero/${e._id}`).then(() => {
          this.$message({
            type: 'success',
            message: '已删除！'
          })
          this.initList()
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      })
    }
  },
};
</script>

<style scoped>
.icon-pic {
  width: 50px;
  height: 50px;
  border-radius: 6px;
}
</style>
