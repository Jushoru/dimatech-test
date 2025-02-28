<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

</script>

<template>
  <nav>
    <ul>
      <li @click="router.push('/')">
        <button>Задание 1</button>
      </li>
      <li @click="router.push('/task2Page')">
        <button>Задание 2</button>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
ul {
  width: auto;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  flex-direction: row;
}

li {
  width: 8rem;
  display: flex;
  justify-content: center;
}

button {
  width: 100%;
  background-color: #1B84FF;
  border-radius: 10px;
  height: 45px;

  font-family: var(--font-family-base);
  font-size: 16px;
  color: white;
  line-height: 24px;
}

button:hover {
  background-color: #0469db;
}

li:nth-child(2) {
  margin-left: 10px;
}
</style>