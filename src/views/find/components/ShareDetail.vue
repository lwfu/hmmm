<template>
  <div v-if="detail.id" class="share-detail">
    <van-nav-bar
      fixed
      placeholder
      left-arrow
      @click-left="$route.meta.fromPath === '/sharelist' ? $router.push('/sharelist') : $router.push('/find')" 
    />
    <div class="content">
      <header>
        <h2>{{ detail.title }}</h2>
      </header>
      <div class="avatar">
        <div class="pic">
          <img :src="`http://hmmm.zllhyy.cn${detail.author.avatar}`" alt="" />
        </div>
        <div class="info">
          <p>{{ detail.author.nickname }}</p>
          <p>{{ detail.updated_at | formatTime }}</p>
        </div>
      </div>
      <div v-html="detail.content"></div>
    </div>
    <Comment :id="$route.params.id" v-if="show"></Comment>
    <!-- 输入框 -->
    <div class="inp">
      <van-field v-model="value" placeholder="我来补充两句" @keyup.enter="send" />
      <div class="right">
        <div class="collect" @click="handleCollect">
          <van-icon name="star-o" ref="collect" />{{ detail.collect }}
        </div>
        <div class="like" @click="handleStar"><van-icon name="good-job-o" ref="star" />{{ detail.star }}</div>
        <div class="share" @click="shareArticle">
          <van-icon name="share-o"  />{{ detail.share || 0 }}
        </div>
      </div>
    </div>
    <!-- 分享弹出层 -->
    <sharePop v-model="showShare" :detail="detail1" />
  </div>
</template>

<script>
import { articlesCollect, articlesShareDetail, articlesStar, setarticlesComments, shareImg } from '@/api/articles'
import Comment from './Comment'
import sharePop from './sharePop.vue'

export default {
  name: 'ShareDetail',
  components: { Comment, sharePop },
  data () {
    return {
      detail: {
        author: {}
      },
      show: true,
      value: '', // 输入框内容
      showShare: false,
      detail1: {
        star: 0,
        collect: 0
      },
      id: this.$route.params.id // 文章id
    }
  },
  async created () {
    this.load()
  },
  methods: {
    async load () {
      const res = await articlesShareDetail(this.id)
      let content = res.data.content
      content = content.replaceAll('http://47.106.228.28:1337', 'http://hmmm.zllhyy.cn/')
      this.detail = {
        ...res.data,
        content
      }
    },
    async send () {
      await setarticlesComments({
        content: this.value,
        article: this.id
      })
      // console.log(res)
      await this.load()
      this.show = false
      await this.$nextTick()
      this.show = true
      this.value = ''
    },
    async handleCollect () {
      await articlesCollect({
        id: this.id
      })
      await this.load()
      this.$toast.success('收藏成功')
      this.$refs.collect.style.color = 'red'
    },
    async handleStar () {
      await articlesStar({
        article: this.id
      })
      this.$toast.success('点赞成功')
      this.$refs.star.style.color = 'red'
      this.load()
    },
    async shareArticle () {
      // 滚到顶部
      window.scrollTo(0, 0)
      this.showShare = true
      const shareRes = await shareImg({ id: this.id })
      this.detail.share = shareRes.data.share
    }
  }
}
</script>

<style lang="scss" scoped>
.share-detail {
  .content {
    padding: 10px;
    border-bottom: 6px solid #f5f5f5;
    header {
      h2 {
        font-size: 22px;
      }
    }
    .avatar {
      display: flex;
      align-items: center;
      margin: 15px 0;
      .pic {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
        background-color: #ccc;
        margin-right: 15px;
        img {
          width: 100%;
          object-fit: cover;
        }
      }
      .info {
        p {
          &:nth-child(2) {
            color: #ccc;
          }
        }
      }
    }
  }
  .inp {
    display: flex;
    padding-right: 12px;
    ::v-deep .van-field__control {
      padding: 6px 4px;
      background-color: rgba(240, 240, 240, 0.6);
    }
    .right {
      display: flex;
      justify-content: space-between;
      .collect,
      .like,
      .share {
        padding: 0 6px;
        color: #c5c5c5;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        ::v-deep .van-icon {
          font-size: 20px;
        }
      }
    }
  }
}
</style>
