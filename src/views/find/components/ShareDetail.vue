<template>
  <div class="share-detail">
    <van-nav-bar fixed placeholder left-arrow @click-left="$router.go(-1)" />
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
    <Comment :id="$route.params.id"></Comment>
    <!-- 输入框 -->
    <div class="inp">
      <van-field v-model="value" placeholder="我来补充两句" @keyup.enter="send" />
      <div class="right">
        <div class="collect">
          <van-icon name="star-o" />{{ detail.collect }}
        </div>
        <div class="like"><van-icon name="good-job-o" />{{ detail.star }}</div>
        <div class="share">
          <van-icon name="share-o" />{{ detail.share || 0 }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { articlesShareDetail, setarticlesComments } from '@/api/articles'
import Comment from './Comment'

export default {
  name: 'ShareDetail',
  components: { Comment },
  data () {
    return {
      detail: {
        author: {}
      },
      value: '', // 输入框内容
      id: this.$route.params.id // 文章id
    }
  },
  async created () {
    const res = await articlesShareDetail(this.id)
    this.detail = res.data
  },
  methods: {
    async send () {
      const res = await setarticlesComments({
        content: this.value,
        article: this.id
      })
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
