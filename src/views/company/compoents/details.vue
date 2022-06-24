<template>
  <div v-if="list && weals.length" class="details">
    <div class="topbox">
      <div class="Return">
        <van-icon
          name="down"
          size="20"
          color="#fbfbfb"
          @click="$router.push('/company')"
        />
      </div>
      <h2>{{ list.name }}</h2>
      <div class="img">
        <img
          :src="'http://hmmm.zllhyy.cn/' + list.logo"
          alt=""
          style="width:100%;"
        />
      </div>
      <div class="introduce">
        <div class="Intop">
          <span>{{ list.type }}</span>
          <span>{{ list.step }}</span>
          <span>{{ list.scale }}</span>
        </div>
        <div class="Inbottom">
          <span><van-icon name="underway-o" />{{ list.workTime }}</span>
          <span><van-icon name="tosend" />{{ list.restDay }}</span>
          <span><van-icon name="balance-o" />{{ list.overtime }}</span>
        </div>
      </div>
      <div class="Weals">
        <ul>
          <li v-for="item in weals" :key="item.id">
            <van-icon name="point-gift" />{{ item.text }}
          </li>
        </ul>
      </div>
    </div>
    <div class="business">
      <div class="butitle">工商信息</div>
      <div class="bumessage">
        <div>
          <span>公司全称</span><span>{{ list.fullname }}</span>
        </div>
        <div>
          <span>成立时间</span><span>{{ list.establishedTime }}</span>
        </div>
        <div>
          <span>注册资本</span><span>{{ list.capital }}</span>
        </div>
        <div>
          <span>法人代表</span><span>{{ list.legalPerson }}</span>
        </div>
        <div>
          <span>信息来源</span><span>{{ list.messageSource }}</span>
        </div>
      </div>
    </div>
    <comments />
    <div class="bottombox">
      <div>
        在招岗位<span>{{ list.positions }}</span>
      </div>
      <div>
        企业面试题<span>{{ list.questions }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { companyDetail } from '@/api/companies'
import comments from './comments.vue'
export default {
  name: 'Details',
  components: {
    comments
  },
  data () {
    return {
      id: this.$route.query.id,
      list: {},
      weals: []
    }
  },

  async created () {
    let res = await companyDetail(this.id)
    this.list = res.data
    this.weals = res.data.weals
  }
}
</script>

<style lang="scss" scoped>
.details {
  .topbox {
    position: relative;
    width: 100%;
    background: url('../image/xingzuo_xingzhuang .jpg') no-repeat center / cover;
    overflow: hidden;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
    .Return {
      width: 15px;
      margin: 5px 0 40px 10px;
      transform: rotate(90deg);
    }
    h2 {
      color: #f8f8fb;
      margin-left: 10px;
    }
    .img {
      position: absolute;
      top: 20px;
      right: 10px;
      width: 50px;
      height: 50px;
      img {
        border-radius: 5px;
      }
    }
    .introduce {
      .Intop {
        margin: 10px 0;
        span {
          padding: 1px;
          font-size: 4px;
          color: #a4a8af;
          border: 1px solid #a4a8af;
          border-radius: 3px;
          margin: 0 2px 0 10px;
        }
      }
      .Inbottom {
        margin: 0 0 10px 10px;

        span {
          color: #d9e4da;
          margin-right: 3px;
          font-size: 2px;
          .van-icon {
            color: #d8e6d7;
            font-size: 2px;
          }
        }
      }
    }
  }
  .Weals {
    ul {
      margin: 0 10px;
      display: flex;
      overflow-y: hidden;
      flex-wrap: nowrap;
      &::-webkit-scrollbar {
        display: none;
      }
      li {
        color: #c4c4cc;
        font-size: 16px;
        padding: 10px;
        border: 1px solid #aeb0b9;
        border-radius: 3px;
        margin: 0 10px 10px 0;
        white-space: nowrap;
        &:last-child {
          margin-right: 0;
        }
        .van-icon {
          color: #c4c4cc;
        }
      }
    }
  }
  .business {
    padding: 20px 0 0 10px;
    margin-top: 210px;
    .butitle {
      margin-bottom: 10px;
      font-weight: 500;
    }
    .bumessage {
      width: 100%;
      div {
        margin-bottom: 10px;
        & span:nth-child(1) {
          color: #cfc7cf;
          margin-right: 20px;
        }
      }
    }
  }
  .bottombox {
    width: 100%;
    height: 100px;
    background-color: #fcfcfc;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 1;
    display: flex;
    justify-content: space-around;
    padding-top: 10px;
    box-sizing: border-box;
    div {
      width: 150px;
      height: 40px;
      text-align: center;
      border: 0.5px solid #000;
      border-radius: 10px;
      line-height: 40px;
      position: relative;
      &:first-child span {
        position: absolute;
        font-size: 10px;
        top: -8px;
        right: 30px;
      }
      &:last-child span {
        position: absolute;
        font-size: 10px;
        top: -8px;
        right: 20px;
      }
    }
  }
}
</style>
