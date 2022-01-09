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
    <h1 style="display: none;" id="main-title">funt</h1>
    <p class="description">JavaScript 处理数组对象字符串等函数库合集</p>
    <p class="actions">
      <router-link to="/docs">快速开始</router-link>
    </p>
  </header>
</template>

<style lang="scss">
  .home-header {
    text-align: center;
    .logo-wrap {
      width: 265px;
      height: 188px;
      max-width: 100%;
      max-height: 280px;
      display: block;
      margin: 3rem auto 1.5rem;
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
      margin: 1rem auto;
      color: var(--c-text-lightest);
    }
  }
  .home {
    header.hero {
      display: none;
    }
  }
</style>