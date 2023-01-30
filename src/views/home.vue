<template>
    <main>
        <section id="text-content">
            <h1>
                SO, YOU WANT TO TRAVEL TO
            </h1>

            <h2>SPACE</h2>

            <p>
                Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover
                kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world
                experience!
            </p>
        </section>

        <section id="explore">
            <h1>EXPLORE</h1>
        </section>
    </main>
</template>

<script setup>
import navigation from '../components/navigation/navigation.vue';
import { ref, watch } from 'vue';
const body = document.querySelector('body');
body.style.background = 'url(home/background-home-desktop.jpg) no-repeat center'
body.style.backgroundSize = 'cover'

const handleBg = () => {
    let windowWidth = window.innerWidth;
    if (windowWidth >= 1024) {
        body.style.background = 'url(home/background-home-desktop.jpg) no-repeat'
        body.style.backgroundSize = 'cover'
        body.style.imageRendering = 'pixelated'
    } else if (windowWidth >= 768) {
        body.style.background = 'url(home/background-home-tablet.jpg) no-repeat center'
        body.style.backgroundSize = 'cover'
    }
}

window.addEventListener('resize', handleBg)
</script>



















<style scoped lang="scss" src="../assets/scss/homeView/homeview.scss" />
