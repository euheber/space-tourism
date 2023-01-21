<template>
    <nav>
        <img src="/shared/logo.svg" alt="Space Travel logo">

        <ul>
            <li>
                <router-link to="/">
                    <span>00</span> Home
                </router-link>
            </li>
            <li>
                <router-link to="/destination">
                    <span>01</span> Destination
                </router-link>
            </li>
            <li><span>02</span> Crew</li>
            <li><span>03</span> Technology</li>
        </ul>
    </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';

</script>
<style lang="sass" scoped src="../../assets/scss/navigation/navigation.scss" />

