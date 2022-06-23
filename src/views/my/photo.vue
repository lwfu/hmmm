<template>
  <div>
    <van-nav-bar
      left-text="返回"
      right-text="保存"
      left-arrow
      right-arrow
      title="修改头像"
      @click-left="$router.push('/edit')"
      @click-right="editPhoto"
    ></van-nav-bar>

    <van-uploader
      :after-read="afterRead"
      :before-read="beforeRead"
      preview-size="200px"
      v-model="files"
      :max-count="1"
      preview-image
    >
    </van-uploader>
  </div>
</template>

<script>
import { upLoad, auEdit } from "../../api/user";
import { mapState } from "vuex";
export default {
  data() {
    return {
      files: [],
      pic: "",
    };
  },
  computed: {
    ...mapState(["photo"]),
  },

  methods: {
    // 上传前
    beforeRead(file) {
      const limitType = file.type === "image/jpeg" || file.type === "image/png";
      const limitSize = file.size / 1024 / 1024 < 10;
      if (limitSize && limitType) {
        return limitType && limitSize;
      } else {
        this.$toast.fail("请上传1Mb内的jpeg与png图片");
      }
    },
    // 读取上传
    afterRead(file) {
      // console.log(file);
      this.pic = file.file;
    },
    // 保存
    async editPhoto() {
      const res = await upLoad(this.pic);
      this.files = [{ url: "http://hmmm.zllhyy.cn" + res.data[0].url }];
      const { data } = await auEdit({
        avatar: res.data[0].id,
      });
      this.$store.commit("SET_USERINFO", data);
      this.$toast.success("修改成功");
      this.$store.commit("SET_PHOTO", this.files[0].url);
    },
  },
  created() {
    this.files.push({ url: "http://hmmm.zllhyy.cn" + this.$store.getters.userInfo.avatar });
  },
};
</script>

<style lang="scss" scoped>
.van-uploader {
  display: flex;
  justify-content: center;
}
</style>
