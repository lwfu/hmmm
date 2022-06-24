<template>
  <div class="screen">
    <div class="top">
      <div class="left">
        <a href="javascript:;">推荐</a>
        <a href="javascript:;">距离</a>
        <a href="javascript:;">评分</a>
      </div>
      <a href="javascript:;">筛选</a>
    </div>
    <div class="bottom">
      <div
        class="content"
        v-for="(item, index) in list"
        :key="item.id"
        @click="ToDetails(item.id)"
      >
        <div class="leftbox">
          <div class="imgbox">
            <img :src="'http://hmmm.zllhyy.cn/' + item.logo" />
          </div>
        </div>

        <div class="rightbox">
          <h2>{{ item.name }}</h2>
          <div class="region">{{ item.region + item.distance }}</div>
          <span class="grade">{{ item.score }}分</span>
          <div class="introduce">
            <span>{{ item.type }}</span>
            <span>{{ item.step }}</span>

            <span>{{ item.scale }}</span>
            <div>
              在招职位: <i>{{ item.positions }}</i
              >/最后更新时间: 2020.09.09
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { companyList } from '@/api/companies'
import { Loading } from 'vant'
export default {
  name: 'screen',
  data () {
    return {
      list: []
    }
  },
  created () {
    this.recommend()
  },
  methods: {
    async recommend () {
      let res = await companyList()
      this.list = res.data.list
    },
    ToDetails (id) {
      this.$router.push('/details?id=' + id)
    }
  }
}
</script>

<style lang="scss" scoped>
.screen {
  .top {
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    .left {
      a {
        color: black;
        &:nth-child(2) {
          margin: 0 20px;
        }
      }
    }
    & a {
      color: black;
    }
  }
  .bottom {
    & > div:last-child {
      margin-bottom: 50px;
    }
    .content {
      border-bottom: 1px solid #f7f4f5;
      width: 100%;
      height: 150px;
      display: flex;
      align-items: center;
      padding: 0 10px;
      box-sizing: border-box;
      .leftbox {
        width: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        .imgbox {
          width: 40px;
          height: 60px;
          img {
            height: 100%;
          }
        }
      }
      .rightbox {
        margin-left: 10px;
        flex: 1;
        position: relative;
        h2 {
          font-weight: 400;
        }
        .region {
          font-size: 10px;
        }
        .grade {
          position: absolute;
          top: 10px;
          right: 10px;
          font-size: 10px;
        }
        .introduce {
          margin-top: 10px;
          span {
            background-color: #f7f4f5;
            color: #dacbc6;
            padding: 1px 1px;
            font-size: 8px;
            margin-right: 5px;
          }
          div {
            margin-top: 10px;
            font-size: 10px;
            color: #c6c8d1;
            i {
              color: #9adbf3;
              font-style: normal;
            }
          }
        }
      }
    }
  }
}
</style>
