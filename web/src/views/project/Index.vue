<template>
  <div class="project">
    <a-card v-for="i in 20" :key="i" hoverable class="card">
      <img slot="cover" alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
      <a-card-meta title="Europe Street beat">
        <template slot="description">
          www.instagram.com
        </template>
      </a-card-meta>
    </a-card>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
    };
  },
  computed: {
  },
  watch: {
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData () {

    }
  },
};
</script>

<style lang="less" scoped>
.project {
  display: flex;
  flex-wrap: wrap;
  .card {
    width: 20%;
    margin-bottom: 20px;
  }
}
</style>
