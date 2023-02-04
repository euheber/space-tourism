<template>
   <main>
      <div id="meet-your-crew">
         <h1><span>02</span> Meet your crew</h1>
      </div>
      <section id="flex-box">
         <section id="crew-info">
            <div id="crew-member">
               <h1> {{ crewMate.title }}</h1>

               <h2> {{ crewMate.name }}</h2>

               <p>
                  {{ crewMate.content }}
               </p>
            </div>

            <section id="change-crewmate">
               <button class="btn" :class="[handleActiveBtn === 'commander' ? 'active' : '']"
                  @click="handleCrewMate('commander')"></button>
               <button class="btn" :class="[handleActiveBtn === 'specialist' ? 'active' : '']"
                  @click="handleCrewMate('specialist')"></button>
               <button class="btn" :class="[handleActiveBtn === 'pilot' ? 'active' : '']"
                  @click="handleCrewMate('pilot')"></button>
               <button class="btn" :class="[handleActiveBtn === 'engineer' ? 'active' : '']"
                  @click="handleCrewMate('engineer')"></button>
            </section>

         </section>

         <section id="profile-picture">
            <img :src="crewMate.imgDir" :alt="crewMate.name">
         </section>
      </section>
   </main>

</template>

<script setup>
import { ref } from 'vue';
const body = document.querySelector('body')
let handleActiveBtn = ref('commander')


const handleCrewMate = (valor) => {
   handleActiveBtn.value = valor
   switch (valor) {
      case 'commander':
         crewMate.value.title = 'commander'
         crewMate.value.name = 'Douglas Hurley'
         crewMate.value.content = ' Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2',
            crewMate.value.imgDir = '/crew/image-douglas-hurley.png'
         break;
      case 'specialist':
         crewMate.value.title = 'Mission Specialist '
         crewMate.value.name = 'MARK SHUTTLEWORTH'
         crewMate.value.content = 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
            crewMate.value.imgDir = '/crew/image-mark-shuttleworth.png'
         break;
      case 'pilot':
         crewMate.value.title = 'Pilot'
         crewMate.value.name = 'Victor Glover'
         crewMate.value.content = 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.'
         crewMate.value.imgDir = '/crew/image-victor-glover.png'
         break;
      case 'engineer':
         crewMate.value.title = 'Flight Engineer'
         crewMate.value.name = 'Anousheh Ansari'
         crewMate.value.content = 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.'
         crewMate.value.imgDir = '/crew/image-anousheh-ansari.png'
         break;
   }
}

let crewMate = ref({
   title: 'commander',
   name: 'Douglas Hurley',
   content: ' Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2',
   imgDir: '/crew/image-douglas-hurley.png'
})


if (window.innerWidth >= 1024) {
   body.style.background = 'url(crew/background-crew-desktop.jpg) no-repeat center'
   body.style.backgroundSize = 'cover'
}

if (window.innerWidth > 425 && window.innerWidth < 1024) {
   body.style.background = 'url(crew/background-crew-tablet.jpg) no-repeat center'
   body.style.backgroundSize = 'cover'
}

if (window.innerWidth <= 425) {
   body.style.background = 'url(crew/background-crew-mobile.jpg) no-repeat center'
   body.style.backgroundSize = 'cover'
}



const handleBg = () => {
   let windowWidth = window.innerWidth;
   if (windowWidth >= 1024) {
      body.style.background = 'url(crew/background-crew-desktop.jpg) no-repeat'
      body.style.backgroundSize = 'cover'
   } else if (windowWidth > 425) {
      body.style.background = 'url(crew/background-crew-tablet.jpg) no-repeat center'
      body.style.backgroundSize = 'cover'
   } else if (window.innerWidth <= 425) {
      body.style.background = 'url(crew/background-crew-mobile.jpg) no-repeat center'
      body.style.backgroundSize = 'cover'
   }
}

window.addEventListener('resize', handleBg)
</script>

<style lang="sasss" scoped src="../assets/scss/crewView/crewView.scss" />

