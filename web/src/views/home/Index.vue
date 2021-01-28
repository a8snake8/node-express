<template>
  <div class="home">
    <div class="cont1">
      <div class="img-bg"></div>
      <div class="main">
        <h1>胡先生的BLOG与各类项目管理中心</h1>
        <div class="h2">
          <p>
            <a-icon type="man" /> <span>大胡子</span>
          </p>
          <p>
            <a-icon type="clock-circle" /> 2021年1月27日
          </p>
        </div>
        <h3>前言：除了你创造的价值，没有人能为你的结局买单，即使全世界都相信的你很努力，也是毫无意义的尬演，结局从来不会陪你演戏 ...</h3>
      </div>
      <div class="border"></div>
      <div class="cate">
        <a-row type="flex" justify="space-between">
          <a-col class="group" :xs="24" :lg="5" v-for="i in 4" :key="i">
            <div class="tp1">
              <img src="../../assets/img/demo.jpg" alt="">
            </div>
            <h4>
              <span>消除西瓜项目</span>
            </h4>
            <p @mouseover="(e)=> {e.currentTarget.className = 'animate__animated animate__fadeIn'}"
              @mouseout="(e)=> {e.currentTarget.className = ''}">炫酷音乐网络和平板电脑应用UI套件
            </p>
            <div class="hl-flex">
              <h5>
                <a-icon type="github" />
                <b>Github</b>
              </h5>
              <h5>
                <a-icon type="clock-circle" />
                <span>2020.01.28</span>
              </h5>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
    <div class="cont2">
      <a-card size="small" class="card">
        <a-divider orientation="left">
          专题推荐
        </a-divider>
        <div class="group">
          <div class="gt" v-for="i in 4" :key="i">
            <div class="inner">
              <div>
                <p><span :class="i==1?'hl-red':i==2?'hl-green':i==3?'hl-orange':'hl-blue'">技术分类</span></p>
                <span>共33篇文章</span>
              </div>
            </div>
          </div>
        </div>
      </a-card>
    </div>
    <div class="cont3">
      <a-row class="cain" type="flex" justify="space-between">
        <a-col class="cl1" :xs="18" :lg="17">
          <div class="art">
            456123
          </div>
          <div class="art">
            <a-divider orientation="left">
              最新发布
            </a-divider>
          </div>
        </a-col>
        <a-col ref="categorys" class="cl2" :xs="5" :lg="6">
          <div class="category">
            <a-divider orientation="left">
              分类标签
            </a-divider>
          </div>
          <div class="category">
            <a-divider orientation="left">
              文章聚合
            </a-divider>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      clientHeight: ''
    };
  },
  computed: {

  },
  watch: {
    clientHeight (e) {
      console.log(e)
    }
  },
  mounted: {
    fun () {
      console.log(this.$refs.categorys)
    }
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.home {
  background: #333333;
  .cont1 {
    position: relative;
    min-height: 340px;
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
      height: 350px;
      z-index: -1;
      background-image: url("../../assets/img/home_bg.jpg");
      background-position: 50% 50%;
      background-repeat: no-repeat;
      background-attachment: scroll;
      background-size: cover;
      @media (min-width: 1280px) {
        height: 100%;
        filter: blur(10px);
        -webkit-filter: blur(10px);
        -moz-filter: blur(10px);
        -o-filter: blur(10px);
        -ms-filter: blur(10px);
      }
    }
    .border {
      position: absolute;
      top: 70px;
      left: 35%;
      width: 30%;
      height: 240px;
      border: 12px solid #fc3c2d;
      opacity: 0.6;
      z-index: -1;
      display: none;
      @media (min-width: 1280px) {
        display: block;
      }
    }
    .main {
      width: 50%;
      height: 380px;
      text-align: center;
      margin: 0 auto;
      h1 {
        font-size: 2rem;
        color: #fff;
        text-align: center;
        padding-top: 110px;
      }
      .h2 {
        color: #ccc;
        display: flex;
        align-items: center;
        justify-content: center;
        p {
          width: 15%;
          font-size: 0.9rem;
          color: #ddd;
          span {
            color: #fff;
            font-weight: bold;
          }
        }
      }
      h3 {
        font-size: 1rem;
        color: #ddd;
        text-align: center;
        line-height: 30px;
        padding: 0 10%;
      }
      @media (max-width: 768px) {
        width: 90%;
        h1 {
          font-size: 1.6rem;
          padding-top: 60px;
        }
        .h2 {
          margin: 20px 0;
          p {
            width: 50%;
          }
        }
        h3 {
          font-size: 0.9rem;
          color: #ddd;
          line-height: 24px;
          padding: 0;
        }
      }
    }
    .cate {
      width: 76%;
      margin: 0 auto;
      @media (max-width: 768px) {
        width: 90%;
        .group {
          margin-bottom: 20px;
          border: 1px solid #666;
          padding-bottom: 10px;
          border-radius: 5px;
        }
      }
      .group {
        position: relative;
        .tp1 {
          width: 100%;
          overflow: hidden;
          position: relative;
          border-radius: 5px;
          height: 150px;
          -webkit-transition: all 0.15s ease-out 0s;
          transition: all 0.15s ease-out 0s;
          img {
            width: calc(100% + 60px);
            -webkit-transition: opacity 0.35s, -webkit-transform 0.45s;
            transition: opacity 0.35s, transform 0.45s;
            transform: translate3d(-40px, 0, 0);
            -webkit-transition: opacity 0.35s, -webkit-transform 0.45s;
          }
        }
        h4 {
          position: absolute;
          color: aqua;
          z-index: 6;
          top: 138px;
          height: 20px;
          line-height: 20px;
          width: 100%;
          text-align: center;
          span {
            display: inline-block;
            background: #ff5722;
            color: #fff;
            padding: 2px 8px;
            border-radius: 2px;
            font-size: 12px;
          }
        }
        p {
          color: #fff;
          margin-top: 20px;
          font-size: 15px;
          text-align: center;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          overflow: hidden;
        }
        h5 {
          color: #ccc;
          font-size: 14px;
          b {
            color: #fff;
            margin-left: 4px;
            font-weight: normal;
          }
          span {
            margin-left: 4px;
          }
        }
      }
      .group:hover {
        .tp1 {
          img {
            filter: alpha(opacity=60);
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
          }
        }
      }
    }
  }
  .cont2 {
    background: #f0f1f4;
    padding-top: 40px;
    .card {
      width: 76%;
      margin: 0 auto;
      .group {
        display: flex;
        justify-content: space-between;
        padding: 10px 0 20px 0;
        .gt {
          width: 23%;
          height: 180px;
          border-radius: 2px;
          background: url("../../assets/img/demo.jpg");
          background-color: #333;
          background-position: 50% 50%;
          background-size: cover;
          background-repeat: no-repeat;
          background-attachment: scroll;
          position: relative;
          .inner {
            position: absolute;
            top: 0;
            width: 100%;
            height: 180px;
            background: rgba(0, 0, 0, 0.4);
            transition: 0.5s;
            div {
              text-align: center;
              padding-top: 70px;
              span {
                font-size: 13px;
                color: #ccc;
              }
              p {
                span {
                  font-size: 14px;
                  padding: 4px 16px;
                  color: #fff;
                }
              }
            }
          }
          .inner:hover {
            box-shadow: -1px -1px 4px #333;
            background: rgba(0, 0, 0, 0.6);
            transition: 0.5s;
          }
        }
      }
    }
    @media (max-width: 768px) {
      padding-top: 20px;
      .card {
        width: 90%;
        .group {
          flex-wrap: wrap;
          padding: 0;
          .gt {
            width: 48%;
            height: 180px;
            margin-bottom: 16px;
          }
        }
      }
    }
  }
  .cont3 {
    background: #f0f1f4;
    .cain {
      width: 76%;
      margin: 0 auto;
      padding-top: 20px;
      .cl1 {
        box-sizing: border-box;
        .art {
          background: #fff;
          padding: 12px;
          margin-bottom: 20px;
          height: 800px;
        }
      }
      .cl2 {
        .category {
          padding: 6px;
          background: #fff;
          margin-bottom: 20px;
        }
      }
    }
  }
}
</style>
