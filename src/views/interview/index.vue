<template>
  <div class="interview" v-if="curQuestion">
    <!-- navBar -->
    <van-nav-bar
      right-text="答题卡"
      left-arrow
      fixed
      placeholder
      @click-right="answerSheetVisible = true"
      @click-left="goBack"
    >
      <template #title>
        <span>面试题</span><span class="count">{{allQuestion.length}}</span>
      </template>
    </van-nav-bar>
    <!-- 问题区 -->
    <div class="interview-main">
      <!-- 问题头部 -->
      <div class="question_item">
        <div class="question_title">
          {{ curQuestion.detail.type | enumType }}{{ curQuestion.detail.title }}
        </div>
        <van-tag
          class="question_tag"
          v-for="item in curQuestion.detail.tag"
          :key="item"
          size="large"
        >
          {{ item }}
        </van-tag>
        <!-- 多选、单选 -->
        <div
          class="question_option"
          :class="[
            {
              correctClass: findCorrectAnswer && findCorrectAnswer.includes(optionKeys[index]),
              errorClass: findAnswerList && !findAnswerList.analysis.isRight && (singleAnswer === optionKeys[index] || multipleAnswer.filter(i => !findCorrectAnswer.includes(i)).includes(optionKeys[index])),
              active: findAnswerList && (singleAnswer === optionKeys[index] || multipleAnswer.filter(i => !findCorrectAnswer.includes(i)).includes(optionKeys[index]))
            },
            optionKeys[index]
          ]"
          v-for="(item, index) in curQuestion.detail.option"
          :key="index"
          @click="chose($event, optionKeys[index])"
        >
          {{optionKeys[index]}}.{{ item }}
        </div>
        <!-- 简答 -->
        <div v-if="!curQuestion.detail.option">
          <van-field
            v-model="messageAnswer"
            rows="2"
            autosize
            type="textarea"
            placeholder="请输入你的答案"
            :disabled="messageDisable"
          />
        </div>
        <!-- 答案解析 -->
        <div v-if="findAnswerList" class="question-analysis">
          <h4>答案解析</h4>
          <div v-if="curQuestion.detail.type !== 3">
            <p>
              正确答案：{{[...findCorrectAnswer].join(',')}}
            </p>
            <p :class="{ yourErrorAnswerStyle: !findAnswerList.analysis.isRight }">
              你的答案：{{[...yourChose].join(',')}}
            </p>
          </div>
          <div class="analysis-tag">
            <span>难度：{{findAnswerList.analysis.difficulty | enumDifficulty}}</span><span>提交次数：{{findAnswerList.analysis.submitNum}}</span><span>正确次数：{{findAnswerList.analysis.correctNum}}</span>
          </div>
          <div class="analysis-text">
            {{findAnswerList.analysis.answerAnalysis}}
          </div>
        </div>
      </div>
    </div>
    <!-- tabBar -->
    <div class="interview-tabbar">
      <div class="interview-tabbar-icon">
        <div class="star">
          <van-icon name="star-o" />
          <span>收藏</span>
        </div>
        <div class="edit">
          <van-icon name="edit" />
          <span>反馈</span>
        </div>
      </div>
      <div class="interview-tabbar-count">
        <span class="current">{{curKey + 1}}</span><span class="total">/{{allQuestion.length}}题</span>
      </div>
      <div class="interview-tabbar-button">
        <van-button
          v-if="!isSubmit"
          type="danger"
          @click="submitQuestion"
          :disabled="!isChose"
        >
          提 交
        </van-button>
        <van-button v-else type="info" @click="getNextQuestion">下一题</van-button>
      </div>
    </div>
    <!-- 答题卡 -->
    <van-popup v-model="answerSheetVisible" position="bottom" :style="{ height: '60%' }" class="answer-sheet">
      <van-nav-bar title="答题卡">
        <template #right>
          <span class="current">{{curKey + 1}}</span><span>/{{allQuestion.length}}题</span>
        </template>
      </van-nav-bar>
      <div class="total">
        共{{allQuestion.length}}题
      </div>
      <ul class="list">
        <li
          v-for="(item, index) in allQuestion.length"
          :key="item"
          :class="{
            current: index === curKey,
            correct: answerList.find(i => i.curKey === index) && answerList.find(i => i.curKey === index).analysis.isRight,
            error: answerList.find(i => i.curKey === index) && !answerList.find(i => i.curKey === index).analysis.isRight
          }"
          @click="getQuestionsDetails(index)"
        >
          {{item}}
        </li>
      </ul>
    </van-popup>
  </div>
</template>

<script>
import { interviewQuestions } from '@/api/interview'
import { questionsSubmit, questionsDetails } from '@/api/questions'
export default {
  data() {
    return {
      // 问题种类、地区
      questionParams: {
        type: this.$route.params.questionId || '',
        city: this.$route.params.city || ''
      },
      // 答题卡显示状态
      answerSheetVisible: false,
      // 所有题库
      allQuestion: [],
      // 已答过的题库
      answerList: [],
      // 当前题库的键
      curKey: 0,
      // 选择的单选答案
      singleAnswer: '',
      // 选择的多选答案
      multipleAnswer: [],
      // 简答的答案
      messageAnswer: '',
      // 选择题的Key
      optionKeys: ['A', 'B', 'C', 'D'],
      // 判断是否选择过
      isChose: null,
      // 判断是否提交过
      isSubmit: null,
      // 简答框状态
      messageDisable: false
    }
  },
  computed: {
    // 当前问题
    curQuestion() {
      return this.allQuestion[this.curKey]
    },
    // 判断是否当前问题是否有回答过
    findAnswerList() {
      return this.answerList.find(i => i.id === this.curQuestion?.id)
    },
    // 获取已回答过对象的答案
    findCorrectAnswer() {
      return this.findAnswerList?.analysis.singleAnswer || this.findAnswerList?.analysis.multipleAnswer
    },
    // 你的选择
    yourChose() {
      return this.singleAnswer || this.multipleAnswer
    },
  },
  filters: {
    // 枚举问题难度
    enumDifficulty: function(value) {
      switch (value) {
        case '1':
          return '简单'
        case '2':
          return '一般'
        case '3':
          return '困难'
      }
    },
    // 枚举问题类型
    enumType: function(value) {
      switch (value) {
        case 1:
          return '『单选』'
        case 2:
          return '『多选』'
        case 3:
          return '『简答』'
      }
    }
  },
  watch: {
    // 侦听判断提交按钮的disable状态
    yourChose: {
      handler(newVal) {
        this.isChose = !!newVal.length
      },
      immediate: true
    },
    // 侦听判断是否提交过来显示下一题按钮
    'findAnswerList.isSubmit': {
      handler(newVal) {
        this.isSubmit = newVal
        this.messageDisable = true
      }
    },
    // 侦听判断当当前问题变换时判断是否此问题是否答过来控制页面状态
    curQuestion: {
      handler(newVal) {
        // 如果没答过，复原所有数据
        if (!this.findAnswerList) {
          this.isChose = null
          this.isSubmit = null
          this.messageDisable = false
          this.singleAnswer = ''
          this.messageAnswer = ''
          this.multipleAnswer = []
          document.querySelector('.active')?.classList.remove('active')
        } else {  // 回答过将findAnswerList内的状态提取出来
          this.isChose = true
          this.isSubmit = true
          if (this.findAnswerList.question.detail.type === 2) {
            this.multipleAnswer = this.findAnswerList.yourAnswer
            this.singleAnswer = ''
            this.messageAnswer = ''
          } else if (this.findAnswerList.question.detail.type === 1) {
            this.singleAnswer = this.findAnswerList.yourAnswer
            this.multipleAnswer = []
            this.messageAnswer = ''
          } else {
            this.messageAnswer = this.findAnswerList.yourAnswer
            this.singleAnswer = ''
            this.multipleAnswer = []
          }
        }
      }
    },
    // 侦听判断简答框是否有数据来控制提交按钮的disable状态
    messageAnswer(newVal) {
      if (newVal.length > 0) {
        this.isChose = true
      } else {
        this.isChose = false
      }
    }
  },
  methods: {
    // 获取所有问题
    async getQuestion() {
      const { data } = await interviewQuestions(this.questionParams)
      this.allQuestion = data
    },
    // 选择题下每次选择触发的函数
    chose(e,key) {
      // 判断是否已回答过此问题来控制是否继续函数
      if (this.findAnswerList) return
      // 获取当前点击项的DOM元素
      const target = e.target
      // 判断是否单选题
      if (this.curQuestion.detail.type === 1) {
        // 判断是否重复选择同一项
        if (this.singleAnswer === key) return
        this.singleAnswer = key
        target.parentNode.querySelector('.active')?.classList.remove('active')
        target.classList.add('active')
      } else {  // 判断是否多选
        // 判断是否重复选择同一项，同一项则取消该次选择
        if (this.multipleAnswer.includes(key)) {
          this.multipleAnswer = this.multipleAnswer.filter(item => item !== key)
          target.parentNode.querySelector('.' + key)?.classList.remove('active')
        } else {
          target.classList.add('active')
          this.multipleAnswer.push(key)
        }
      }
    },
    // 提交问题答案
    async submitQuestion() {
      const answer = {
        id: this.curQuestion.id
      }
      // 判断多选、单选
      if (this.multipleAnswer.length >= 1) {
        answer.multipleAnswer = this.multipleAnswer
      } else if (this.singleAnswer) {
        answer.singleAnswer = this.singleAnswer
      }
      // 验证答案
      const { data: otherInfo } = await questionsSubmit(answer)
      // 将响应内容以及问题等数据存储起来用作判断是否回答过
      this.answerList.push({
        curKey: this.curKey,
        id: this.curQuestion.id,
        analysis: otherInfo,
        question: this.curQuestion,
        isSubmit: true,
        yourAnswer: this.singleAnswer || this.messageAnswer || this.multipleAnswer,
      })
    },
    // 获取下一个问题
    getNextQuestion() {
      this.getQuestionsDetails(this.curKey + 1)
    },
    // 获取指定index问题
    async getQuestionsDetails(index) {
      // 判断是否以获取过该问题
      if (!this.allQuestion[index].detail) {
        // 获取问题详情
        const { data } = await questionsDetails(this.allQuestion[index].id)
        // 存储
        this.allQuestion[index].detail = data
      }
      this.answerSheetVisible = false
      this.curKey = index
    },
    // 返回上一页
    goBack() {
      this.$dialog.confirm({
        title: '退出模拟面试',
        message: '确认退出模拟面试吗？',
      }).then(() => {
        this.$router.replace('/question')
        if (this.answerList.length) {
          let cacheAnswer = JSON.parse(sessionStorage.getItem('answerList')) || []
          cacheAnswer.push({
            value: this.answerList,
            key: this.questionParams
          })
          sessionStorage.setItem('answerList', JSON.stringify(cacheAnswer))
        }
      }).catch(err => err)
    }
  },
  async created() {
    this.getQuestion()
    const cacheAnswer = JSON.parse(sessionStorage.getItem('answerList')) || []
    this.answerList = cacheAnswer.find(i => i.key.type === this.questionParams.type && i.key.city === this.questionParams.city)?.value || []
  }
}
</script>

<style lang="scss" scoped>
.interview {
  ::v-deep .van-nav-bar {
    span {
      font-size: 16px;
    }
    .count {
      font-size: 12px;
      vertical-align: super;
    }
  }
  .interview-main {
    padding: 0 0 52px;
    .question_item {
      padding: 20px;
      ::v-deep .question_tag {
        margin: 8px 8px 8px 0;
        background-color: #f7f4f5;
        color: #bbb;
      }
      .question_option {
        width: 100%;
        min-height: 50px;
        line-height: 40px;
        padding: 5px 10px;
        margin: 10px 0px;
        box-sizing: border-box;
        border: 1px solid #eee;
        word-wrap: break-word;
        &.active {
          border: 1px solid #999;
        }
        &.correctClass {
          position: relative;
          background-color: #ddfad9;
          color: green;
          &::after {
            position: absolute;
            right: 15px;
            font-family: iconfont;
            font-size: 20px;
            content: '\e8e5';
          }
        }
        &.errorClass {
          position: relative;
          background-color: #ffefea;
          color: red;
          &::after {
            position: absolute;
            right: 15px;
            font-family: iconfont;
            font-size: 20px;
            content: '\e8e7';
          }
        }
      }
      .question-analysis {
        box-sizing: border-box;
        width: 100%;
        h4 {
          font-size: 20px;
        }
        p {
          margin: 10px 0;
          font-size: 16px;
          color: #1dcbbe;
        }
        .yourErrorAnswerStyle {
          color: red;
        }
        .analysis-tag {
          display: flex;
          justify-content: space-between;
          background-color: #f7f4f5;
          border-radius: 5px;
          padding: 5px;
          box-sizing: border-box;
          margin-bottom: 15px;
        }
      }
    }
  }
  .interview-tabbar {
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #fff;
    .interview-tabbar-icon {
      display: flex;
      .star,
      .edit {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        ::v-deep .van-icon {
          margin: 5px;
          font-size: 20px;
        }
        span {
          margin: 0 15px 5px;
          font-size: 12px;
        }
      }
    }
    .interview-tabbar-count {
      flex: 1;
      text-align: center;
      align-self: center;
      .current {
        font-size: 16px;
        color: red;
      }
      .total {
        margin-left: 3px;
        font-size: 12px;
      }
    }
    .interview-tabbar-button {
      justify-self: end;
      margin-right: 20px;
      ::v-deep .van-button {
        width: 80px;
        height: 100%;
        border-radius: 0;
      }
    }
  }
  .answer-sheet {
    ::v-deep .van-nav-bar {
      .current {
        color: red;
      }
    }
    .total {
      width: 100%;
      height: 40px;
      line-height: 40px;
      padding: 0 20px;
      font-size: 16px;
      color: #aaa;
      box-sizing: border-box;
      background-color: #F6F4F5;
    }
    .list {
      display: flex;
      flex-wrap: wrap;
      padding: 20px;
      li {
        width: 32px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        border: 1px solid #b5b5bd;
        color: #b5b5bd;
        border-radius: 50%;
        margin: 6px;
        &.current {
          border: 1px solid #666;
          color: #666;
        }
        &.error {
          background-color: #ffefea;
          color: red;
        }
        &.correct {
          background-color: #ddfad9;
          color: green;
        }
      }
    }
  }
}
</style>
