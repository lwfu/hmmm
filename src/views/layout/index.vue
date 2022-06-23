<template>
  <div>
    <router-view />
<<<<<<< HEAD
    <van-tabbar route v-if="!$route.meta.needShow">
      <van-tabbar-item to="/company" icon="home-o">公司</van-tabbar-item>
      <van-tabbar-item to="/question" icon="search">刷题</van-tabbar-item>
      <van-tabbar-item to="/find" icon="friends-o">发现</van-tabbar-item>
      <van-tabbar-item to="/my" icon="setting-o">我的</van-tabbar-item>
=======
    <van-tabbar route active-color="red">
      <van-tabbar-item to="/company" >
        公司
        <template #icon>
          <i class="iconfont icon-qiye-mianxing"></i>
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/question" icon="search">
        刷题
        <template #icon>
          <i class="iconfont icon-register"></i>
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/find" icon="friends-o">
        发现
        <template #icon>
          <i class="iconfont icon-compass-full"></i>
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/my" icon="setting-o">
        我的
        <template #icon>
          <i class="iconfont icon-gerenzhongxin-m"></i>
        </template>
      </van-tabbar-item>
>>>>>>> lwf
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {}
}
</script>

<style></style>
