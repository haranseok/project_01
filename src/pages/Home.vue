<template>
    <div class="inner-width">
        <h2>small Items</h2>
        <p v-for="item in small_items" :key='item.id'>{{ item.text }}</p>
        <p>*****************************</p>
        <p v-for="item in big_items" :key='item.id'>{{ item.text }}</p>
				<br/>

				<div class="wahth-inner">
					<p>{{ count_c_1 }}</p>
					<v-btn @click="count_c_1++">Composition API 1st 카운트 증가</v-btn>
					<p>{{ count_c_2 }}</p>
					<v-btn @click="count_c_2++">Composition API 2nd 카운트 증가</v-btn>
					<p>상태: {{ state }}</p>
					<v-btn @click="onStop()">WatchEffect 중지</v-btn>

				</div>
    </div>
</template>

<script lang="ts" setup>
    import {reactive, ref, computed, watch, watchEffect} from 'vue'

const count_c_1 = ref(0);
const count_c_2 = ref(0)
const state = ref('실핼 중')

    const arr = reactive([
        {
            id: 1,
            text: '1번 아이템'
        }, {
            id: 2,
            text: '2번 아이템'
        }, {
            id: 3,
            text: '3번 아이템'
        }, {
            id: 4,
            text: '4번 아이템'
        }, {
            id: 5,
            text: '5번 아이템'
        }
    ]);

    const small_items = computed(() => {
        return arr.filter((i) => i.id < 3)
    })

    const big_items = computed(() => {
        return arr.filter((i) => i.id >= 3)
    })

		watch(count_c_1,(cur, prev)=>{
			console.log('composition API' + prev + '==>' + cur)
		},{
			immediate: true
		})

		watch([count_c_1, count_c_2],(cur, prev)=>{
			console.log('composition API Multiple Watch' + prev + '==>' + cur)
		})

const stop = watchEffect(()=>{
	console.log('composition Api watcheffect called'+ count_c_2.value)
},{
	flush: 'post'
})

const onStop = () =>{
	state.value = '중지'
	stop()
}
</script>

<style scoped="scoped"></style>