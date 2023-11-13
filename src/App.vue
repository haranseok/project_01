<template>
    <TheHeader/>
    <component :is="$route.meta.layout || 'div'">
        <router-view></router-view>
    </component>
</template>

<script lang="ts" setup="setup">
    import TheHeader from './components/TheHeader.vue';
</script>