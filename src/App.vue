<template>
  <navigation />
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navigation from './components/navigation/navigation.vue';
</script>

<style lang="sass" scoped />
