<template>
  <header>
    <navigation />
  </header>
  <main>
    <section id="chosen-planet">
      <h1><span>01</span> Pick your destination</h1>
      <img :src="planets.imgDir" alt="Moon picture" loading="lazy">
    </section>

    <section id="choose-destination">
      <ul>
        <li @click="handleActiveClass = 'moon'" :class="[handleActiveClass === 'moon' ? 'active' : '']">Moon</li>
        <li @click="handleActiveClass = 'mars'" :class="[handleActiveClass === 'mars' ? 'active' : '']">Mars</li>
        <li @click="handleActiveClass = 'europa'" :class="[handleActiveClass === 'europa' ? 'active' : '']">Europa</li>
        <li @click="handleActiveClass = 'titan'" :class="[handleActiveClass === 'titan' ? 'active' : '']">Titan</li>
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
import navigation from '../components/navigation/navigation.vue';
import { ref } from 'vue';

let handleActiveClass = ref('moon');


let planets = {
  planet: 'moon',
  content: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
  imgDir: '/destination/image-moon.png',
  distance: '384,400 km',
  travelTime: '3 days'
}

const body = document.querySelector('body')
body.style.background = 'url(destination/background-destination-desktop.jpg) no-repeat center'
body.style.backgroundSize = 'cover'
</script>

<style  lang="sass" scoped src="../assets/scss/destinationView/destinationView.scss" />

