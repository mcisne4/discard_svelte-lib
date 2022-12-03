<!-- === TYPESCRIPT === -->
<script lang="ts">
  import TabButton from '../components/TabButton.svelte';

  export let placement: 'top' | 'bottom' | 'none' = 'top';

  interface Tab {
    name: string;
    active: boolean;
    onClick: Function;
  }
  export let tabs: Tab[];
  export let tabStyle = '';
  export let style = '';

  let _style = '';
  if (placement === 'top') {
    _style = 'border-top: none;';
  } else if (placement === 'bottom') {
    _style = 'border-bottom: none;';
  } else {
    _style = 'border-top: none; border-bottom: none;';
  }
  _style += style;
</script>

<!-- === COMPONENT === -->
<div class="tab-row" style={_style}>
  {#each tabs as { name, active, onClick }}
    <TabButton {active} {placement} style={tabStyle} on:click={() => onClick()}>
      {name}
    </TabButton>
  {/each}
</div>

<!-- === STYLE === -->
<style>
  .tab-row {
    display: flex;
    gap: var(--tab-row-gap, 0.1rem);
    padding-left: var(--tab-row-indent, 1rem);
    border-style: solid;
    border-width: var(--tab-row-border-width, 0.3rem);
    border-color: var(--tab-row-border-color, #000);
    border-left: none;
    border-right: none;
  }
</style>
