<script setup lang="ts"></script>
<template>
  <div
    class="flex sm:flex-row sm:items-start sm:mt-10 flex-col-reverse justify-evenly w-full"
  >
    <img
      src="../assets/thib.jpg"
      class="sm:w-1/2 sm:h-1/2 object-cover py-5"
      alt=""
    />
    <div class="flex flex-col gap-y-10 h-60 sm:h-96 sm:ml-4 justify-center">
      <h1 class="text-2xl sm:text-4xl text-text">
        Hey I'm Thibault, a FrontEnd Developer
      </h1>
      <h1 class="text-accent font-bold">
        I love to craft websites, with great design
      </h1>
    </div>
  </div>
  <div class="flex justify-evenly sm:mt-10 mt-5 items-center">
    <a
      href="https://www.linkedin.com/in/beaumont-thibault/"
      class="p-4 bg-primary rounded-xl hover:bg-accent"
    >
      <font-awesome-icon :icon="['fab', 'linkedin']" class="text-text/70" />
      <span class="ml-4 font-bold text-text/70">LinkedIn</span>
    </a>
    <a
      href="https://github.com/Tbeaumont79"
      class="p-4 bg-primary rounded-xl hover:bg-accent"
    >
      <font-awesome-icon :icon="['fab', 'github']" class="text-text/70" />
      <span class="ml-4 font-bold text-text/70">GitHub</span>
    </a>
  </div>
</template>
