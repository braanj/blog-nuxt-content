<script setup lang="ts">
const path = computed(() => useRoute().path)
const { data, error } = await useAsyncData('blog', () =>
  queryContent(path.value).findOne(),
)

if (error.value) {
  throw createError({
    status: 404,
    message: 'Blog page not found!',
  })
}

if (data.value) {
  useHead({
    title: data.value.title,
    meta: [
      {
        name: 'description',
        content: data.value.description,
      },
    ],
  })
}

const { locale: currentLocale } = useI18n()
const { data: articles } = await useAsyncData('related-articles', async () => {
  const data = await queryContent(currentLocale.value, 'blog')
    .where({
      _path: { $ne: path.value }, // Ignore current path
    })
    .find()

  return data
})
</script>

<template>
  <div>
    <ContentRenderer v-if="data" :value="data">
      <ContentRendererMarkdown :value="data" />
    </ContentRenderer>

    <div v-if="articles && articles.length">
      <ul>
        <li v-for="(article, key) in articles" :key="`article-${key}`">
          <nuxt-link :to="article._path"> {{ article.title }}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
