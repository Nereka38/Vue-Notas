<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink to="/">Home</RouterLink>
  </header>
  <RouterView />
</template>

<style lang="scss">
header {
  width: 100%;
  background-color: rgb(66, 75, 75);
  padding: 2vw;
}
</style>
