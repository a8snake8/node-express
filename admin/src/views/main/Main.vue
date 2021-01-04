<template>
  <el-container style="height: 100vh; ">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu router :default-openeds="index" @open="handleOpen">
        <el-submenu index="1" :popper-append-to-body="true">
          <template slot="title"><i class="el-icon-message"></i>分类管理</template>
          <el-menu-item-group>
            <el-menu-item index="/categories/create">新建分类</el-menu-item>
            <el-menu-item index="/categories/list">分类列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-message"></i>装备管理</template>
          <el-menu-item-group>
            <el-menu-item index="/items/create">新增分类</el-menu-item>
            <el-menu-item index="/items/list">装备列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-message"></i>英雄管理</template>
          <el-menu-item-group>
            <el-menu-item index="/heroes/create">新增分类</el-menu-item>
            <el-menu-item index="/heroes/list">英雄列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <span>王小虎</span>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>

<script>
export default {
  data () {
    return {
      index: ['1']
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
      this.index = keyPath
    }
  }
};
</script>