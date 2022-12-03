<script lang="ts">
  export let style = '';
  export let active = false;
  export let placement: 'top' | 'bottom' | 'none' = 'top';

  let _style = '';

  if (placement === 'top') {
    _style += `
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
    `;
  } else if (placement === 'bottom') {
    _style += `
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      border-top: none;
    `;
  }
  _style += style;
</script>

<button class:active style={_style} on:click>
  <slot />
</button>

<style>
  button {
    background-color: var(--tab-bg, #000);
    color: var(--tab-fg, #ddd);
    padding: var(--tab-padding, 0.5rem);
    font-size: var(--tab-font-size, 0.9rem);
    border-color: var(--tab-border-color, #111);
    border-radius: var(--tab-border-radius, 0.5rem);
    border-style: solid;
    border-width: 0.1rem;
    cursor: pointer;
    width: var(--tab-width, auto);
  }
  button:hover {
    background-color: var(--tab-bg-hover, #111);
    color: var(--tab-fg-hover, #fff);
    border-color: var(--tab-border-color-hover, #222);
  }
  button.active {
    background-color: var(--tab-active-bg, #012c1c);
    border-color: var(--tab-active-border-color, #014637);
    color: var(--tab-active-fg, #6affcd);
  }
</style>
