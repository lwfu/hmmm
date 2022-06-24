<template>
  <div class="search">
    <van-nav-bar
      title="面试技巧搜索"
      fixed
      placeholder
      left-arrow
      @click-left="$router.go(-1)"
    />
    <van-field
      v-model="sms"
      center
      clearable
      left-icon="search"
      placeholder="请输入关键词"
    >
      <template #button>
        <van-button size="small" type="default" @click="handleCancel">取消</van-button>
      </template>
    </van-field>
    <div class="mian">
      <div class="dajia">
        <h2>大家在搜索</h2>
        <span v-for="(item, index) in searchArr" :key="index">{{ item }}</span>
      </div>
      <div class="history">
        <span>历史记录</span>
        <span>清除</span>
      </div>
    </div>
  </div>
</template>

<script>
import { articlesTechnicTopSearch } from '@/api/articles'
export default {
  name: 'TechnicSearch',
  data () {
    return {
      sms: '',
      searchArr: []
    }
  },
  methods: {
    async load () {
      const res = await articlesTechnicTopSearch()
      this.searchArr = res.data
    },
    handleCancel () {
      this.sms = ''
    }
  },
  created () {
    this.load()
  }
}
</script>

<style lang="scss" scoped>
.search {
  ::v-deep .van-field__control {
    padding-left: 10px;
    background-color: rgba(233, 233, 233, 0.5);
    height: 32px;
    border-radius: 50px;
  }
  .mian {
    padding: 10px 16px;
    .dajia {
      margin-bottom: 20px;
      h2 {
        margin-bottom: 16px;
        font-size: 18px;
      }
      span {
        padding: 6px;
        background-color: rgba(233, 233, 233, 0.5);
        margin-right: 10px;
      }
    }
    .history {
      display: flex;
      justify-content: space-between;
      span {
        &:nth-child(1) {
          font-weight: 700;
          font-size: 18px;
        }
      }
    }
  }
}
</style>
