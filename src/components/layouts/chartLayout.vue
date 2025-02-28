<script setup>
import { ref, onMounted, onUpdated } from 'vue';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, PieController } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement, PieController);

const props = defineProps({
  chartData: {
    type: Object,
    required: true,
  },
  options: {
    type: Object,
    default: () => ({}),
  },
});
const chartRef = ref(null);
let chartInstance = null;

const renderChart = () => {
  if (chartRef.value) {
    if (chartInstance) {
      chartInstance.destroy();
    }
    chartInstance = new ChartJS(chartRef.value.getContext('2d'), {
      type: 'pie',
      data: props.chartData,
      options: props.options,
    });
  }
};

onMounted(() => {
  renderChart();
});

onUpdated(() => {
  renderChart();
});
</script>

<template>
  <canvas ref="chartRef" style="max-width: 500px; max-height: 564px; min-height: 564px; margin-left: 89px"></canvas>
</template>