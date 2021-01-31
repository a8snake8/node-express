<template>
  <div class="talk">
    <div class="user">
      <img src="https://relive-xintheme.oss-cn-beijing.aliyuncs.com/wp-content/uploads/avatar/avatar-2-204822.jpg"
        alt="avatar">
      <div class="desc">
        <h3>大胡子</h3>
        <h4>于灯火阑珊处，于暗香离别时，未曾放弃。</h4>
        <p>
          <a-icon type="qq" />
          <a-divider type="vertical" />
          <a-icon type="weibo" />
        </p>
      </div>
    </div>
    <a-row type="flex" :gutter="20" justify="space-between" align="top">
      <a-col :xs="24" :lg="14">
        <a-comment v-for="i in 15" :key="i">
          <template slot="actions">
            <span key="comment-basic-like">
              <a-tooltip title="Like">
                <a-icon type="like" :theme="action === 'liked' ? 'filled' : 'outlined'" @click="like" />
              </a-tooltip>
              <span style="padding-left: '8px';cursor: 'auto'">
                {{ likes }}
              </span>
            </span>
            <span key="comment-basic-dislike">
              <a-tooltip title="Dislike">
                <a-icon type="dislike" :theme="action === 'disliked' ? 'filled' : 'outlined'" @click="dislike" />
              </a-tooltip>
              <span style="padding-left: '8px';cursor: 'auto'">
                {{ dislikes }}
              </span>
            </span>
            <span key="comment-basic-reply-to">Reply to</span>
          </template>
          <a slot="author">Han Solo</a>
          <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo" />
          <p slot="content">
            We supply a series of design principles, practical patterns and high quality design resources
            (Sketch and Axure), to help people create their product prototypes beautifully and
            efficiently.
          </p>
          <a-tooltip slot="datetime" :title="moment().format('YYYY-MM-DD HH:mm:ss')">
            <span>{{ moment().fromNow() }}</span>
          </a-tooltip>
        </a-comment>
        <a-pagination v-model="current" :total="50" show-less-items />
      </a-col>
      <a-col :xs="24" :lg="9">
        <a-affix :offset-top="top">
          <div class="calendarbox">
            <img src="../../assets/img/calendar.jpg" alt="background">
            <h4>日历</h4>
            <a-calendar :fullscreen="false" @panelChange="onPanelChange" />
          </div>
          <a-form-model :model="form">
            <a-form-model-item label="留言板">
              <a-textarea v-model="form.desc" placeholder="留言内容在这里输入..." :rows="6" />
            </a-form-model-item>
            <a-form-model-item>
              <a-button type="primary" @click="onSubmit">
                留言
              </a-button>
            </a-form-model-item>
          </a-form-model>
        </a-affix>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  name: '',
  data () {
    return {
      form: {
        desc: ''
      },
      likes: 0,
      dislikes: 0,
      action: null,
      moment,
      current: 1,
      top: 80
    };
  },
  computed: {
  },
  watch: {
  },
  methods: {
    onPanelChange (value, mode) {
      console.log(value, mode);
    },
    onSubmit () { },
    like () {
      this.likes = 1;
      this.dislikes = 0;
      this.action = 'liked';
    },
    dislike () {
      this.likes = 0;
      this.dislikes = 1;
      this.action = 'disliked';
    },
  },
};
</script>

<style lang="less" scoped>
.talk {
  width: 1200px;
  margin: 0 auto;
  background: #fff;
  margin-top: 20px;
  padding: 20px;
  .user {
    background: #fafafa;
    border: 1px solid rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 20px;
    img {
      width: 100px;
      height: 100px;
      border: 5px solid #fff;
      border-radius: 50%;
      box-shadow: 1px 1px 6px #ccc;
      margin-right: 50px;
    }
    img:hover {
      transition: 1s;
      transform: rotate(360deg);
    }
    h3 {
      color: @primary-color;
      font-size: 1.2rem;
    }
    h4 {
      font-size: 14px;
    }
    p {
      color: rgb(36, 25, 22);
      font-size: 1rem;
    }
  }
  @media (max-width: 768px) {
    width: 90%;
  }
}
</style>
