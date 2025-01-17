---
title: First article
description: First article > Lorem ipsum, dolor sit amet consectetur adipisicing elit.
slug:
  en: 'first-article'
  fr: 'premiere-article'
---

## Heading 2

Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto distinctio officia perspiciatis reiciendis doloremque ipsum voluptate reprehenderit eum incidunt? Quidem vel cupiditate neque, similique reiciendis amet adipisci ad accusamus libero?

```javascript
const { locale: currentLocale } = useI18n()
const { data: articles } = await useAsyncData('related-articles', async () => {
  const data = await queryContent(currentLocale.value, 'blog')
    .where({
      _path: { $ne: path.value }, // Ignore current path
    })
    .find()

  return data
})
```
