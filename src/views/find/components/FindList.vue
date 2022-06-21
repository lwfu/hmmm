<template>
  <div class="find-list">
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
    />
  </div>
</template>

<script>
export default {
  name: 'FindList',
  data () {
    return {
      value: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.find-list {
  padding: 0 16px;
  position: relative;
  ::v-deep .van-icon-search {
    color: #ccc;
    position: absolute;
    top: 50%;
    left: 28%;
    transform: translate(-50%, -50%);
  }
}
</style>
