<template>
<ul>
    <li v-for="(list, i) in items" :key="i">
    <slot :item="list"></slot>
    </li>
</ul>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const items = ref([1,2,3])
</script>

<style lang="scss" scoped>

</style>