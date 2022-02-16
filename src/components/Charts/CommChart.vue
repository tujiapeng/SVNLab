<template>
  <div ref="chartContainer" class="w-full h-full bg-blue-50"></div>
</template>

<script setup>
import { ref, reactive, onMounted, watch, toRefs } from "vue";
import * as echarts from "echarts";

// 组件参数定义
const chartProps = defineProps({
  chartTitle: {
    type: String,
    default: "Title",
  },
  chartLegend: {
    type: Array,
    default: ["Legend1"],
  },
  chartType: {
    type: String,
    default: "bar",
  },
  chartXTitle: {
    type: Array,
    default: ["1", "2", "3"],
  },
  chartXData: {
    type: Array,
    default: [15, 20, 30],
  },
});
const { chartXData } = toRefs(chartProps)

const chartContainer = ref(); // create dom ref
const myChart = ref();

onMounted(() => {
  init();
});
function optionInit() {
  // chart data and form
  var option = {
    title: {
      text: chartProps.chartTitle,
    },
    tooltip: {},
    legend: {
      data: chartProps.chartLegend,
    },
    xAxis: {
      data: chartProps.chartXTitle,
    },
    yAxis: {},
    series: [
      {
        name: chartProps.chartLegend[0],
        type: chartProps.chartType,
        data: chartProps.chartXData,
      },
    ],
  };
  return option
}
function init() {
  // init chart
  myChart.value = echarts.init(chartContainer.value);

  // make chart
  myChart.value.setOption(optionInit());
}

watch(
  chartXData,
  (newChartXData) => {
    myChart.value.setOption(optionInit());
  },
  { deep: true }
)

// window.addEventListener("resize", () => {
//   //myChart.value.resize();
//   if (myChart.value) {
//     myChart.value.resize();
//   }
// })
</script>

<style></style>
