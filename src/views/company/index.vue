<template>
  <div class="company">
    <div class="search">
      <van-search v-model="value" placeholder="请输入搜索关键词">
        <template #left>
          <div class="gs"><strong>公司</strong></div>
        </template>
      </van-search>
    </div>
    <div class="img">
      <img style="width:100%" src="./image/tupian.png" alt="" />
    </div>
    <screen ref="screenRef"/>
  </div>
</template>

<script>
import screen from './compoents/screen.vue'
export default {
  name: 'company',
  components: {
    screen
  },
  data () {
    return {
      value: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.company {
  .search {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;

    .gs {
      margin: 0 20px 0 0;
      font-size: 20px;
    }
    .van-search__content {
      border-radius: 15px;
    }
  }
  .img {
    padding: 0 10px;
    margin-top: 55px;
  }
}
</style>
