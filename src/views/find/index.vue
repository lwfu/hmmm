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
        :to="{ name: 'findlist' }"
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
          <img :src="`http://hmmm.zllhyy.cn${l.cover}`" alt="" />
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
      <div class="tags">
        <span>{{ hot.city }}</span>
        <span>{{ hot.position }}</span>
      </div>
      <div class="items">
        <div class="item" v-for="(item, index) in showMoreList" :key="index">
          <div class="left">{{ item.year }}</div>
          <div class="center">
            <div
              class="inner"
              :style="{ width: `${(item.salary / hot.topSalary) * 100}%` }"
            >
              ￥{{ item.salary }}
            </div>
          </div>
          <div class="right">
            <img
              :src="
                item.percent > 0
                  ? 'https://img02.mockplus.cn/idoc/sketch/2020-09-10/7c58537d-1645-4fec-bd33-7bec566f1a69.3750B820-E5FA-476B-82CE-6E05E71FF960.png'
                  : 'https://img02.mockplus.cn/idoc/sketch/2020-09-10/f3055e32-9e30-4f43-bfc7-c90397dc4d64.B24FA884-A8D1-4B8B-BB9A-0688CAECF085.png'
              "
              alt=""
            />
            {{ item.percent }}%
          </div>
        </div>
      </div>
      <div class="more" @click="handleMore">
        {{ isMore ? '收起' : '展开更多' }}
        <span v-show="!isMore"><van-icon name="arrow-down" /></span>
        <span v-show="isMore"><van-icon name="arrow-up" /></span>
      </div>
    </div>
    <!-- 面经分享 -->
    <div class="share">
      <van-cell
        size="large"
        :title-class="['title']"
        title="面经分享"
        is-link
        value="查看更多"
        :to="{ name: 'sharelist' }"
      />
      <div class="s-items">
        <div class="s-item" v-for="item in article" :key="item.id">
          <div class="title">{{ item.title }}</div>
          <div class="middle">{{ item.content }}</div>
          <div class="bottom">
            <span class="avatar">
              <img :src="`http://hmmm.zllhyy.cn${item.author.avatar}`" alt="" />
              {{ item.author.nickname }}
            </span>
            <span>{{ item.updated_at }}</span>
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
    </div>
  </div>
</template>

<script>
import { articlesShare, articlesTechnic } from '@/api/articles'
import { dataHot } from '@/api/data'
export default {
  name: 'Find',
  data () {
    return {
      list: [], // 面试技巧
      hot: {}, // 市场数据
      article: [], // 分享
      hotArr: [], // 工资数组
      isMore: false // 是否展开更多
    }
  },
  computed: {
    showMoreList () {
      if (!this.isMore) {
        // 处于收起状态，显示四个数组元素
        const moreArr = this.hotArr.slice(0, 4)
        return moreArr
      } else {
        // 处于展开状态，显示全部数组元素
        return this.hotArr
      }
    }
  },
  async created () {
    // 面试技巧
    const res = await articlesTechnic({
      start: 0,
      limit: 3
    })
    this.list = res.data.list
    // 市场数据
    const res2 = await dataHot()
    this.hot = res2.data
    console.log(res2)
    this.hotArr = res2.data.yearSalary.reverse()

    // 分享
    const res3 = await articlesShare({
      start: 0,
      limit: 3
    })

    this.article = res3.data.list
  },
  methods: {
    handleMore () {
      this.isMore = !this.isMore
    }
  }
}
</script>

<style lang="scss" scoped>
.find {
  padding-bottom: 50px;
  .border {
    height: 3px;
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
  .market {
    border-bottom: 8px solid rgb(238, 238, 238);
    .tags {
      padding: 0 16px;
      margin-bottom: 10px;
      span {
        background-color: rgba(229, 229, 229, 0.5);
        padding: 4px;
        margin-right: 10px;
      }
    }
    .items {
      padding: 0 16px;
      margin-bottom: 10px;
      .item {
        height: 16px;
        display: flex;
        justify-content: space-between;
        padding: 6px 0;
        .left {
          font-size: 12px;
          width: 70px;
        }
        .center {
          flex: 1;
          margin: 0 10px;
          border-radius: 20px;
          background-color: rgb(235, 235, 235);
          .inner {
            background-color: #fe6d67;
            border-radius: 16px;
            text-align: right;
            color: #fff;
            font-size: 12px;
            padding: 0 10px;
            box-sizing: border-box;
          }
        }
        .right {
          width: 52px;
          ::v-deep .van-icon-arrow-up {
            color: green;
            font-weight: 600;
          }
          img {
            width: 15px;
            height: 15px;
          }
        }
      }
    }
    .more {
      text-align: center;
      margin-bottom: 10px;
    }

  }
  .share {
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
}
</style>
