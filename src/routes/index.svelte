<script lang="ts">
    
    import { onMount } from 'svelte';
    import { run } from './pixitest';

    let el: HTMLDivElement;

    // have to make sure there is an element to append to
    onMount(async () => {
        run(el)
    })
    
</script>

<div bind:this={el}>

</div>