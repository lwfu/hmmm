<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar
      title="编辑资料"
      left-arrow
      @click-left="$router.push('/my')"
    ></van-nav-bar>
    <div>
      <!-- 头像区域 -->
      <div @click="$router.push('/photo')" class="avatar-box">
        <p>头像</p>
        <div class="imss">
          <img :src="pic" />
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
        <van-cell title="地区" :value="area" is-link @click="areaShow = true" />
        <van-cell
          title="个人简历"
          @click="resumeShow = true"
          :value="intro"
          is-link
        />
      </van-cell-group>
    </div>
    <div class="exit"><van-button @click="exitLout">退出登录</van-button></div>

    <!-- 修改姓名 -->
    <van-popup v-model="nameShow">
      <h1>修改姓名</h1>
      <van-field v-model="name" />
      <van-button @click="nameShow = false">取消</van-button>
      <van-button @click="xiugai">确认</van-button>
    </van-popup>
    <!-- 修改性别 -->
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
    <!-- 修改地区 -->
    <van-popup v-model="areaShow">
      <h1>修改地区</h1>
      <van-field v-model="area" />
      <van-button @click="areaShow = false">取消</van-button>
      <van-button @click="areaEdit">确认</van-button>
    </van-popup>
    <!-- 修改个人简历 -->
    <van-popup v-model="resumeShow">
      <h1>个人简历</h1>
      <van-field v-model="intro" />
      <van-button @click="resumeShow = false">取消</van-button>
      <van-button @click="resume">确认</van-button>
    </van-popup>
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
      area: this.$store.state.userInfo.area,
      areaShow: false,
      // 修改个人简历
      intro: this.$store.state.userInfo.intro,
      resumeShow: false,
      pic: this.userInfo ? `http://hmmm.zllhyy.cn${this.userInfo.avatar}` : "",
    };
  },
  computed: {
    ...mapState(["userInfo", "photo"]),
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
    // 修改地区
    async areaEdit() {
      if (this.area === "" || this.area === this.userInfo.area) {
        this.$toast.fail("请修改后再提交");
        return;
      }
      await auEdit({
        area: this.area,
      });
      this.$toast.success("修改成功");
      // 关闭弹窗
      this.areaShow = false;
      // 刷新用户信息
      this.$store.commit("SET_USERINFO", {
        ...this.userInfo,
        area: this.area,
      });
    },
    // 修改个人简历
    async resume() {
      if (this.intro === "" || this.intro === this.userInfo.intro) {
        this.$toast.fail("请修改后再提交");
        return;
      }
      await auEdit({
        intro: this.intro,
      });
      this.$toast.success("修改成功");
      // 关闭弹窗
      this.resumeShow = false;
      // 刷新用户信息
      this.$store.commit("SET_USERINFO", {
        ...this.userInfo,
        intro: this.intro,
      });
    },

    // 退出登录
    exitLout() {
      console.log(1);
      this.$store.commit("LOGOUT");
      this.$toast.success("退出登录");
    },
  },
  created() {
    this.pic = this.$store.getters.photo;
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
  .imss img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
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
