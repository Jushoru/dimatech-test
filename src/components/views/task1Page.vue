<script setup>
import NavMenu from "../app/navMenu.vue";
import ProgressBarSvg from "../app/progressBarSvg.vue";
import { ref } from "vue";

const status = ref('inProgress')

const state = ref(0)

const interval = setInterval(() => {
  state.value += 5
  if (state.value === 20) {
    status.value = 'warning'
  }
  if (state.value === 40) {
    status.value = 'error'
  }
  if (state.value === 50) {
    status.value = 'inProgress'
  }
  if (state.value >= 100) {
    status.value = 'success'
    clearInterval(interval)
  }
}, 500)
</script>

<template>
  <nav-menu style="margin-top: 10px"/>
  <ProgressBarSvg :status="status" :state="state" :dashboard="false" style="margin-top: 30px"/>
  <ProgressBarSvg :status="status" :state="state" :dashboard="true" style="margin-top: 30px"/>
</template>