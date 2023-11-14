<template>
    <div class="inner-width">
        * slot props
        <SlotComponent>
            <template v-slot="slotProps">{{ slotProps.item }}</template>
        </SlotComponent>
    </div>
</template>

<script setup="setup" lang="ts">
    import SlotComponent from '@/components/baseComponent/SlotComponent.vue';
</script>

<style scoped="scoped"></style>