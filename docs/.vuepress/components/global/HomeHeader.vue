<template>
  <header class="home-header">
    <div class="logo-wrap">
      <img
        class="logo"
        :src="$withBase('/images/logo.svg')"
        alt="funt"
      >
      <img
        class="logo-dark"
        :src="$withBase('/images/logo-dark.svg')"
        alt="funt"
      >
    </div>
    <h1 style="display: none;" id="main-title">{{ heroText }}</h1>
    <p v-if="tagline" class="description">{{ tagline }}</p>
    <p v-if="actions.length" class="actions">
      <AutoLink
        v-for="action in actions"
        :key="action.text"
        class="action-button"
        :class="[action.type]"
        :item="action"
      />
    </p>
  </header>
</template>

<script setup lang="ts">
import AutoLink from '@vuepress/theme-default/lib/client/components/AutoLink.vue'
import { usePageFrontmatter, useSiteLocaleData } from '@vuepress/client'
import { isArray } from '@vuepress/shared'
import { computed } from 'vue'

const frontmatter = usePageFrontmatter()
const siteLocale = useSiteLocaleData()

const heroText = computed(() => {
  if (frontmatter.value.heroText === null) {
    return null
  }
  return frontmatter.value.heroText || siteLocale.value.title || 'Hello'
})

const tagline = computed(() => {
  if (frontmatter.value.tagline === null) {
    return null
  }
  return (
    frontmatter.value.tagline ||
    siteLocale.value.description ||
    'Welcome to your VuePress site'
  )
})

const actions = computed(() => {
  if (!isArray(frontmatter.value.actions)) {
    return []
  }
  return frontmatter.value.actions.map(({ text, link, type = 'primary' }) => ({
    text,
    link,
    type,
  }))
})
</script>

<style lang="scss">
  .home-header {
    text-align: center;
    .logo-wrap {
      width: 265px;
      height: 188px;
      max-width: 100%;
      max-height: 280px;
      display: block;
      margin: 4.2rem auto 1.5rem;
    }
    .logo {
      --img-url: '/images/logo-dark.svg'
    }
    .logo-dark {
      display: none;
    }
    .description {
      max-width: 35rem;
      font-size: 1.6rem;
      line-height: 1.3;
      margin: 1.8rem auto;
      color: var(--c-text-lightest);
    }
    .action-button.primary {
      color: var(--c-bg);
      background-color: var(--c-brand);
      border-color: var(--c-brand);
      &:hover {
        background-color: var(--c-brand-light);
      }
    }
    .action-button {
      display: inline-block;
      font-size: 1.2rem;
      padding: 0.8rem 1.6rem;
      border-width: 2px;
      border-style: solid;
      border-radius: 4px;
      transition: background-color var(--t-color);
      box-sizing: border-box;
    }
  }
  .home {
    header.hero {
      display: none;
    }
  }
</style>