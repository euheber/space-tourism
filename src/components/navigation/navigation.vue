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
            <li> <router-link to="/crew" class="clicable-area">
                    <span>02</span> Crew
                </router-link>
            </li>
            <li>
                <router-link to="/destination" class="clicable-area">
                    <span>03</span> Technology
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { useRouter } from 'vue-router'

const router = useRouter()

let currentPathname = router.currentRoute.value.name;

</script>
<style lang="sass" scoped src="../../assets/scss/navigation/navigation.scss" />

