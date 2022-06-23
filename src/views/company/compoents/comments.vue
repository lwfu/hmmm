<template>
  <div class="comments">
    <div class="cotitle">
      <span>面试评价</span>
      <span>写评论</span>
    </div>
    <div class="score">
      <div class="leftbox">
        <div><span>4.8</span>分</div>
        <div>
          <van-rate
            v-model="value"
            :size="14"
            color="#ffd21e"
            void-icon="star"
            void-color="#eee"
            readonly
          />
        </div>
      </div>
      <div class="rightbox">
        <div>
          <span>岗位描述</span>
          <span>
            <van-rate
              v-model="value"
              :size="14"
              color="#ffd21e"
              void-icon="star"
              void-color="#eee"
              readonly
            />
          </span>
        </div>
        <div>
          <span>面试情况</span>
          <span>
            <van-rate
              v-model="value"
              :size="14"
              color="#ffd21e"
              void-icon="star"
              void-color="#eee"
              readonly
            />
          </span>
        </div>
        <div>
          <span>面试官</span>
          <span>
            <van-rate
              v-model="value"
              :size="14"
              color="#ffd21e"
              void-icon="star"
              void-color="#eee"
              readonly
            />
          </span>
        </div>
      </div>
    </div>
    <div class="Comment">
      <div class="Combox">
        <div class="portrait">
          <div class="img">
            <img src="https://img01.yzcdn.cn/vant/cat.jpeg" alt="" />
          </div>
        </div>
        <div class="rightbox">
          <div class="name">haha</div>
          <div class="job">面试岗位:Android开发工程师</div>
          <div class="evaluate">
            <span>面试官很nice</span><span>面试效率高</span>
          </div>
          <div class="Content">这是一条测试评论</div>
          <div class="time">2020.07.04</div>
          <div class="star">
            <van-rate
              v-model="value"
              :size="14"
              color="#ffd21e"
              void-icon="star"
              void-color="#eee"
              readonly
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'comments',
  data () {
    return {
      value: 3
    }
  }
}
</script>

<style lang="scss" scoped>
.comments {
  margin-top: 20px;
  margin-bottom: 120px;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  .cotitle {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
  }
  .score {
    width: 100%;
    background-color: #f7f7f7;
    display: flex;
    padding: 30px;
    box-sizing: border-box;
    border-radius: 5px;
    margin-top: 10px;
    .leftbox {
      display: flex;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      &:first-child div {
        span {
          font-size: 24px;
          color: #00b8d4;
        }
      }
    }
    .rightbox {
      flex: 1;
      padding-left: 20px;
      box-sizing: border-box;
      border-left: 1px solid #edebeb;
      margin-left: 10px;
      & div {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
    }
  }
  .Comment {
    margin-top: 20px;
    .Combox {
      width: 100%;
      display: flex;
      .portrait {
        margin-right: 5px;
        .img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-color: pink;
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
          }
        }
      }
    }
    .rightbox {
      position: relative;
      flex: 1;
      .name {
        font-size: 8px;
        font-weight: 700;
      }
      .job {
        font-size: 8px;
        color: #b4b4bd;
        margin: 5px 0;
      }
      .evaluate {
        span {
          padding: 1px;
          background-color: #f7f4f5;
          color: #b6b4bd;
          margin-right: 5px;
          font-size: 8px;
        }
      }
      .Content {
        margin: 10px 0;
        font-size: 12px;
      }
      .time {
        color: #b4b4bd;
        font-size: 8px;
      }
      .star {
        position: absolute;
        right: 0;
        top: 15px;
      }
    }
  }
}
</style>
