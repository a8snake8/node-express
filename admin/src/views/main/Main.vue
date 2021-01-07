<template>
  <el-container style="height: 100vh; ">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu router :default-active="active" unique-opened>
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>分类管理</template>
          <el-menu-item-group>
            <el-menu-item index="/categories/create">新建分类</el-menu-item>
            <el-menu-item index="/categories/list">分类列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-message"></i>装备管理</template>
          <el-menu-item-group>
            <el-menu-item index="/items/create">新增装备</el-menu-item>
            <el-menu-item index="/items/list">装备列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-message"></i>英雄管理</template>
          <el-menu-item-group>
            <el-menu-item index="/heroes/create">新增英雄</el-menu-item>
            <el-menu-item index="/heroes/list">英雄列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title"><i class="el-icon-message"></i>文章管理</template>
          <el-menu-item-group>
            <el-menu-item index="/articals/create">新增文章</el-menu-item>
            <el-menu-item index="/articals/list">文章列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title"><i class="el-icon-message"></i>广告管理</template>
          <el-menu-item-group>
            <el-menu-item index="/ads/create">新增广告</el-menu-item>
            <el-menu-item index="/ads/list">广告列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title"><i class="el-icon-message"></i>系统管理</template>
          <el-menu-item-group>
            <el-menu-item index="/users/create">新增用户</el-menu-item>
            <el-menu-item index="/users/list">用户列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <span>管理员</span>
      </el-header>

      <el-main>
        <router-view :key="$route.fullPath"></router-view>
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
      active: this.$route.path
    }
  },
  watch: {
  },
  mounted () {
  },
  methods: {
  }
};
</script>