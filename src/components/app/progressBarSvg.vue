<script setup>
import { ref, computed, watchEffect } from "vue";

//  in progress, success, warning, error
const props = defineProps({
  status: {
    type: String,
    default: 'inProgress'
  },
  state: {
    type: Number,
    default: 0,
  },
  dashboard: {
    type: Boolean,
    default: false
  }
})
const radius = 80
const height = 200
const width = 200

// Длина окружности прогресс бара
const circumference = computed(() => props.dashboard ? (2 * 3.14 * radius - 150) : (2 * 3.14 * radius))
const barColor = ref("#209ffe")
const barIcon = ref('inProgress')

const progress = computed(() => circumference.value  - ((circumference.value  / 100) * props.state))

watchEffect(() => {
  switch (props.status) {
    case "inProgress":
      barColor.value = "#209ffe";
      barIcon.value = "inProgress"
      break
    case "success":
      barColor.value = "#11cd65";
      barIcon.value = "success"
      break
    case "warning":
      barColor.value = "#e6a13c";
      barIcon.value = "warning"
      break
    case "error":
      barColor.value = "#ff4848";
      barIcon.value = "error"
      break
  }
})
</script>

<template>

  <svg :viewbox="`0 0 ${width} ${width}`" :width="width" :height="height">
    <template v-if="!dashboard">
      <circle :r="radius" :cx="width/2" :cy="height/2" fill="none" stroke-width="12" stroke="#ccc" stroke-linecap="round"/>
      <circle class="progress-circle " :r="radius" :cx="width/2" :cy="height/2" fill="none" stroke-width="12"
              stroke-linecap="round" transform="rotate(-90 100 100)"
              :stroke-dasharray="circumference" :style="{
              strokeDashoffset: progress,
              stroke: barColor
            }"
      />
    </template>
    <template v-else>
      <circle :r="radius" :cx="width/2" :cy="height/2" fill="none" stroke-width="12" stroke="#ccc" stroke-linecap="round" :stroke-dasharray="circumference" transform="rotate(145 100 100)"/>
      <circle class="progress-circle " :r="radius" :cx="width/2" :cy="height/2" fill="none" stroke-width="12"
              stroke-linecap="round" transform="rotate(145 100 100)"
              :stroke-dasharray="`${circumference} 502.4`" :style="{
              strokeDashoffset: progress,
              stroke: barColor
            }"
      />
    </template>

    <transition name="fade">
      <text v-if="barIcon === 'inProgress'" x="100" y="110" font-family="Arial" font-size="24" text-anchor="middle" fill="#444">
        {{ state }}%
      </text>
      <svg v-else-if="barIcon === 'success'" x="90" y="90" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1812 16.2554L3.28667 10.4702L2 12.0036L10.4265 19.0743L21.9967 5.28545L20.4647 4L10.1812 16.2554Z" fill="#11cd65"/>
      </svg>
      <svg v-else-if="barIcon === 'warning'" x="90" y="90" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 4.85714C12.789 4.85714 13.4286 5.49674 13.4286 6.28571V13.4286C13.4286 14.2176 12.789 14.8571 12 14.8571C11.211 14.8571 10.5714 14.2176 10.5714 13.4286V6.28571C10.5714 5.49674 11.211 4.85714 12 4.85714ZM12 19.1429C12.8679 19.1429 13.5715 18.5033 13.5715 17.7143C13.5715 16.9253 12.8679 16.2857 12 16.2857C11.1322 16.2857 10.4286 16.9253 10.4286 17.7143C10.4286 18.5033 11.1322 19.1429 12 19.1429Z" fill="#e6a13c"/>
      </svg>
      <svg v-else-if="barIcon === 'error'" x="90" y="90"  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 13.4142L19.7782 21.1924L21.1924 19.7782L13.4142 12L21.1924 4.22183L19.7782 2.80762L12 10.5858L4.22182 2.80762L2.80761 4.22183L10.5858 12L2.80761 19.7782L4.22182 21.1924L12 13.4142Z" fill="#ff4848"/>
      </svg>
    </transition>
  </svg>

</template>

<style>
.progress-circle {
  transition:
      stroke-dashoffset 0.5s linear,
      stroke 0.5s linear;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>