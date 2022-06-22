<template>
  <div class="content">
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
        <img :src="`http://106.55.138.21:1337${l.cover}`" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { articlesTechnic } from '@/api/articles'
export default {
  name: 'Article',
  data () {
    return {
      list: []
    }
  },
  async created () {
    // 面试技巧
    const res = await articlesTechnic({
      start: 0,
      limit: 5
    })
    this.list = res.data.list
  }
}
</script>

<style lang="scss" scoped>
.content {
  padding: 16px 0;
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
      img {
        width: 100%;
        height: 100%;
        vertical-align: middle;
      }
    }
  }
}
</style>
