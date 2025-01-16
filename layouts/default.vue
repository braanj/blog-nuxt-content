<script setup lang="ts">
const { locale: currentLocale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <div>
    <template v-for="locale in locales" :key="locale.code">
      <NuxtLink
        v-if="locale.code !== currentLocale"
        :to="switchLocalePath(locale.code)"
        :title="locale.language"
      >
        <span>{{ locale.name }}</span>
      </NuxtLink>
    </template>

    <main>
      <NuxtPage />
    </main>
  </div>
</template>
