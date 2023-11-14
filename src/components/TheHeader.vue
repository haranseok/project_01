<template>
    <header>
        <div class="header-inner inner-width">
            <div class="logo">
                study page
            </div>
            <ul>
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/about">About</router-link>
                </li>
				<li>
                    <router-link to="/inputs">Inputs</router-link>
                </li>

            </ul>
        </div>
    </header>
</template>

<script setup="setup" lang="ts"></script>

<style lang="scss" scoped="scoped">
header{
	width: 100%;
	background: rgb(206, 229, 238);
}

.header-inner{
	padding: 1% 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	.logo{
		color: #fff;
		font-size: 1.5rem;
		text-transform: capitalize;
	}
	ul{
		display: flex;
		li{
			padding: 0 0.5rem;
		}
	}
}
</style>