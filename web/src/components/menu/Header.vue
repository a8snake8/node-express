<template>
  <div>
    <a-row type="flex" justify="space-between">
      <a-col :sm="4" :xs="18" class="hl-ct">
        <div class="logo" />
      </a-col>
      <a-col :sm="15" :xs="0" class="hl-rt">
        <a-menu @select="e=>$router.push({path: e.key})" mode="horizontal" :default-selected-keys="[$route.path]"
          :style="{ lineHeight: '63px' }">
          <a-menu-item key="/">
            首页
          </a-menu-item>
          <a-menu-item key="/project">
            项目演示
          </a-menu-item>
          <a-menu-item key="/talk">
            留言版
          </a-menu-item>
          <a-menu-item key="/person">
            个人空间
          </a-menu-item>
        </a-menu>
      </a-col>
      <a-col :sm="2" :xs="0">
        <ul class="log-reg">
          <li>
            <a-icon class="icon" type="qq" />
          </li>
          <li>
            <a-icon class="icon" type="weibo" />
          </li>
          <li>
            <a-icon class="icon" type="wechat" />
          </li>
        </ul>
      </a-col>
      <a-col :sm="2" :xs="0" class="hl-ct">
        <div class="log-log">
          <span class="icon">登录</span>
          <a-divider type="vertical" />
          <span class="icon">注册</span>
        </div>
      </a-col>
      <a-col :sm="1" :xs="2" class="hl-lf">
        <a-icon class="icon" type="search" @click="sc_collapsed= !sc_collapsed" />
      </a-col>
      <a-col :sm="0" :xs="4">
        <a-button type="primary" ghost @click="collapsed=true">
          <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
        </a-button>
        <a-drawer :drawerStyle="{background: '#001529'}" placement="left" :closable="false" :visible="collapsed"
          @close="collapsed = false">
          <a-menu @select="e=>{$router.push({path: e.key}),collapsed = false}" mode="inline"
            :default-selected-keys="[$route.path]" :style="{ lineHeight: '64px' }">
            <a-menu-item key="/">
              首页
            </a-menu-item>
            <a-menu-item key="/project">
              个人项目
            </a-menu-item>
            <a-menu-item key="/talk">
              留言
            </a-menu-item>
            <a-menu-item key="/person">
              个人介绍
            </a-menu-item>
          </a-menu>
        </a-drawer>
      </a-col>
    </a-row>
    <div v-if="sc_collapsed"
      :class="sc_collapsed? 'search animate__animated animate__fadeInDown': 'search animate__animated animate__fadeOut'">
      <a-input-search v-model="serachData" placeholder="请输入关键词进行搜索" />
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      collapsed: false,
      sc_collapsed: false,
      serachData: ''
    };
  },
  computed: {
  },
  watch: {
    sc_collapsed () {
      this.serachData = ''
    }
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.log-reg {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  li {
    width: 25%;
    text-align: center;
    .icon {
      color: #ccc;
      font-size: 16px;
    }
    .icon:hover {
      color: #fff;
    }
  }
}
.icon {
  color: #ccc;
  font-size: 14px;
}
.icon:hover {
  color: #fff;
}
.ant-menu {
  background: #001529;
  color: #fff;
}
.ant-menu-horizontal {
  border: none;
}
.search {
  background: #fff;
  line-height: 64px;
  text-align: center;
}
</style>
