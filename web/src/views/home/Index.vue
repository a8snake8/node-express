<template>
  <div class="home">
    <a-row type="flex" justify="space-around" align="top">
      <a-col :sm="16" :xs="24">
        <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="listData">
          <div slot="footer"><b>如有侵权</b> 请联系博主删除</div>
          <a-list-item slot="renderItem" key="item.title" slot-scope="item">
            <template v-for="{ type, text } in actions" slot="actions">
              <span :key="type">
                <a-icon :type="type" style="margin-right: 8px" />
                {{ text }}
              </span>
            </template>
            <img slot="extra" width="272" alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />
            <a-list-item-meta>
              <a slot="title" :href="item.href">{{ item.title }}</a>
              <a-avatar slot="avatar" :src="item.avatar" />
            </a-list-item-meta>
            {{ item.content }}
          </a-list-item>
        </a-list>
      </a-col>
      <a-col :sm="7" :xs="0">
        <div class="aside">
          <a-avatar :size="100" :src="require('@/assets/img/avatar.jpg')" />
          <h3>Peter Hu</h3>
          <div class="cat">
            <a-divider orientation="left">
              标签
            </a-divider>
            <a-tag color="pink">
              VUE
            </a-tag>
            <a-tag color="red">
              node
            </a-tag>
            <a-tag color="orange">
              笔记
            </a-tag>
            <a-tag color="green">
              日记
            </a-tag>
            <a-tag color="cyan">
              项目
            </a-tag>
            <a-tag color="blue">
              js
            </a-tag>
            <a-tag color="purple">
              随笔
            </a-tag>
          </div>
          <div class="cat">
            <a-divider orientation="left">
              文章查找
            </a-divider>
            <a-input-search placeholder="输入关键词" style="width: 200px" @search="onPanelChange" />
            <a-divider />
            <a-calendar :fullscreen="false" @panelChange="onPanelChange" />
          </div>
          <div class="cat">
            <a-divider orientation="left">
              文章分类
            </a-divider>
            <a-list class="list" :data-source="CategoryData">
              <a-list-item slot="renderItem" slot-scope="item">
                {{ item }}
              </a-list-item>
            </a-list>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'https://www.antdv.com/',
    title: `ant design vue part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}
export default {
  name: '',
  data () {
    return {
      listData,
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
      CategoryData: [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
      ]
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
  },
};
</script>

<style lang="less" scoped>
.home {
  .aside {
    background: #efefef;
    text-align: center;
    padding: 20px 0;
    .cat {
      .list {
        padding: 0 30px;
      }
    }
  }
}
</style>
