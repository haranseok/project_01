<template>
  <ul>
    <li><router-link to="/">Home</router-link></li>
    <li><router-link to="/about">About</router-link></li>
  </ul>
  
  <!-- 핵심이 되는 부분 -->
  <component :is="$route.meta.layout || 'div'">
    <router-view></router-view>
  </component>
</template>

<script lang="ts" setup>
  //
</script>
