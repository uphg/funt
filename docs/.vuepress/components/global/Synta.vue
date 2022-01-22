<template>
  <span class="synta">
    <span class="synta-text"><slot /></span>
    <code class="synta-code">{{ text }}</code>
  </span>
</template>

<script>
export default {
  props: {
    text: String
  }
}
</script>

<style lang="scss">
  .synta {
    .synta-text {
      display: none;
    }
    .synta-code {
      padding: 0;
      // color: var(--c-text-lightest);
      font-family: var(--font-family-code);
      font-weight: 700;
      font-size: 1em;
      background-color: transparent;
    }
  }
</style>
