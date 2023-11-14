<template>
<ul>
    <li v-for="(list, i) in items" :key="i">
    <slot :item="list"></slot>
    </li>
</ul>
<div>{{ msg }}</div>
</template>

<script setup lang="ts">
import {ref, inject} from 'vue'
const items = ref([1,2,3])

const msg = inject('msg')
</script>

<style lang="scss" scoped>

</style>