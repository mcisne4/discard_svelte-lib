<script lang="ts">
  export let style = '';
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" {style}>
  <path d="M 40 40 L 400 250 L 40 460" />
</svg>

<style>
  svg {
    fill: var(--svg-fill, none);
    stroke: var(--svg-stroke, #000);
    stroke-width: var(--svg-stroke-width, 80);
    height: var(--svg-height, 1rem);
    rotate: var(--svg-rotate, 0deg);
  }
</style>
