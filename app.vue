<script setup lang="ts">
  const { data } = await useFetch('api/todo');
  console.log(data);
</script>

<template>
  <div>
    <div class="c">{{ data }}</div>
  </div>
</template>

<style>
  .c {
    color: aqua;
  }
</style>
