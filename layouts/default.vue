<script setup lang="ts">
const { locale: currentLocale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath()
</script>

<template>
  <div class="container">
    <div class="flex justify-between">
      <NuxtLink :to="localePath('index')">
        <span>Blog Nuxt Content</span>
      </NuxtLink>

      <NuxtLink :to="localePath('blog')">
        <span>Blog</span>
      </NuxtLink>

      <template v-for="locale in locales" :key="locale.code">
        <NuxtLink
          v-if="locale.code !== currentLocale"
          :to="switchLocalePath(locale.code)"
          :title="locale.language"
        >
          <span>{{ locale.name }}</span>
        </NuxtLink>
      </template>
    </div>

    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<style>
html,
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.container {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 1px;
}

.flex {
  display: flex;
}

.justify-between {
  justify-content: space-between;
}

a {
  text-decoration: none;
}

/* visited link */
a:visited {
  color: green;
}

/* mouse over link */
a:hover {
  color: #000;
}

/* selected link */
a:active {
  color: blue;
}
</style>
