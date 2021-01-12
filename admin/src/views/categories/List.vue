<template>
  <div>
    <Goback v-bind:title="title" />
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="_id" label="ID" width="260">
      </el-table-column>
      <el-table-column prop="parent.name" label="上级分类">
      </el-table-column>
      <el-table-column prop="name" label="分类名称">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
          <el-button @click="deletefn(scope.row)" type="text" slot="reference" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 编辑窗口 -->
    <el-dialog title="编辑分类" :visible.sync="editeFormVisible">
      <el-form ref="editeValidateForm" :model="editeForm">
        <el-form-item label="分类名称" :label-width="formLabelWidth">
          <el-input v-model="editeForm.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="resetForm('editeValidateForm')">取 消</el-button>
        <el-button type="primary" @click="editeSubmit('editeValidateForm')">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 编辑窗口结束 -->
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
      editeFormVisible: false,
      formLabelWidth: '120px',
      editeForm: {},
      visible: false
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
      const res = await this.$http.get('rest/categories')
      this.tableData = res.data
    },
    // 编辑获取单条信息
    handleClick (e) {
      this.$router.push(`/categories/edite/${e._id}`)
    },
    // 删除
    deletefn (e) {
      this.$confirm(`此操作将永久删除分类${e.name}, 是否续?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$http.delete(`rest/categories/${e._id}`).then(() => {
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
    },
    // 取消编辑
    resetForm (formName) {
      this.$refs[formName].resetFields();
      this.editeFormVisible = false
    },
    // 编辑保存
    editeSubmit (formName) {
      let e = {
        name: this.editeForm.name
      }
      this.$http.put(`rest/categories/${this.editeForm._id}`, e).then(() => {
        this.$message({
          type: 'success',
          message: '修改成功！'
        })
        this.$refs[formName].resetFields();
        this.editeFormVisible = false
        this.initList()
      })
    },
  },
};
</script>

<style scoped>
</style>
