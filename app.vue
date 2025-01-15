<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="centered">
    <p>{{ t('message') }}</p>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.centered {
  border: 1px solid #aeaeae;
  height: 100svh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
