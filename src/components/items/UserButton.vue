<template>
<button v-bind="$attrs" :type="type" :class="classes" ref="button">
    <slot></slot>
</button>
</template>

<script setup lang="ts">
import { parserOptions } from '@vue/compiler-dom';
import {ref, onMounted, useAttrs} from 'vue'

const attrs = useAttrs() // non-prop의 모든 속성을 그대로 button 엘리먼트에 넘겨주겠다는 것을 의미 즉 $attrs는 props에 정의도지 않은 속성을 의미
const props = defineProps({
    type:{
        type: String,
        default:'button',
        valdator:(value:any)=> ['button','submit','reset'].includes(value) // 버튼의 기본은 submit으로 type을 명시해주는 것이 좋다.
    },
    sm:Boolean,
    md:{
        type:Boolean,
        default:true,
    },
    lg: Boolean,
    pill:Boolean,
    sm_pill:Boolean
});

const classes = ref<any>([]);
const button = ref<any>(null)

if(props.sm) {
    classes.value.push('sm')
}else if(props.lg){
    classes.value.push('lg')
}else{
    classes.value.push('md')
}

if(props.pill){
    classes.value.push('pill')
}else if(props.sm_pill){
    classes.value.push('sm-pill')
}

onMounted(()=>{
    Object.keys(attrs).forEach((attr)=>{
        if(attr.startsWith('text-')){
            button.value.style.color = attr.substring(5)
        }
        if(attr.startsWith('background-')){
            button.value.style.backgroundColor=attr.substring(11)
        }
    })
})

</script>

<style lang="scss" scoped>
button{
    margin: 0 0.5rem;
    padding: 1%;
}
.sm{
    height: 2rem;
    font-size: 1rem;
}

.md{
height: 3rem;
font-size: 1.5rem;
}

.lg{
height: 4rem;
font-size: 2.2rem;
}

.pill{
    border-radius: 16px;
}

.sm-pill{
    border-radius: 3px;
}
</style>