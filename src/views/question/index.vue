<template>
  <div class="question" v-if="cityPositions['全国']">
    <!-- navBar -->
    <van-nav-bar>
      <template #title>
        <van-dropdown-menu>
          <van-dropdown-item ref="dropdownRef" get-container=".question">
            <template #title>
              面试宝典
              <span class="region">{{city}}</span>
            </template>
            <van-index-bar>
              <template v-for="(item, index) in citys">
                <van-index-anchor :index="item.key" :key="item.id" />
                <van-cell :title="child" v-for="child in item.children" @click="changeCity(child)" />
              </template>
            </van-index-bar>
          </van-dropdown-item>
        </van-dropdown-menu>
      </template>
    </van-nav-bar>
    <!-- Tabs -->
    <van-cell v-if="tabsflag" class="question-tabs" :border="false">
      <van-tabs v-model="active" type="card" title-active-color="#fff" title-inactive-color="#333" swipe-threshold="0">
        <van-tab
          v-for="tab in cityPositions[city]"
          :key="tab.id"
          :title="tab.name"
          :name="tab.id"
        />
      </van-tabs>
    </van-cell>
    <div v-if="bol">
      <!-- 题库 -->
      <div class="question-box">
      <div class="left">
        <div class="top failure">
          <i class="iconfont icon-shitibaocuo"></i>
          <span class="icon-text">常错题库</span>
        </div>
        <div class="bottom star">
          <i class="iconfont icon-qiyeyewu"></i>
          <span class="icon-text">企业题库</span>
        </div>
      </div>
      <div class="middle">
        <van-circle
          v-model="currentRate"
          :rate="rate"
          :speed="speed"
          :color="gradientColor"
          layer-color="#FEEFF1"
        >
          <div class="text">
            <span>顺序刷题</span>
            <span>{{currentQuestion}}/{{total}}</span>
          </div>
        </van-circle>
      </div>
      <div class="right">
        <div class="top balance">
          <i class="iconfont icon-shitishoucang"></i>
          <span class="icon-text">收藏题库</span>
        </div>
        <div class="bottom orders">
          <i class="iconfont icon-bishitiku"></i>
          <span class="icon-text">已答题库</span>
        </div>
      </div>
      </div>
      <!-- 题数 -->
      <div class="question-total">
      <p class="text">累计收录</p>
      <p class="count">{{total}}</p>
      </div>
      <!-- 模拟面试 -->
      <div class="question-interview">
      <van-button color="#00B8D3" :to='`/interview/${active}/${city}`'>
        模拟面试
      </van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { interviewFilters, interviewQuestions } from '@/api/interview'
export default {
  name: 'question',
  data() {
    return {
      active: '',
      city: '',
      currentRate: 0,
      gradientColor: {
        '0%': 'rgba(228,1,55,0.70)',
        '100%': 'rgba(228,1,55,0.30)',
      },
      cityPositions: {},
      citys: [],
      total: 0,
      currentQuestion: 0,
      bol: true,
      flashTime: 1500,
      rate_total: 0,
      rate_curQuestion: 0,
      tabsflag: true
    };
  },
  computed: {
    rate() {
      return (this.rate_curQuestion / this.rate_total) * 100
    },
    speed() {
      return (this.rate / this.flashTime) * 1000
    }
  },
  watch: {
    city(newValue) {
      this.getQuestionCount()
    },
    active(newValue) {
      this.getQuestionCount()
    }
  },
  methods: {
    changeCity(city) {
      this.tabsflag = false
      this.city = city
      this.$refs.dropdownRef.toggle()
      this.$nextTick(() => {
        this.tabsflag = true
      })
    },
    addCount(key, count, time) {
      !count && (this[key] = 0)
      setTimeout(() => {
        if (this[key] < count) {
          this[key]++
          this.addCount(key, count, time)
        }
      }, time);
    },
    async getQuestionCount() {
      this.bol = false
      if (!(this.active && this.city)) return
      const { data } = await interviewQuestions({
        type: this.active,
        city: this.city
      })
      this.total = 0
      this.currentQuestion = 0
      this.rate_total = 0
      this.rate_total = data.length
      const cacheAnswer = JSON.parse(sessionStorage.getItem('answerList')) || []
      this.rate_curQuestion = cacheAnswer.find(i => +i.key.type === this.active && i.key.city === this.city)?.value.length || 0
      this.addCount('currentQuestion',this.rate_curQuestion, this.flashTime / 50)
      this.addCount('total', this.rate_total, this.flashTime / data.length)
      this.bol = true
    }
  },
  async created () {
    this.active = JSON.parse(sessionStorage.getItem('prevCategory'))?.active || ''
    this.city = JSON.parse(sessionStorage.getItem('prevCategory'))?.city || '全国'
    const { data } = await interviewFilters()
    this.cityPositions = data.cityPositions
    let citys = []
    let id = 0
    for (const [key ,val] of Object.entries(data.citys)) {
      citys.push({
        id,
        key,
        children: val
      })
      id++
    }
    this.citys = citys
  },
  destroyed () {
    const prevCategory = {
      active: this.active,
      city: this.city
    }
    sessionStorage.setItem('prevCategory', JSON.stringify(prevCategory))
  },
}
</script>

<style lang="scss" scoped>
.question {
  ::v-deep .van-nav-bar {
    z-index: 999;
    box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.1);
    .van-dropdown-menu__bar {
      background: none;
    }
    .van-ellipsis {
      font-size: 16px;
      font-weight: normal;
    }
    .region {
      font-weight: normal;
      font-size: 12px;
    }
  }

  ::v-deep .question-tabs {
    padding: 0;
    .van-tabs {
      .van-tabs__wrap {
        padding: 20px 0;
      }
      .van-tabs__nav {
        border: none;
        margin: 0;
      }
      .van-tab {
        background-color: #F6F4F5;
        margin: 5px;
        border: none;
        padding: 12px;
        border-radius: 16px;
        span {
          font-size: 12px;
          font-weight: normal;
        }
      }
      .van-tab--active {
        background-color: #00B8D3;
      }
    }
  }

  .question-box {
    background-color: #fff;
    height: 200px;
    display: flex;
    margin: 15px 0;
    .left,
    .right {
      display: flex;
      flex-direction: column;
      flex: 1;
      height: 100%;
      .top,
      .bottom {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;
        .icon-text {
          margin-top: 5px;
          color: #000;
        }
      }
    }
    ::v-deep .middle {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
    }
    .iconfont{
      height: 44px;
      width: 44px;
      line-height: 44px;
      text-align: center;
      color: #fff;
      font-size: 22px;
      border-radius: 50%;
    }
    .icon-shitibaocuo {
      background-color: #FF5353;
    }
    .icon-qiyeyewu {
      background-color: #00CAE0;
    }
    .icon-shitishoucang {
      background-color: #FFBD01;
    }
    .icon-bishitiku {
      background-color: #1EC97D;
    }
  }

  .question-total {
    width: 100%;
    height: 130px;
    text-align: center;
    background-color: #fff;
    .text {
      padding-top: 20px;
      font-size: 16px;
      font-weight: bold;
    }
    .count {
      padding-top: 26px;
      font-size: 30px;
      font-weight: bold;
    }
  }

  ::v-deep .question-interview {
    width: 100%;
    padding: 15px;
    box-sizing: border-box;
    .van-button {
      width: 100%;
      border-radius: 8px;
    }
  }

  ::v-deep .van-circle {
    display: flex;
    justify-content: center;
    align-items: center;
    .text {
      width: 90%;
      height: 90%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: linear-gradient(180deg, #ff6f92, #e40137);
      border-radius: 50%;
      color: #fff;
      box-sizing: border-box;
      span {
        font-size: 12px;
        &:last-child {
          margin-top: 8px;
        }
      }
    }
  }

  ::v-deep .van-index-anchor {
    text-align: left;
    background-color: #F6F4F5;
  }
  ::v-deep .van-cell__title {
    text-align: left;
  }
}
</style>
