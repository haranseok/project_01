<template>
    <div>
<h2>small Items</h2>
<p v-for="item in small_items" :key='item.id'>{{ item.text }}</p>
<p>*****************************</p>
<p v-for="item in big_items" :key='item.id'>{{ item.text }}</p>
    </div>
</template>

<script setup lang="ts">
import {reactive, ref, computed} from 'vue'

const arr = reactive([
    {id:1, text:'1번 아이템'},
    {id:2, text:'2번 아이템'},
    {id:3, text:'3번 아이템'},
    {id:4, text:'4번 아이템'},
    {id:5, text:'5번 아이템'},
]);

const small_items = computed(()=>{
    return arr.filter((i) => i.id < 3)
})

const big_items = computed(()=>{
    return arr.filter((i) => i.id >= 3)
})
</script>

<style scoped>

</style>