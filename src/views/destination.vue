<template>
  <header>
    <navigation />
  </header>
  <main>
    <section id="chosen-planet">
      <h1><span>01</span> Pick your destination</h1>
      <Transition name="custom-classes" enter-active-class="animate__animated animate__fadeIn animate__faster "
        leave-active-class="animate__animated animate__fadeOut animate__faster " mode="out-in">

        <img :src="planets.imgDir" alt="Moon picture" loading="lazy" :key="planets.imgDir">
      </Transition>
    </section>

    <section id="choose-destination">
      <ul>
        <li @click="handleChosenPlanet('moon')" :class="[handleActiveClass === 'moon' ? 'active' : '']">Moon</li>
        <li @click="handleChosenPlanet('mars')" :class="[handleActiveClass === 'mars' ? 'active' : '']">Mars</li>
        <li @click="handleChosenPlanet('europa')" :class="[handleActiveClass === 'europa' ? 'active' : '']">Europa</li>
        <li @click="handleChosenPlanet('titan')" :class="[handleActiveClass === 'titan' ? 'active' : '']">Titan</li>
      </ul>

      <h1>
        {{ planets.planet }}
      </h1>

      <p class="planet-info">
        {{ planets.content }}
      </p>

      <div id="travel-info-footer">
        <div id="distance">
          <p>AVG. Distance</p>
          <h2> {{ planets.distance }}</h2>
        </div>

        <div id="travel-time">
          <p>Est. travel time</p>
          <h2>{{ planets.travelTime }}</h2>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, reactive } from 'vue';
import navigation from '../components/navigation/navigation.vue';
let handleActiveClass = ref('moon');

const handleChosenPlanet = (valor) => {
  handleActiveClass.value = valor
  switch (valor) {
    case 'moon':
      planets.value.planet = valor
      planets.value.content = 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.'
      planets.value.distance = '384,400 km'
      planets.value.travelTime = '3 days'
      planets.value.imgDir = '/destination/image-moon.png'
      break;
    case 'mars':
      planets.value.planet = valor
      planets.value.content = 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!'
      planets.value.distance = '225 MIL. km'
      planets.value.travelTime = '9 months'
      planets.value.imgDir = '/destination/image-mars.png'
      break;
    case 'europa':
      planets.value.planet = valor
      planets.value.content = 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.'
      planets.value.distance = '628 MIL. km'
      planets.value.travelTime = '3 years'
      planets.value.imgDir = '/destination/image-europa.png'
      break;
    case 'titan':
      planets.value.planet = valor
      planets.value.content = 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.'
      planets.value.distance = '1.6 BIL. km'
      planets.value.travelTime = '7 years'
      planets.value.imgDir = '/destination/image-titan.png'
      break;
  }
}


let planets = ref({
  planet: 'moon',
  content: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
  imgDir: '/destination/image-moon.png',
  distance: '384,400 km',
  travelTime: '3 days'
})




const body = document.querySelector('body')
body.style.background = 'url(destination/background-destination-desktop.jpg) no-repeat center'
body.style.backgroundSize = 'cover'
</script>

<style  lang="sass" scoped src="../assets/scss/destinationView/destinationView.scss" />

