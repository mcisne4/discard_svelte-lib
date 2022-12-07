<!-- === TYPESCRIPT === -->
<script lang="ts">
  export let code: string;
  export let style = '';
  export let filename: string;
  export let margin = '0.5rem 0';

  let widthCode: number;
  let widthContainer: number;
  let widthDescription: number = 0;

  let computedWidth = '';
  $: if (widthContainer - 4 > widthCode) {
    if (widthDescription > widthCode) {
      computedWidth = `${widthDescription + 4}px`;
    } else {
      computedWidth = `${widthCode + 4}px`;
    }
  }
</script>

<!-- === COMPONENT === -->
<div
  class="code-block-container"
  bind:clientWidth={widthContainer}
  {style}
  style:width={computedWidth}
  style:margin
>
  {#if filename}
    <div class="code-block-description">
      <p class="code-block-description-content" bind:clientWidth={widthDescription}>
        File: <em>{filename}</em>
      </p>
    </div>
  {/if}

  <div class="code-block-code">
    <pre><code bind:clientWidth={widthCode}>{code}</code></pre>
  </div>
</div>

<!-- === STYLE === -->
<style>
  .code-block-container {
    border: 1px solid var(--code-block-accent-bg, #1f1f1f);
    overflow: hidden;
    transition: border 1s;
  }
  .code-block-description {
    background-color: var(--code-block-accent-bg, #1f1f1f);
    color: var(--code-block-accent-fg, #ddd);
    transition: all 1s;
  }
  .code-block-description-content {
    display: inline-block;
    padding: 0.25rem 1rem;
    margin: 0;
  }
  .code-block-description-content em {
    color: var(--code-block-accent-fg-highlight, #fff);
  }
  .code-block-code {
    padding: 0;
    margin: 0;
  }
  pre {
    overflow: auto;
    border: none;
    background-color: var(--code-block-bg, #ddd);
    margin: 0;
  }
  code {
    display: inline-block;
    tab-size: 4;
    background-color: var(--code-block-bg, #ddd);
    color: var(--code-block-fg, #1f1f1f);
    border: none;
    padding: 1rem;
  }
</style>
