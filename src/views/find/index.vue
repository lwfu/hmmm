<template>
  <div class="find">
    <van-nav-bar title="发现" fixed placeholder />
    <div class="border"></div>
    <!-- 面试技巧 -->
    <div class="content">
      <van-cell
        size="large"
        :title-class="['title']"
        title="面试技巧"
        is-link
        value="查看更多"
        to=""
      />
      <div class="article" v-for="l in list" :key="l.id">
        <div class="left">
          <h3>{{ l.title }}</h3>
          <div class="time">
            <p>{{ l.created_at }}</p>
            <p>
              <span><van-icon name="eye-o" />{{ l.read }}</span>
              <span><van-icon name="good-job-o" />{{ l.star }}</span>
            </p>
          </div>
        </div>
        <div class="right">
          <img :src="l.cover" alt="" />
        </div>
      </div>
    </div>
    <!-- 市场数据 -->
    <div class="market">
      <van-cell
        size="large"
        :title-class="['title']"
        title="市场数据"
        is-link
        value="查看更多"
      />
    </div>
  </div>
</template>

<script>
import { articlesTechnic } from '@/api/articles'
export default {
  name: 'Find',
  data () {
    return {
      list: []
    }
  },
  async created () {
    const res = await articlesTechnic({
      start: 0,
      limit: 3
    })
    console.log(res)
    this.list = res.data.list
  }
}
</script>

<style lang="scss" scoped>
.find {
  .border {
    height: 5px;
    background: rgb(237, 237, 237);
  }
  .title {
    span {
      &:nth-child(1) {
        font-weight: 600;
        font-size: 18px;
      }
    }
  }
  .content {
    border-bottom: 8px solid rgb(238, 238, 238);
  }
  .article {
    width: 100vw;
    box-sizing: border-box;
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
    .left {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      h3 {
        width: 220px;
        font-size: 16px;
        word-wrap: break-word;
        word-break: break-all;
      }
      .time {
        color: #ccc;
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        p {
          span {
            &:nth-child(2) {
              margin-left: 10px;
            }
          }
        }
      }
    }
    .right {
      margin-left: 15px;
      width: 110px;
      // height: 75px;
      img {
        width: 100%;
        height: 100%;
        vertical-align: middle;
      }
    }
  }
}
</style>
