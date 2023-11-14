<template>
    <div class="inner-width">
        <h2>slot props</h2>
        <SlotComponent>
            <template v-slot="slotProps">{{ slotProps.item }}</template>
        </SlotComponent>

        <section>
            <h2>provide / inject</h2>
            <div class="contents-wrap"></div>
        </section>
    </div>
</template>

<script setup="setup" lang="ts">
    import {provide} from 'vue';

    import SlotComponent from '@/components/baseComponent/SlotComponent.vue';

		provide('msg','안녕 provide!')
</script>

<style scoped="scoped"></style>