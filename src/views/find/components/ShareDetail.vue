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
  </div>
</template>

<script>
import { articlesShareDetail } from '@/api/articles'
import Comment from './Comment'

export default {
  name: 'ShareDetail',
  components: { Comment },
  data () {
    return {
      detail: {
        author: {}
      }
    }
  },
  async created () {
    const res = await articlesShareDetail(this.$route.params.id)
    this.detail = res.data
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
}
</style>
