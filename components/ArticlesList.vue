<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content'

defineProps<{
  articles?: ParsedContent[]
}>()
</script>

<template>
  <ul class="articles-list">
    <li
      class="article"
      v-for="(article, key) in articles"
      :key="`article-${key}`"
    >
      <nuxt-link :to="article._path">
        <img
          class="article-img"
          :src="article.cover.src"
          :alt="article.cover.alt"
        />
      </nuxt-link>
      <div class="article-text">
        <nuxt-link :to="article._path"> {{ article.title }}</nuxt-link>
        <small>{{ article.description }}</small>
      </div>
    </li>
  </ul>
</template>

<style scoped>
.articles-list {
  padding-left: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
}

.article {
  display: grid;
  gap: 10px;
}

.article-img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}
.article-text {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
