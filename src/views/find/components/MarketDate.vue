<template>
  <div class="data">
    <van-nav-bar
      title="市场数据"
      fixed
      placeholder
      left-arrow
      @click-left="$router.go(-1)"
    />
    <van-dropdown-menu>
      <van-dropdown-item :title="city" ref="item">
        <van-index-bar>
          <template v-for="item in needArr">
            <van-index-anchor :index="item.key" :key="item.id" />
            <van-cell
              v-for="c in item.children"
              :title="c[0]"
              :key="c[0]"
              @click="changeCity(c[0])"
            />
          </template>
        </van-index-bar>
      </van-dropdown-item>

      <!-- <van-dropdown-item title="A" ref="item2">
        <van-index-bar>
          <template v-for="item in positionArr">
            <van-cell
              v-for="c in item.children"
              :title="c[1]"
              :key="c"
            />
          </template>
        </van-index-bar>
      </van-dropdown-item> -->
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
      cityArr: [],
      needArr: [], // 转换后的数组
      city: '北京', // 当前选择的城市
      positionArr: [] // 岗位
    }
  },
  methods: {
    changeCity (c) {
      this.city = c
      this.$refs.item.toggle()
    }
  },
  async created () {
    const res = await dataIndexes()
    this.cityArr = res.data
    this.hotArr = res.data['热门']
    let id = 0
    for (const [key, value] of Object.entries(this.cityArr)) {
      // console.log(key) // 热门
      // console.log(value) // [['北京'], ['广州'], ['深圳']]
      this.needArr.push({
        id,
        key,
        children: value
      })
      this.positionArr.push({
        children: value
      })
      id++
    }
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
