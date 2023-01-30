<template>
    <nav>
        <img src="/shared/logo.svg" alt="Space Travel logo">

        <ul>
            <li :class="[currentPathname === 'home' ? 'active' : '']">
                <router-link to="/" class="clicable-area">
                    <span>00</span> Home
                </router-link>
            </li>
            <li :class="[currentPathname === 'destination' ? 'active' : '']">
                <router-link to="/destination" class="clicable-area">
                    <span>01</span> Destination
                </router-link>
            </li>
            <li :class="[currentPathname === 'crew' ? 'active' : '']">
                <router-link to="/crew" class="clicable-area">
                    <span>02</span> Crew
                </router-link>
            </li>
            <li :class="[currentPathname === 'technology' ? 'active' : '']">
                <router-link to="/technology" class="clicable-area">
                    <span>03</span> Technology
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { useRoute } from 'vue-router'
import { watchEffect } from 'vue'
import { ref } from 'vue';
const router = useRoute()

let currentPathname =  ref('home')

watchEffect(() => {
    currentPathname.value = router.name
})



</script>
<style lang="sass" scoped src="../../assets/scss/navigation/navigation.scss" />

