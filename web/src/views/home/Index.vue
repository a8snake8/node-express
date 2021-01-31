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
        <a-col class="cl1" :xs="24" :lg="17">
          <div class="art">
            <a-divider orientation="left">
              今日大事件
            </a-divider>
            <div class="sc-list" v-infinite-scroll="handleInfiniteOnLoad" :infinite-scroll-disabled="busy"
              :infinite-scroll-distance="10">
              <a-list :data-source="newsList">
                <a-list-item class="animate__animated animate__fadeInUp" slot="renderItem" slot-scope="item">
                  <a-list-item-meta :description=" item.passtime">
                    <a slot="title" :href="item.path" target="_blank">{{ item.title }}</a>
                    <a-avatar slot="avatar" :src="item.image" />
                  </a-list-item-meta>
                  <div>
                    <img :src="item.image" alt="">
                  </div>
                </a-list-item>
                <div v-if="loading && !busy" class="demo-loading-container">
                  <a-spin />
                </div>
              </a-list>
            </div>
          </div>
          <div class="art">
            <a-divider orientation="left">
              最新发布
            </a-divider>
            <a-list item-layout="vertical" size="small" :pagination="pagination" :data-source="listData">
              <div slot="footer"><b>本人声明：</b> 如遇文章侵权留言可联系博主删除</div>
              <a-list-item slot="renderItem" key="item._id" slot-scope="item">
                <template v-for="{ type, text } in actions" slot="actions">
                  <span :key="type">
                    <a-icon :type="type" style="margin-right: 8px" />
                    {{ text }}
                  </span>
                </template>
                <img slot="extra" width="272" alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />
                <a-list-item-meta :description="item.description">
                  <a slot="title" :href="item.href">{{ item.name }}</a>
                  <a-avatar slot="avatar" :src="item.avatar" />
                </a-list-item-meta>
                {{ item.content }}
              </a-list-item>
            </a-list>
          </div>
        </a-col>
        <a-col class="cl2" :xs="24" :lg="6">
          <a-affix :offset-top="top">
            <div class="category">
              <a-divider orientation="left">
                分类标签
              </a-divider>
              <div class="tag">
                <a-tag class="bt" color="pink">
                  pink
                </a-tag>
                <a-tag class="bt" color="red">
                  red
                </a-tag>
                <a-tag class="bt" color="orange">
                  orange
                </a-tag>
                <a-tag class="bt" color="green">
                  green
                </a-tag>
                <a-tag class="bt" color="cyan">
                  cyan
                </a-tag>
                <a-tag class="bt" color="blue">
                  blue
                </a-tag>
                <a-tag class="bt" color="purple">
                  purple
                </a-tag>
              </div>
            </div>
            <div class="category">
              <a-divider orientation="left">
                文章聚合
              </a-divider>
              <div class="hl-group-cat1">
                <div class="inner">
                  <a-button class="bt" type="primary">分类演示</a-button>
                  <p>测试文章</p>
                  <span>
                    <a-icon type="clock-circle" /> 2021-01-30
                  </span>
                </div>
              </div>
              <a-list item-layout="horizontal" :data-source="listData">
                <a-list-item slot="renderItem" slot-scope="item">
                  <img slot="extra" width="100" alt="logo"
                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />
                  <a-list-item-meta description="123456">
                    <a slot="title" href="https://www.antdv.com/">{{ item.name }}</a>
                  </a-list-item-meta>
                </a-list-item>
              </a-list>
            </div>
          </a-affix>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import { postNewsList, postArticalList } from '@/api/common'
import infiniteScroll from 'vue-infinite-scroll';
export default {
  directives: { infiniteScroll },
  name: '',
  data () {
    return {
      listData: [],
      pagination: {
        onChange: page => {
          console.log(page);
        },
        pageSize: 10,
      },
      actions: [
        { type: 'star-o', text: '156' },
        { type: 'like-o', text: '156' },
        { type: 'message', text: '2' },
      ],
      top: 80,
      newsPage: {
        page: 1,
        count: 5
      },
      newsList: [],
      loading: false,
      busy: false,
    };
  },
  computed: {

  },
  watch: {
  },
  mounted () {
    this.initListdata()
  },
  beforeMount () {
    this.fetchData(res => {
      this.newsList = res.data.result;
    });
  },
  methods: {
    // 博客文章接口
    initListdata () {
      const list = {
        page: 1,
        pageSize: 3,
        name: '',
        cate: ''
      }
      postArticalList(list).then(res => {
        console.log(res.data)
        this.listData = res.data
      })
    },
    // 新闻接口
    fetchData (callback) {
      postNewsList(this.newsPage).then(res => {
        callback(res);
      })
    },
    handleInfiniteOnLoad () {
      const data = this.newsList;
      this.loading = true;
      if (data.length > 50) {
        this.$message.warning('已经到底了');
        this.busy = true;
        this.loading = false;
        return;
      }
      this.newsPage.page++
      this.fetchData(res => {
        this.newsList = data.concat(res.data.result);
        this.loading = false;
      });
    }
  },
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
      left: 38%;
      width: 24%;
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
      width: 1200px;
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
      width: 1200px;
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
      width: 1200px;
      margin: 0 auto;
      padding-top: 20px;
      @media (max-width: 768px) {
        width: 90%;
      }
      .cl1 {
        box-sizing: border-box;
        .art {
          background: #fff;
          padding: 12px;
          margin-bottom: 20px;
          .sc-list {
            overflow: auto;
            height: 500px;
          }
        }
        .demo-loading-container {
          position: absolute;
          bottom: 40px;
          width: 100%;
          text-align: center;
        }
      }
      .cl2 {
        .category {
          padding: 12px;
          background: #fff;
          margin-bottom: 20px;
          .tag {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            .bt {
              margin-bottom: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
