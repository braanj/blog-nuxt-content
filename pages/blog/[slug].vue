<script setup lang="ts">
const path = computed(() => useRoute().path)
const { data: article, error } = await useAsyncData('single-article', () =>
  queryContent(path.value).findOne(),
)

if (error.value) {
  throw createError({
    status: 404,
    message: 'Article not found!',
  })
}

if (article.value) {
  const i18nParams = {
    en: { slug: article.value.slug.en },
    fr: { slug: article.value.slug.fr },
  }

  const setI18nParams = useSetI18nParams()
  setI18nParams(i18nParams)
}

const { locale: currentLocale } = useI18n()
const { data: articles } = await useAsyncData('related-articles', async () => {
  const data = await queryContent(currentLocale.value, 'blog')
    .where({
      _path: { $ne: path.value }, // Ignore current article
      _file: { $not: { $contains: 'index.md' } }, // Ignore blog index
    })
    .limit(3)
    .find()

  return data
})
</script>

<template>
  <div>
    <ContentRenderer v-if="article" :value="article">
      <ContentRendererMarkdown :value="article" />
    </ContentRenderer>

    <div>
      <h2>Articles</h2>

      <div v-if="articles && articles.length">
        <ul>
          <li v-for="(article, key) in articles" :key="`article-${key}`">
            <nuxt-link :to="article._path"> {{ article.title }}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
