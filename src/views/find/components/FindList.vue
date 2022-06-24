<template>
  <div class="find-list">
    <van-nav-bar
      title="面试技巧"
      fixed
      placeholder
      left-arrow
      @click-left="$router.push('/find')"
    />
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      input-align="center"
      shape="round"
    />
    <div class="border"></div>
    <Article></Article>
  </div>
</template>

<script>
import Article from './Article.vue'
export default {
  name: 'FindList',
  components: { Article },
  data () {
    return {
      value: ''
    }
  },
  methods: {
    handleMore () {
      this.$refs.more.classList.toggle('active')
    }
  }
}
</script>

<style lang="scss" scoped>
.find-list {
  position: relative;
  .border {
    height: 3px;
    background: rgb(237, 237, 237);
  }
  ::v-deep .van-icon-search {
    color: #ccc;
    position: absolute;
    top: 50%;
    left: 28%;
    transform: translate(-50%, -50%);
  }
}
</style>
