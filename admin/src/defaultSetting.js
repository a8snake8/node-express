// 默认配置项
export default {
  navTheme: 'dark',
  // vue-ls options
  //Vue插件，用于从Vue上下文中使用本地Storage，会话Storage和内存Storage
  storageOptions: {
    namespace: 'pro__', // key prefix
    name: 'ls', // name variable Vue.[ls] or this.[$ls],
    storage: 'local', // storage name session, local, memory
  }
}