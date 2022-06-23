<template>
  <div class="comment">
    <header>
      <h3>
        评论<span>{{ comment.total }}</span>
      </h3>
    </header>
    <div class="pinglun" v-for="item in comment.list" :key="item.id">
      <div class="avatar">
        <div class="left">
          <div class="pic">
            <img :src="`http://hmmm.zllhyy.cn${item.author.avatar}`" alt="" />
          </div>
          <div class="info">
            <p>{{ item.author.nickname }}</p>
            <p class="time">{{ item.created_at | formatTime }}</p>
          </div>
        </div>
        <div class="like">{{ item.star }}<van-icon name="good-job-o" /></div>
      </div>
      <div class="content">
        <p>{{ item.content }}</p>
        <div class="reply" v-if="item.children_comments.length">
          <p v-for="i in item.children_comments" :key="i.id">
            <span class="huifu">{{ i.author }}</span
            >: {{ i.content }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { articlesComments } from '@/api/articles'
export default {
  name: 'Comment',
  props: ['id'],
  data () {
    return {
      comment: {
        author: {}
      }
    }
  },
  async mounted () {
    const res = await articlesComments({
      id: this.id,
      limit: 10,
      start: 0
    })
    this.comment = res.data
  }
}
</script>

<style lang="scss" scoped>
.comment {
  width: 100vw;
  padding: 10px;
  box-sizing: border-box;
  header {
    h3 {
      font-size: 18px;
      position: relative;
    }
    span {
      font-size: 14px;
      color: #999;
      position: absolute;
    }
  }
  .pinglun {
    margin: 10px 0;
    .avatar {
      display: flex;
      justify-content: space-between;
      .left {
        display: flex;
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
          .time {
            color: #ccc;
            font-size: 12px;
          }
        }
      }
    }
    .content {
      padding: 0 4px 6px 54px;
      .reply {
        width: 100%;
        background-color: rgba(230, 230, 230, 0.5);
        margin-top: 10px;
        padding: 10px;
        box-sizing: border-box;
        p {
          padding: 4px 0;
          .huifu {
            font-weight: 520;
          }
        }
      }
    }
  }
}
</style>
