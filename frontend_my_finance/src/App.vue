<script setup lang="ts">
import HeaderLayout from './layouts/HeaderLayout.vue';
import NavbarComp from './components/NavbarComp.vue';

</script>

<template>
 <div id="app" class="bg-dark">
   <HeaderLayout />
   <NavbarComp />

   <router-view></router-view>
 </div>
</template>

<style scoped>

</style>
