<template>
  <div>
    <router-view />
    <van-tabbar route>
      <van-tabbar-item to="/register" icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item to="/forgot" icon="search">标签</van-tabbar-item>
      <van-tabbar-item to="/reset" icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item to="/dashboard" icon="setting-o">标签</van-tabbar-item>
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
