<template>
  <div class="login-view">
    <div class="container">
      <h3>短信登录</h3>
      <van-form @submit="onSubmit" :show-error="false" ref="form">
        <van-field
          v-model="userInfo.mobile"
          name="mobile"
          placeholder="请输入手机号"
          ref="mobile"
          :rules="rules.mobileRule"
        />
        <van-field
          v-model="userInfo.code"
          type="password"
          name="code"
          placeholder="请输入验证码"
          :rules="rules.codeRule"
        >
          <template #button>
            <van-button size="small" native-type="button" @click="getCode" :disabled="codeBtnDisable">{{ codeBtnContent }}</van-button>
          </template>
        </van-field>
        <div>
          <van-button block color="linear-gradient(90deg,#fe4f4f,#fc6627)" native-type="submit" :loading="isLoading">登录</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
// 导入封装好的接口
import { auCode } from '@/api/user.js'
export default {
  data () {
    return {
      // 用户表单信息
      userInfo: {
        mobile: '18888888888',
        code: '2468'
      },
      // 发送验证码按钮状态
      codeBtnDisable: false,
      // 发送验证码按钮文字
      codeBtnContent: '发送验证码',
      // 表单验证规则
      rules: {
        mobileRule: [
          {
            required: true,
            pattern: /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,
            message: '手机号格式错误'
          }
        ],
        codeRule: [
          {
            required: true,
            pattern: /^\d{4}$/,
            message: '验证码格式错误'
          }
        ]
      },
      isLoading: false
    }
  },
  methods: {
    // 表单验证通过才会执行的函数
    async onSubmit (formData) {
      this.isLoading = true
      try {
        await this.$store.dispatch('getUserInfo', formData)
        // 获取强制登录跳转之前的路由地址
        const { redirect } = this.$route.query
        this.$router.replace(redirect || '/')
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
      }
    },
    // 发送验证码按钮点击事件
    async getCode () {
      // 判断手机号是否合法
      this.$refs.form.validateField('mobile').then(async () => {
        // 发送请求获取验证码
        this.setCodeBtnDisable(5)
        const { data: code } = await auCode({
          mobile: this.userInfo.mobile
        })
        this.userInfo.code = code
        this.$toast.success('获取验证码成功：' + code)
      })
    },
    // 封装设置发送验证码按钮状态函数
    setCodeBtnDisable (second) {
      // 设置发送验证码按钮禁用状态
      this.codeBtnDisable = true
      this.codeBtnContent = `${second}s后获取`
      // 实现发送验证码按钮倒计时效果
      const timeId = setInterval(() => {
        this.codeBtnContent = `${--second}s后获取`
        if (!second) {
          clearInterval(timeId)
          this.codeBtnDisable = false
          this.codeBtnContent = '发送验证码'
        }
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
.van-nav-bar {
  ::v-deep.van-icon {
    color: #999;
  }
}
.container {
  padding: 0 32px;
  h3 {
    padding: 30px 0;
    font-size: 30px;
    font-weight: normal;
  }
  .van-button {
    border: none;
    &[type="submit"] {
      margin: 16px 0;
    }
  }
}
</style>
