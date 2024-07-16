<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <footer class="fixed bottom-0 left-0 m-2 mb-1 overflow-hidden w-full white-space-nowrap">
    <a :href="url" target="_blank" rel="noopener"
      >{{ version }}<i class="pi pi-github vertical-align-middle m-2"></i>AGPL-3.0 Licensed</a
    >
    /
    <a :href="privacyUrl" target="_blank" rel="noopener">Privacy Policy</a>
    / Copyright © 2024 Omkar & Rahul
  </footer>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const hash: string | undefined = import.meta.env.VITE_GIT_HASH;
const baseUrl = 'https://github.com/omkar-103';
const version = ref('v.DEVELOP');
const url = ref(baseUrl);
const privacyUrl = 'https://developer.pagesake.com/';

onMounted(() => {
  if (hash) {
    version.value = 'v.' + hash.substring(0, 7).toUpperCase();
    url.value = `${baseUrl}/tree/${hash}`;
  }
});
</script>

<style scoped lang="scss">
footer {
  font-family: 'Rock Salt';

  background-image: linear-gradient(to right, black 0%, transparent 50%);
  font-size: 0.6rem;
}
</style>
