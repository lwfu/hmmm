<template>
  <div>
    <div class="search">
      <div class="search-box">公司</div>
      <van-search></van-search>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  justify-content: space-around;
  .van-search {
    width: 80%;
  }
}
// .san {
//   /* 当盒子宽高为0时，边框可以挤出三角形 */
//   width: 0px;
//   height: 0px;
//   border: 40px solid red;
//   /* 边框透明，设置对应方向颜色可看到三角形 */
//   border: 10px solid transparent;
//   border-left-color: red;

//   position: absolute;
//   top: 30px;
//   left: 100px;
//   // transform: translate(-90%);
//   transform: rotate(90deg);
// }
</style>
