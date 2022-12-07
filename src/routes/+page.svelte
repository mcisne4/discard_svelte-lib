<script lang="ts">
  import SvgSun from '$lib/svg/SvgSun.svelte';
  import SvgMoon from '$lib/svg/SvgMoon.svelte';
  import { CodeBlock, CodeBlockFile } from '$lib/components';
</script>

<SvgSun />
<SvgMoon />
<CodeBlock code="Hello World" description="Some Content" />
<CodeBlockFile code="Hello World" filename="svg/SomeFile.svelte" />

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
