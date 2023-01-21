<template>
  <navigation />
</template>

<script setup>
import navigation from '../components/navigation/navigation.vue';

const body = document.querySelector('body')
body.style.background = 'url(destination/background-destination-desktop.jpg) no-repeat center'
body.style.backgroundSize = 'cover'
</script>

<style  lang="sass" scoped />

