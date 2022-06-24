<template>
  <div v-if="technic.id" class="technic">
    <van-nav-bar
      fixed
      placeholder
      left-arrow
      @click-left="$route.meta.fromPath === '/findlist' ? $router.push('/findlist') : $router.push('/find')" 
    />
    <div class="content">
      <header>
        <h2>{{ technic.title }}</h2>
      </header>
      <div class="time">
        <span>{{ technic.updated_at | formatTime }}</span>
        <div class="info">
          <span><van-icon name="eye-o" />{{ technic.read }}</span>
          <span><van-icon name="good-job-o" />{{ technic.star }}</span>
        </div>
      </div>
      <div v-html="technic.content"></div>
    </div>
  </div>
</template>

<script>
import { articlesTechnicDetail } from '@/api/articles'
export default {
  name: 'Technic',
  data () {
    return {
      technic: {}
    }
  },
  async created () {
    const res = await articlesTechnicDetail(this.$route.params.id)
    this.technic = res.data
  }
}
</script>

<style lang="scss" scoped>
.technic {
  .content {
    padding: 10px;
    header {
      h2 {
        font-size: 22px;
      }
      margin-bottom: 16px;
    }
    .time {
      display: flex;
      justify-content: space-between;
      margin-bottom: 14px;
      .info {
        span {
          margin-left: 16px;
        }
      }
    }
  }
}
</style>
