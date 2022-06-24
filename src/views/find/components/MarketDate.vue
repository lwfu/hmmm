<template>
  <div class="data">
    <van-nav-bar
      title="市场数据"
      fixed
      placeholder
      left-arrow
      @click-left="$router.push('/find')"
    />
    <van-dropdown-menu>
      <van-dropdown-item v-model="value" :options="option">
        <van-index-bar>
          <van-index-anchor index="热门" />
          <van-cell
            :title="item[0]"
            v-for="(item, index) in hotArr"
            :key="index"
          />
          <van-index-anchor index="B" />
          <van-cell :title="item[0]" v-for="item in cityArr.B" :key="item[0]" />
          <van-index-anchor index="C" />
          <van-cell :title="item[0]" v-for="item in cityArr.C" :key="item[0]" />
          <van-index-anchor index="D" />
          <van-cell :title="item[0]" v-for="item in cityArr.D" :key="item[0]" />
          <van-index-anchor index="E" />
          <van-cell :title="item[0]" v-for="item in cityArr.E" :key="item[0]" />
          <van-index-anchor index="F" />
          <van-cell :title="item[0]" v-for="item in cityArr.F" :key="item[0]" />
          <van-index-anchor index="G" />
          <van-cell :title="item[0]" v-for="item in cityArr.G" :key="item[0]" />
          <van-index-anchor index="H" />
          <van-cell :title="item[0]" v-for="item in cityArr.H" :key="item[0]" />
          <van-index-anchor index="I" />
          <van-cell :title="item[0]" v-for="item in cityArr.I" :key="item[0]" />
          <van-index-anchor index="J" />
          <van-cell :title="item[0]" v-for="item in cityArr.J" :key="item[0]" />
          <van-index-anchor index="K" />
          <van-cell :title="item[0]" v-for="item in cityArr.K" :key="item[0]" />
          <van-index-anchor index="L" />
          <van-cell :title="item[0]" v-for="item in cityArr.L" :key="item[0]" />
          <van-index-anchor index="M" />
          <van-cell :title="item[0]" v-for="item in cityArr.M" :key="item[0]" />
          <van-index-anchor index="N" />
          <van-cell :title="item[0]" v-for="item in cityArr.N" :key="item[0]" />
          <van-index-anchor index="O" />
          <van-cell :title="item[0]" v-for="item in cityArr.O" :key="item[0]" />
          <van-index-anchor index="P" />
          <van-cell :title="item[0]" v-for="item in cityArr.P" :key="item[0]" />
          <van-index-anchor index="Q" />
          <van-cell :title="item[0]" v-for="item in cityArr.Q" :key="item[0]" />
          <van-index-anchor index="R" />
          <van-cell :title="item[0]" v-for="item in cityArr.R" :key="item[0]" />
          <van-index-anchor index="S" />
          <van-cell :title="item[0]" v-for="item in cityArr.S" :key="item[0]" />
          <van-index-anchor index="T" />
          <van-cell :title="item[0]" v-for="item in cityArr.T" :key="item[0]" />
          <van-index-anchor index="U" />
          <van-cell :title="item[0]" v-for="item in cityArr.U" :key="item[0]" />
          <van-index-anchor index="W" />
          <van-cell :title="item[0]" v-for="item in cityArr.W" :key="item[0]" />
          <van-index-anchor index="X" />
          <van-cell :title="item[0]" v-for="item in cityArr.X" :key="item[0]" />
          <van-index-anchor index="Y" />
          <van-cell :title="item[0]" v-for="item in cityArr.Y" :key="item[0]" />
          <van-index-anchor index="Z" />
          <van-cell :title="item[0]" v-for="item in cityArr.Z" :key="item[0]" />
        </van-index-bar>
      </van-dropdown-item>
      <van-dropdown-item v-model="value" :options="option">
        <van-index-bar>
          <template>
            <van-index-anchor index="A">标题</van-index-anchor>
            <van-cell title="文本" />
            <van-cell title="文本" />
            <van-cell title="文本" />
          </template>
        </van-index-bar>
      </van-dropdown-item>
    </van-dropdown-menu>
    <h3>工资收入</h3>
    <div class="charts" ref="charts"></div>
  </div>
</template>

<script>
import { dataIndexes } from '@/api/data'
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core'
// 引入柱状图图表，图表后缀都为 Chart
import { PieChart } from 'echarts/charts'
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from 'echarts/components'
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers'

// 注册必须的组件
echarts.use([
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  CanvasRenderer
])

export default {
  name: 'MarketDate',
  data () {
    return {
      value: 0,
      option: [
        { text: '北京', value: 0 },
        { text: '深圳', value: 1 }
      ],
      hotArr: [],
      cityArr: []
    }
  },
  methods: {},
  async created () {
    const res = await dataIndexes()
    this.cityArr = res.data
    this.hotArr = res.data['热门']
  },
  mounted () {
    const myChart = echarts.init(this.$refs.charts) // 初始化实例
    // 指定图表的配置项和数据
    const option = {
      tooltip: {
        trigger: 'item'
      },
      // legend: {
      //   top: '5%',
      //   left: 'center'
      // },
      series: [
        {
          name: '饼图',
          type: 'pie',
          radius: ['25%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '40',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1048, name: '4.5k-6k' },
            { value: 735, name: '6k-8k' },
            { value: 580, name: '8k-10k' },
            { value: 484, name: '10k-15k' },
            { value: 300, name: '15k-20k' }
          ]
        }
      ]
    }

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option)
  }
}
</script>

<style lang="scss" scoped>
.data {

  .charts {
    width: 100vw;
    height: 200px;
    box-sizing: border-box;
  }
}
</style>
