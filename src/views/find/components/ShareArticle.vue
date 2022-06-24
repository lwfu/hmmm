<template>
  <div class="share-article">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="s-items">
        <div
          class="s-item"
          v-for="item in shareList"
          :key="item.id"
          @click="goShareDetail(item.id)"
        >
          <div class="title">{{ item.title }}</div>
          <div class="middle">{{ item.content }}</div>
          <div class="bottom">
            <span class="avatar">
              <img :src="`http://hmmm.zllhyy.cn${item.author.avatar}`" alt="" />
              {{ item.author.nickname }}
            </span>
            <span>{{ item.updated_at | formatTime }}</span>
            <span class="comment">
              <van-icon name="comment-o" />{{ item.article_comments }}
            </span>
            <span class="like">
              <van-icon name="thumb-circle-o" />{{ item.star }}
            </span>
          </div>
          <van-divider />
        </div>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
import { articlesShare } from '@/api/articles'

export default {
  name: 'ShareArticle',
  data () {
    return {
      shareList: [],
      isLoading: false,
      start: 0
    }
  },
  async created () {
    await this.loadData()
  },
  methods: {
    async loadData () {
      const res3 = await articlesShare({
        start: this.start,
        limit: 10
      })
      this.shareList = res3.data.list
    },
    goShareDetail (id) {
      this.$router.push({
        name: 'sharedetail',
        params: {
          id
        }
      })
    },
    onRefresh () {
      this.start++
      this.loadData()
      this.isLoading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.share-article {
  .s-items {
    padding: 0 16px;
    .s-item {
      .title {
        font-size: 16px;
        font-weight: 600;
        margin-top: 10px;
      }
      .middle {
        overflow: hidden;
        word-wrap: break-word;
        word-break: break-all;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        font-size: 14px;
        color: #666;
        margin: 10px 0;
      }
      .bottom {
        display: flex;
        color: #ccc;
        span {
          &:nth-child(1) {
            flex: 2;
          }
          &:nth-child(n + 2) {
            flex: 1;
          }
        }
        .avatar {
          img {
            width: 20px;
            height: 20px;
            border-radius: 50%;
          }
        }
        .comment,
        .like {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
}
</style>
