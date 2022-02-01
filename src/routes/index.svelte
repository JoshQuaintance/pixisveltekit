<script lang="ts">
    
    import { onMount } from 'svelte';
    import { run } from './pixitest';

    let el: HTMLDivElement;

    onMount(async () => {
        run(el)
    })
    
</script>

<div bind:this={el}>

</div>