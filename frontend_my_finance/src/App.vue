<script setup lang="ts">
import HeaderLayout from './layouts/HeaderLayout.vue';

</script>

<template>
 <div id="app">
   <HeaderLayout />
   <router-link to="/"></router-link>

   <router-view></router-view>
 </div>
</template>

<style scoped>

</style>
