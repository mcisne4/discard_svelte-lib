<!-- === SCRIPT === -->
<script lang="ts">
  export let style = '';
</script>

<!-- === COMPONENT === -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" {style}>
  <polygon
    points="319.87 94.06 292.59 121.15 399.69 250 292.78 378.65 319.87 405.94 475.81 250 319.87 94.06"
  />
  <polygon
    points="100.31 250 207.41 121.15 180.13 94.06 24.19 250 180.13 405.94 207.22 378.65 100.31 250"
  />
</svg>

<!-- === STYLE === -->
<style>
  svg {
    fill: var(--svg-fill, #000);
    stroke: var(--svg-stroke, #000);
    stroke-width: var(--svg-stroke-width, 20);
    height: var(--svg-height, 1rem);
    rotate: var(--svg-rotate, 0deg);
    transition: var(--svg-transition, none);
  }
</style>
