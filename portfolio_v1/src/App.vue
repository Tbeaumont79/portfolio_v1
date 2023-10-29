<script setup lang="ts">
import MyHeader from './components/MyHeader.vue'
</script>

<template>
  <div class="w-full bg-background">
    <div class="container mx-auto">
      <MyHeader />
      <router-view></router-view>
    </div>
  </div>
</template>
