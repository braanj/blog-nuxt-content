<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div>
    <p>{{ t('message') }}</p>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
