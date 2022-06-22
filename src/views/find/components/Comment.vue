<template>
  <div class="comment">
    <header>
      <h3>
        评论<span>{{ comment.total }}</span>
      </h3>
    </header>
    <div class="pinglun" v-for="item in comment" :key="item.id">
      <div class="avatar">
        <div class="left">
          <div class="pic">
            <img
              :src="
                comment.author
                  ? comment.author.avatar
                  : 'http://hmmm.zllhyy.cn/uploads/avatar09_4b071982f9.jpeg'
              "
              alt=""
            />
          </div>
          <div class="info">
            <p>{{ comment.author ? comment.author.nickname : '妮妮' }}</p>
            <p>2小时前</p>
          </div>
        </div>
        <div class="like">{{item.star ? item.star : '1'}}<van-icon name="good-job-o" /></div>
      </div>
      <div class="content">
        <p>{{item.content ? item.content : '一条评论信息'}}</p>
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
      comment: {}
    }
  },
  async mounted () {
    const res = await articlesComments({
      id: this.id,
      limit: 10,
      start: 0
    })
    console.log(res)
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
      }
    }
    .content {
      padding: 0 54px;
    }
  }
}
</style>
