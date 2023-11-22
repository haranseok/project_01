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

			<label>
				<input type="checkbox" role="switch" />
				<span>알림</span>
			</label>

		</section>
	</div>
</template>

<script setup="setup" lang="ts">
import { provide, ref } from 'vue';

import SlotComponent from '@/components/baseComponent/SlotComponent.vue';
import Button from '@/components/items/UserButton.vue'
provide('msg', '안녕 provide!')

</script>

<style lang="scss" scoped="scoped">
label{
	display: felx;
	align-items: center;
	gap: 0.5rem;
	cursor: pointer;
}

input[type="checkbox"]{
	appearance: none; /* 기본 스타일 제거 */
	/* 알약 스타일 */
	position: relative;
	border: max(2px, 0.1em) solid gray;
	border-radius: 1.25em;
	width:2.25em;
	height: 1.25em;
	cursor: pointer;
	&::before{ /* 알약 스타일 안의 동그라미 */
		content: '';
		position: absolute;
		left: 0;
		width: 1em;
		height: 1em;
		border-radius: 50%;
		transform: scale(0.8);
		background-color: gray;
		transition: left 250ms linear;
	}

	&:checked::before{
		background-color: #fff;
		left: 1em;
	}
	&:checked{
		background: tomato;
		border-color: tomato;
	}
	&:focus-visible{
		outline-offset: max(2px, 0.1em);
		outline: max(2px, 0.1em) solid tomato;
	}
	&:enabled:hover {
  box-shadow: 0 0 0 max(4px, 0.2em) lightgray;
}
}



</style>