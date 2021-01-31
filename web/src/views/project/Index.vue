<template>
  <div class="project">
    <a-row :gutter="40" type="flex" justify="space-between">
      <a-col class="hl-group-cat2" :xs="24" :lg="6" v-for="i in 16" :key="i">
        <div style="overflow:hidden;border-radius:4px;">
          <div class="tp1"></div>
        </div>
        <h4>
          <span @mouseover="(e)=> {e.currentTarget.className = 'animate__animated animate__fadeIn'}"
            @mouseout="(e)=> {e.currentTarget.className = ''}">消除西瓜项目</span>
        </h4>
        <div class="hl-flex">
          <h5>
            <a-icon type="github" />
            <b>Github</b>
          </h5>
          <h5>
            <a-icon type="api" />
            <span>项目演示</span>
          </h5>
        </div>
      </a-col>
    </a-row>
    <a-pagination v-model="current" :total="50" show-less-items />
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      current: 1,
    };
  },
  computed: {
  },
  watch: {
  },
  methods: {},
};
</script>

<style scoped lang="less">
.project {
  width: 1200px;
  margin: 0 auto;
  background: #fff;
  padding: 20px;
  margin-top: 20px;
  @media (max-width: 768px) {
    width: 90%;
  }
}
</style>
