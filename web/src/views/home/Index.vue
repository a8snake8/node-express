<template>
  <div class="home">
    <div class="cont1">
      <div class="img-bg"></div>
      <div class="main">
        <h1>大胡子BLOG与各类项目管理中心</h1>
        <div class="h2">
          <p>
            <a-icon type="man" />大胡子
          </p>
          <p>
            <a-icon type="calendar" />2021年1月27日
          </p>
        </div>
      </div>
    </div>
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
  methods: {},
};
</script>

<style lang="less" scoped>
.home {
  background: #333333;
  .cont1 {
    position: relative;
    height: 340px;
    @media (min-width: 768px) {
      height: 400px;
    }
    @media (min-width: 1280px) {
      height: 690px;
    }
    .img-bg {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      background-image: url("../../assets/img/home_bg.jpg");
      background-position: 50% 50%;
      background-repeat: no-repeat;
      background-attachment: scroll;
      background-size: cover;
      @media (min-width: 1280px) {
        filter: blur(10px);
        -webkit-filter: blur(10px);
        -moz-filter: blur(10px);
        -o-filter: blur(10px);
        -ms-filter: blur(10px);
      }
    }
    .main {
      width: 50%;
      border: 1px solid red;
      position: absolute;
      top: 100px;
      left: 25%;
      h1 {
        font-size: 2rem;
        color: #fff;
        text-align: center;
      }
      .h2 {
        color: #ccc;
        display: flex;
        align-items: center;
        justify-content: center;
        p {
          width: 20%;
        }
      }
    }
  }
}
</style>
