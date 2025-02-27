<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

</script>

<template>
  <nav>
    <ul>
      <li @click="router.push('/')">
        Задание 1
      </li>
      <li @click="router.push('/task2Page')">
        Задание 2
      </li>
    </ul>
  </nav>
</template>

<style scoped>
ul {
  width: auto;
  margin: 30px 10px;
  display: flex;
  flex-direction: row;
}


li {
  width: 8rem;
  display: flex;
  justify-content: center;
  background: aquamarine;
  color: black;
  padding: 10px 20px;
  border: 2px solid #52A388;
  border-radius: 5px;
  cursor: pointer;
}
li:nth-child(2) {
  margin-left: 10px;
}
li:hover {
  background: #55eeba;
}
</style>