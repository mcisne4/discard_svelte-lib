<!-- === SCRIPT === -->
<script lang="ts">
  export let style = '';
</script>

<!-- === COMPONENT === -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" {style}>
  <path
    d="M119 250C119 177.651 177.651 119 250 119C322.349 119 381 177.651 381 250C381 322.349 322.349 381 250 381C177.651 381 119 322.349 119 250Z"
  />
  <path d="M250 89L250 16" />
  <path d="M363.844 136.156L415.463 84.5369" />
  <path d="M410 250L484 250" />
  <path d="M363.137 363.137L415.463 415.463" />
  <path d="M250 409L250 484" />
  <path d="M137.57 362.43L84.537 415.463" />
  <path d="M90 250L16 250" />
  <path d="M136.863 136.863L84.5369 84.5372" />
</svg>

<!-- === STYLE === -->
<style>
  svg {
    height: var(--svg-height, 1rem);
    rotate: var(--svg-rotate, 0deg);
    transition: var(--svg-transition, none);
  }
  path {
    stroke: var(--svg-stroke, #000);
    stroke-width: var(--svg-stroke-width, 15);
    fill: none;
    transition: var(--svg-transition-rays, var(--svg-transition, none));
  }
  path:first-child {
    stroke: none;
    fill: var(--svg-fill, #000);
    transition: var(--svg-transition-sun, var(--svg-transition, none));
  }
</style>
