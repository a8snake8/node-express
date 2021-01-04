<template>
  <div id="app">
    <router-view :key="$route.fullPath" />
    <!-- 设置key为$route.fullPath之后，由于两个路由的fullPath不同，组件会被强制不复用，所以将会回到正常流程，切换路由时mounted会被触发 -->
  </div>
</template>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}
</style>
