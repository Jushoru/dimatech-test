<script setup>
import { ref } from "vue";

const props = defineProps({
  dialog: Object,
});

const name = ref('')
const value = ref('')
</script>

<template>
  <div class="form_wrapper">
    <h3>Добавление сектора</h3>
    <form>
      <div class="form_name_wrapper">
        <label class="form_name">
          Наименование
        </label>
        <input class="form_name_input"
               v-model="name"
               type="text"
        />
      </div>
      <div class="form_name_wrapper">
        <label class="form_name">
          Значение
        </label>
        <input class="form_name_input"
               v-model="value"
               type="text"
        />
      </div>
      <button @open="props.dialog.close()">
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
