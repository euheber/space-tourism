<template>
    <nav v-click-outside="onClickOutside">
        <img src="/shared/logo.svg" alt="Space Travel logo">

        <ul id="desktop-tablet-navigation">
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

        <button id="mobile-menu-btn">
            <img src="/shared/icon-hamburger.svg" alt="Abrir menu" v-if="handleBtn" @click="handleMobileMenu">
            <img src="/shared/icon-close.svg" alt="Fechar menu" v-else @click="handleMobileMenu" >
        </button>

        <ul id="mobile-navigation" v-show="mobileMenu">
            <li :class="[currentPathname === 'home' ? 'active' : '']">
                <router-link to="/" class="mobile-clicable-area" @click="handleMobileMenu">
                    <span>00</span> Home
                </router-link>
            </li>
            <li :class="[currentPathname === 'destination' ? 'active' : '']">
                <router-link to="/destination" class="mobile-clicable-area" @click="handleMobileMenu">
                    <span>01</span> Destination
                </router-link>
            </li>
            <li :class="[currentPathname === 'crew' ? 'active' : '']">
                <router-link to="/crew" class="mobile-clicable-area" @click="handleMobileMenu">
                    <span>02</span> Crew
                </router-link>
            </li>
            <li :class="[currentPathname === 'technology' ? 'active' : '']">
                <router-link to="/technology" class="mobile-clicable-area" @click="handleMobileMenu">
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

const body = document.querySelector('body')
const router = useRoute()
let currentPathname = ref('home')
let handleBtn = ref(true)
let mobileMenu = ref(false)

const onClickOutside = () => {
    if (mobileMenu.value) {
        handleBtn.value = true
        mobileMenu.value =  false
    }

    if (mobileMenu.value) {
        body.style.overflowY = 'hidden'
    } else {
        body.style.overflow = 'auto'
    }
}

const handleMobileMenu = () => {
    handleBtn.value = !handleBtn.value
    mobileMenu.value = !mobileMenu.value

    if (mobileMenu.value) {
        body.style.overflowY = 'hidden'
    } else {
        body.style.overflow = 'auto'
    }
}

watchEffect(() => {
    currentPathname.value = router.name
})


</script>
<style lang="sass" scoped src="../../assets/scss/navigation/navigation.scss" />

