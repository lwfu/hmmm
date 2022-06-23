<template>
  <div class="share-list">
    <van-nav-bar
      title="面试技巧"
      fixed
      placeholder
      left-arrow
      @click-left="$router.go(-1)"
    />
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      input-align="center"
      shape="round"
      @click="$router.push({ name: 'sharesearch' })"
    />
    <div class="border"></div>
    <ShareArticle></ShareArticle>
  </div>
</template>

<script>
import ShareArticle from './ShareArticle.vue'

export default {
  name: 'ShareList',
  components: { ShareArticle },
  data () {
    return {
      value: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.share-list {
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
