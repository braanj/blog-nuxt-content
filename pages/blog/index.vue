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
  <div v-if="data">
    <div class="flex relative">
      <img class="cover-image" :src="data.cover.src" :alt="data.cover.alt" />
      <h1 class="absolute centered">
        {{ data.title }}
      </h1>
    </div>

    <ContentRenderer :value="data">
      <ContentRendererMarkdown :value="data" />
    </ContentRenderer>
    <LazyArticlesList v-if="articles && articles.length" :articles="articles" />
  </div>
</template>
