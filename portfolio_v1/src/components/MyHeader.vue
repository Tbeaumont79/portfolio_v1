<template>
  <header class="bg-gray-900">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon
            v-if="!mobileMenuOpen"
            class="h-6 text-text w-6"
            aria-hidden="true"
          />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <router-link
          v-for="item in navigation"
          :key="item.name"
          :to="item.href"
          class="text-sm font-semibold leading-6 text-text hover:text-accent"
        >
          {{ item.name }}
        </router-link>
      </div>
    </nav>

    <Dialog
      as="div"
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-0 z-10 w-full bg-gray-900 sm:ring-1 sm:ring-white/10"
      >
        <div class="w-full h-screen bg-background/95 flow-root">
          <div class="relative">
            <button
              type="button"
              class="rounded-md p-2.5 text-text"
              @click="mobileMenuOpen = false"
            >
              <span class="sr-only right-0">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="-my-6 divide-y divide-gray-500/25">
            <div class="p-6">
              <ul>
                <router-link
                  v-for="item in navigation"
                  :key="item.name"
                  :to="item.href"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-text hover:text-accent"
                  ><li>{{ item.name }}</li></router-link
                >
              </ul>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Works', href: '#' },
  { name: 'Contact', href: '#' }
]

const mobileMenuOpen = ref(false)
</script>
