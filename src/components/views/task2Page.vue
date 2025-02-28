<script setup>
import { ref, computed } from 'vue';
import { useChartStore } from '../stores/chartStore.js';
import ChartLayout from "../layouts/chartLayout.vue";
import NavMenu from '../app/navMenu.vue';
import DialogLayout from '../layouts/dialogLayout.vue';
import FormLayout from '../layouts/formLayout.vue';

const chartStore = useChartStore();
const dialogTarget = ref();

const showDialog = () => dialogTarget.value.show();

function handleEdit(item) {
  chartStore.name = item.name;
  chartStore.originalName = item.name;
  chartStore.value = item.value;
  chartStore.pureColor = item.color;
  showDialog();
}

function handleDelete(itemName) {
  chartStore.elements = chartStore.elements.filter((item) => item.name !== itemName);
}

const chartData = computed(() => ({
  labels: chartStore.elements.map((item) => item.name),
  datasets: [
    {
      label: 'Данные',
      data: chartStore.elements.map((item) => item.value),
      backgroundColor: chartStore.elements.map((item) => item.color),
      hoverOffset: 4,
    },
  ],
}));

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        usePointStyle: true,
        pointStyle: 'circle',
      },
      padding: {
        top: 40,
      },
    },
  },
});
</script>

<template>
  <div class="task2_wrapper">
    <div class="title">
      <h1>Круговая диаграмма</h1>
      <nav-menu style="margin-left: 86px" />
    </div>
    <hr class="horizontal_hr" />
    <div class="chart_wrapper">
      <div class="chart_info">
        <ul>
          <li v-for="item in chartStore.elements" :key="item.name">
            <div class="chart_item_parameters">
              <span class="pie_name">{{ item.name }}</span>
              <hr class="vertical_hr" />
              <span class="pie_value">{{ item.value + '%' }}</span>
              <hr class="vertical_hr" />
              <div class="circle" :style="{ backgroundColor: item.color }" />
            </div>
            <div class="chart_item_functions">
              <img
                  src="../../assets/icons/Edit.svg"
                  alt="edit"
                  class="img_edit"
                  @click="handleEdit(item)"
              />
              <img
                  src="../../assets/icons/Trash.svg"
                  alt="delete"
                  class="img_delete"
                  style="margin-left: 20px"
                  @click="handleDelete(item.name)"
              />
            </div>
          </li>
        </ul>
        <button @click="showDialog">Добавить сектор</button>
      </div>
      <ChartLayout :chartData="chartData" :options="chartOptions" />
    </div>
    <DialogLayout ref="dialogTarget">
      <FormLayout :dialog="dialogTarget" />
    </DialogLayout>
  </div>
</template>


<style scoped>
.task2_wrapper {
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 10px;
}

.title {
  display: flex;
  flex-direction: row;
}

h1 {
  font-family: "Inter Semibold", "sans-serif";
  font-size: 32px;
  color: #252F4A;
  line-height: 39px;
}

.horizontal_hr {
  border-bottom: 1px solid #DBDFE9;
  margin-top: 30px;
  width: 100%;
  margin-bottom: 40px;
}

.pie_name {
  width: 100px;
}

.pie_value {
  width: 40px;
  text-align: center;
}

.vertical_hr {
  height: 16px;
  border-left: 2px solid #DBDFE9;
  margin-left: 25px;
  margin-right: 25px;
}

.circle {
  width: 20px;
  height: 20px;
  border-radius: 100%;
}

.chart_wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.chart_info {
  display: flex;
  flex-direction: column;
  min-width: 541px;
}

.img_edit {
  opacity: 1;
  cursor: pointer;
}

.img_edit:hover {
  opacity: 0.8;
}

.img_delete {
  opacity: 1;
  cursor: pointer;
}

.img_delete:hover {
  opacity: 0.8;
}

ul {
  font-family: var(--font-family-base);
  font-size: 16px;
  color: #252F4A;
  line-height: 24px;
}

li {
  background-color: #DBDFE933;
  width: 100%;
  height: 60px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
}

.chart_item_parameters {
  display: flex;
  flex-direction: row;
}

li:not(:first-child) {
  margin-top: 5px;
}

button {
  width: 100%;
  background-color: #1B84FF;
  border-radius: 10px;
  height: 60px;
  margin-top: 30px;

  font-family: var(--font-family-base);
  font-size: 16px;
  color: white;
  line-height: 24px;
}

button:hover {
  background-color: #0469db;
}
</style>