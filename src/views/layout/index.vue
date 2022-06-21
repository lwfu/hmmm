<template>
  <div>
    <router-view />
    <van-tabbar route>
      <van-tabbar-item to="/company" icon="home-o">公司</van-tabbar-item>
      <van-tabbar-item to="/question" icon="search">刷题</van-tabbar-item>
      <van-tabbar-item to="/find" icon="friends-o">发现</van-tabbar-item>
      <van-tabbar-item to="/my" icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<style>
</style>
