<script setup>
import { ref } from "vue";
import { ColorPicker } from "vue3-colorpicker";
import "vue3-colorpicker/style.css";
import { useChartStore } from "../stores/chartStore.js";
import { toast } from "vue3-toastify";
import 'vue3-toastify/dist/index.css';

const chartStore = useChartStore();
const props = defineProps({
  dialog: Object,
});

const gradientColor = ref("linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%)");

function onSubmit() {
  if (!chartStore.name || !chartStore.value || !chartStore.pureColor) {
    toast("Все поля должны быть заполнены.", {
      autoClose: 1000,
      type: "error",
      icon: false,
    });
    return;
  }

  let isUniq = chartStore.elements.every((chartItem) => {
    return chartItem.name !== chartStore.name;
  });

  if (!isUniq) {
    toast("Имя должно быть уникальным.", {
      autoClose: 1000,
      type: "error",
      icon: false,
    });
    return;
  }

  let value = parseInt(chartStore.value, 10);
  if (isNaN(value) || value < 0 || value > 100) {
    toast("Значение должно быть целым числом от 0 до 100.", {
      autoClose: 1000,
      type: "error",
      icon: false,
    });
    return;
  }

  chartStore.elements.push({
    name: chartStore.name,
    value: value,
    color: chartStore.pureColor
  });

  props.dialog.close();
}
</script>

<template>
  <div class="form_wrapper">
    <h3>Добавление сектора</h3>
    <form @submit.prevent="onSubmit">
      <div class="form_name_wrapper">
        <label class="form_name">
          Наименование
        </label>
        <input class="form_name_input"
               v-model="chartStore.name"
               type="text"
        />
      </div>
      <div class="form_name_wrapper">
        <label class="form_name">
          Значение
        </label>
        <input class="form_name_input"
               v-model="chartStore.value"
               type="text"
        />
      </div>
      <div class="color_picker_wrapper">
        <color-picker is-widget disable-history
                      v-model:pureColor="chartStore.pureColor"
                      v-model:gradientColor="gradientColor"
        />
      </div>
      <button type="submit">
        Добавить сектор
      </button>
    </form>
  </div>
</template>

<style scoped>
h3 {
  font-family: "Inter Medium", "sans-serif";
  font-size: 20px;
  line-height: 24px;
  color: #252F4A;
}

.form_wrapper {
  width: 390px;
  background-color: white;
  margin: 20px;
}

form {
  width: 100%;
  margin-top: 20px;
  font-family: var(--font-family-base);
}

button {
  width: 100%;
  background-color: #1B84FF;
  border-radius: 10px;
  height: 60px;
  margin-top: 30px;

  font-size: 16px;
  color: white;
  line-height: 24px;
}

.form_name_wrapper {
  position: relative;
  padding: 26px 20px 10px 20px;
  border: 1px solid #DBDFE9;
  border-radius: 10px;

  font-size: 16px;
  line-height: 24px;
  color: #252F4A;
}

.form_name_wrapper:not(:last-child) {
  margin-top: 20px;
}

.form_name {
  position: absolute;
  top: 10px;
  left: 20px;

  font-size: 12px;
  line-height: 16px;
  color: #99A1B7;
}

.form_name_input {
  position: relative;
}

</style>
