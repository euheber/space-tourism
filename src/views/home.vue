<template>
    <header>
        <navigation />
    </header>
</template>

<script setup>
import navigation from '../components/navigation/navigation.vue';

const body = document.querySelector('body')
body.style.backgroundImage = 'url(home/background-home-desktop.jpg)'
</script>

<style scoped lang="scss" src="../assets/scss/homeView/homeview.scss" />
