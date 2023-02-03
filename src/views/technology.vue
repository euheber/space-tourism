<template>
    <main>
        <div id="tech-title">
            <h1>
                <span>03</span> SPACE LAUNCH 101
            </h1>
        </div>
        <div id="flex-box">
            <section id="space-launch">
                <section id="select-travel-info">
                    <div class="btns">
                        <button :class="[handleActiveBtn === 'vehicle' ? 'active' : '']"
                            @click="handleTerminology('vehicle')">1</button>
                        <button :class="[handleActiveBtn === 'spaceport' ? 'active' : '']"
                            @click="handleTerminology('spaceport')">2</button>
                        <button :class="[handleActiveBtn === 'capsule' ? 'active' : '']"
                            @click="handleTerminology('capsule')">3</button>
                    </div>
                    <div class="text-content">
                        <span>THE TERMINOLOGY…</span>
                        <h2>{{ terminologyContent.title }}</h2>
                        <p>
                            {{ terminologyContent.content }}
                        </p>
                    </div>
                </section>
            </section>

            <section id="img">
                <img :src="terminologyContent.imgDir" alt="">
            </section>
        </div>
    </main>
</template>

<script setup>
import navigation from '../components/navigation/navigation.vue';
import { ref } from 'vue';


let handleActiveBtn = ref('vehicle')


const handleTerminology = (valor) => {
    handleActiveBtn.value = valor

    switch (valor) {
        case 'vehicle':
            terminologyContent.value.title = 'LAUNCH VEHICLE'
            terminologyContent.value.content = ` A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`
            terminologyContent.value.imgDir = window.innerWidth <= 768 ? '/technology/image-launch-vehicle-landscape.jpg' : '/technology/image-launch-vehicle-portrait.jpg'
            break;
        case 'spaceport':
            terminologyContent.value.title = 'SPACEPORT'
            terminologyContent.value.content = ` A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.`
            terminologyContent.value.imgDir = window.innerWidth <= 768 ? '/technology/image-spaceport-landscape.jpg' : '/technology/image-spaceport-portrait.jpg'
            break;
        case 'capsule':
            terminologyContent.value.title = 'SPACE CAPSULE'
            terminologyContent.value.content = ` A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`
            terminologyContent.value.imgDir = window.innerWidth <= 768 ? '/technology/image-space-capsule-landscape.jpg' : '/technology/image-space-capsule-portrait.jpg'
            break;
    }
}

let terminologyContent = ref({
    title: 'LAUNCH VEHICLE',
    content: `
    A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`,
    imgDir: '/technology/image-launch-vehicle-portrait.jpg'
})
const body = document.querySelector('body')
body.style.background = 'url(technology/background-technology-desktop.jpg) no-repeat center'
body.style.backgroundSize = 'cover'
</script>





























<style lang="scss" scoped src="../assets/scss/technologyView/technology.scss" />

