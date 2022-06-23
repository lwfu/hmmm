<template>
  <div>
    <router-view />
    <van-tabbar route v-if="!$route.meta.noTabbar" active-color="red">
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
    </van-tabbar>
  </div>
</template>

<style></style>
