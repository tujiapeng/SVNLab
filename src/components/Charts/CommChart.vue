<template>
  <div ref="chart" class="w-full h-full bg-blue-50"></div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
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

const chart = ref(); // create dom ref

onMounted(() => {
  init();
});
function init() {
  // init chart
  var myChart = echarts.init(chart.value);
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

  // make chart
  myChart.setOption(option);
}
</script>

<style></style>