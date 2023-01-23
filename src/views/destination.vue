<template>
  <header>
    <navigation />
  </header>
  <main>
    <section id="chosen-planet">
      <h1><span>01</span> Pick your destination</h1>
      <img src="/destination/image-moon.png" alt="Moon picture" loading="lazy">
    </section>

    <section id="choose-destination">
      <ul>
        <li>Moon</li>
        <li>Mars</li>
        <li>Europa</li>
        <li>Titan</li>
      </ul>

      <h1>
        moon
      </h1>

      <p class="planet-info">
        See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come
        back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
      </p>

      <div id="travel-info-footer">
        <div id="distance">
          <p>AVG. Distance</p>
          <h2>384,400 km</h2>
        </div>

        <div id="travel-time">
          <p>Est. travel time</p>
          <h2>3 days</h2>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import navigation from '../components/navigation/navigation.vue';


let planets = {
  planet: 'MOON',
  content: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
  imgDir: '',
  distance: '384,400 km',
  travelTime: '3 days'
}

const body = document.querySelector('body')
body.style.background = 'url(destination/background-destination-desktop.jpg) no-repeat center'
body.style.backgroundSize = 'cover'
</script>

<style  lang="sass" scoped src="../assets/scss/destinationView/destinationView.scss" />

