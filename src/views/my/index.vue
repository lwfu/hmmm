<template>
  <div class="avatar-box">
    <!-- 头像区域 -->
    <div class="user">
      <div class="text">
        <h1>{{ userInfo.nickname }}</h1>
        <p>{{ userInfo.intro }}</p>
      </div>
      <div class="img">
        <img @click="goEdit" :src="userInfo.avatar" alt="" />
      </div>
    </div>
    x
    <!-- 累计答题 -->
    <div class="text-box">
      <div class="text-box1">
        <h1>332</h1>
        <p>累计答题</p>
      </div>
      <div class="text-box1">
        <h1>16</h1>
        <p>收藏题目</p>
      </div>
      <div class="text-box1">
        <h1>69</h1>
        <p>我的错题</p>
      </div>
      <div class="text-box1">
        <h1>31%</h1>
        <p>正确率</p>
      </div>
    </div>
    <!-- 我的岗位 -->
    <div class="button">
      <van-cell icon="like-o" title="我的面经分享" is-link></van-cell>
    </div>
    <!-- 面经数据 -->
    <div class="numm">
      <h1>面经数据</h1>
    </div>
    <!-- 面经数据  -->
    <div class="interview">
      <div class="interview1">
        <p>昨日阅读+5</p>
        <h1>20</h1>
        <p>阅读总数</p>
      </div>
      <div class="interview1">
        <p>昨日获赞+0</p>
        <h1>13</h1>
        <p>获赞总数</p>
      </div>
      <div class="interview1">
        <p>昨日新增+1</p>
        <h1>5</h1>
        <p>评论总数</p>
      </div>
    </div>
    <!-- 设置区域 -->
    <div class="edit">
      <van-cell-group>
        <van-cell icon="smile" title="我的面经分享" is-link></van-cell>
        <van-cell icon="volume" title="我的消息" is-link></van-cell>
        <van-cell icon="newspaper-o" title="收藏的题库" is-link></van-cell>
        <van-cell icon="notes-o" title="收藏的企业" is-link></van-cell>
        <van-cell icon="user-circle-o" title="我的错题" is-link></van-cell>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import {} from "../../api/questions";
export default {
  data() {
    return {
      // userInfo: "",
    };
  },
  computed: {
    ...mapGetters(["userInfo"]),
  },
  created() {
    // this.getData();
  },
  methods: {
    goEdit() {
      this.$router.push("/edit");
    },
  },
};
</script>

<style lang="scss" scoped>
.avatar-box {
  width: 100%;
  height: 200px;
  background-color: hotpink;
  .user {
    display: flex;
    justify-content: space-between;
    padding: 20px 10px;
  }
}
.avatar-box .text > h1 {
  font-size: 30px;
  color: #fff;
}
.avatar-box .text > p {
  color: #ccc;
}
.img {
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
}
.text-box {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  color: #fff;
  .text-box1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
.button .van-cell {
  width: 85%;
  height: 50px;
  margin: auto;
  margin-top: 14px;
  border-bottom: 1px solid #ccc;
  border-radius: 15px;
}
.interview {
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  color: #999999;
  .interview1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
.numm {
  margin-top: 20px;
  margin-left: 20px;
  h1 {
    font-size: 20px;
    color: brown;
  }
}
.edit {
  margin-top: 20px;
}
</style>
