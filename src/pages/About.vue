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

        <section>
            <h2>사용자 정의 버튼</h2>
<Button>
	button
</Button>

<Button sm background-red sm_pill>
	button
</Button>

<Button lg>
	button
</Button>

<Button background-green sm_pill text-white>
	button
</Button>

        </section>
    </div>
</template>

<script setup="setup" lang="ts">
import { provide } from 'vue';

import SlotComponent from '@/components/baseComponent/SlotComponent.vue';
import Button from '@/components/items/UserButton.vue'
provide('msg', '안녕 provide!')
</script>

<style scoped="scoped"></style>