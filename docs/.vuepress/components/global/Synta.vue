<template>
  <code class="synta">{{ text }}</code>
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
    padding: 0 0.8em;
    font-weight: 400;
    font-family: var(--font-family-code);
    // color: var(--c-text-lighter);
    color: var(--c-text-lightest);
    // background-color: var(--c-bg-light);
    background: none;
    border-radius: 3px;
  }
</style>