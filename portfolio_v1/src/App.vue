<script setup lang="ts">
import MyHeader from './components/MyHeader.vue'
</script>

<template>
  <div class="w-full bg-background h-screen p-4">
    <div class="container mx-auto">
      <MyHeader />
      <router-view></router-view>
    </div>
  </div>
</template>
