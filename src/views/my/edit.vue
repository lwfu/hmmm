<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar
      title="编辑资料"
      left-arrow
      @click-left="$router.push('/my')"
    />
    <div>
      <!-- 头像区域 -->
      <div class="avatar-box">
        <p>头像</p>
        <div class="imss">
          <van-image src="https://img01.yzcdn.cn/vant/cat.jpeg" />
        </div>
      </div>

      <!-- 资料区域 -->
      <van-cell-group>
        <van-cell @click="nameShow = true" title="名称" :value="name" is-link />
        <van-cell
          title="性别"
          :value="userInfo.gender === 0 ? '女' : '男'"
          is-link
          @click="genderShow = true"
        />
        <van-cell title="地区" value="上海" is-link />
        <van-cell title="个人简历" value="11" is-link />
      </van-cell-group>
    </div>
    <div class="exit"><van-button>退出登录</van-button></div>

    <!-- 修改姓名 -->
    <van-popup v-model="nameShow">
      <h1>修改姓名</h1>
      <van-field v-model="name" />
      <van-button @click="nameShow = false">取消</van-button>
      <van-button @click="xiugai">确认</van-button>
    </van-popup>
    <!-- 修改性别 -->
    
    <!-- 性别 修改的布局 -->
    <!-- position="bottom" 底部弹出 -->
    <div class="popupShow">
      <van-popup v-model="genderShow" position="bottom">
        <van-nav-bar
          title="修改性别"
          left-text="取消"
          @click-left="genderShow = false"
        ></van-nav-bar>
        <van-cell title="男" @click="genderSubmit(1)"></van-cell>
        <van-cell title="女" @click="genderSubmit(0)"></van-cell>
      </van-popup>
    </div>

   <div>
    <van-dropdown-menu>
      <van-dropdown-item>
     <van-index-bar :index-list="indexList">
  <van-index-anchor index="1">标题1</van-index-anchor>
  <van-cell title="文本" />
  <van-cell title="文本" />
  <van-cell title="文本" />

  <van-index-anchor index="2">标题2</van-index-anchor>
  <van-cell title="文本" />
       <van-cell title="文本" />
     <van-cell title="文本" />

     </van-index-bar>
      </van-dropdown-item>
    </vdropdown-menu>
   </div>
  </div>
</template>

<script>
import { auEdit } from "../../api/user";
import { mapState } from "vuex";
export default {
  data() {
    return {
      // 修改姓名
      nameShow: false,
      name: this.$store.state.userInfo.nickname,
      // 修改性别
      genderShow: false,
      // 修改地区
      indexList: [],
    };
  },
  computed: {
    ...mapState(["userInfo"]),
  },
  methods: {
    // 修改姓名
    async xiugai() {
      if (this.name === "" || this.name === this.userInfo.nickname) {
        this.$toast.fail("请修改后再提交");
        return;
      }
      await auEdit({
        nickname: this.name,
      });
      this.$toast.success("修改成功");
      // 关闭弹窗
      this.nameShow = false;
      // 刷新用户信息
      this.$store.commit("SET_USERINFO", {
        ...this.userInfo,
        name: this.name,
      });
    },
    // 修改性别
    async genderSubmit(gender) {
      if (this.userInfo.gender === gender) {
        this.$toast.fail("请修改后再提交");
        return;
      }
      await auEdit({
        gender: gender,
      });
      // 刷新用户信息
      this.$store.commit("SET_USERINFO", {
        ...this.userInfo,
        gender: gender,
      });
      this.$toast.success("修改成功");
      // 关闭弹窗
      this.genderShow = false;
    },
  },
};
</script>

<style scoped lang="scss">
.avatar-box {
  display: flex;
  justify-content: space-between;
  height: 60px;
  margin: 0 15px;
  line-height: 60px;
  .van-image {
    width: 60px;
    height: 60px;
  }
}
.exit .van-button {
  background-color: aqua;
  width: 90%;
  margin-left: 5%;
}
.van-popup {
  width: 80%;
  .van-button {
    width: 50%;
    background-color: rgb(62, 107, 230);
  }
  h1 {
    text-align: center;
    line-height: 2.5em;
  }
}
.popupShow .van-popup {
  width: 100%;
}
</style>