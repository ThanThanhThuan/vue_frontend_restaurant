<script setup>
import NavBar from '../components/NavBar.vue'
import HeroSection from '../components/HeroSection.vue'
import IntroSection from '../components/IntroSection.vue'
import Delicatessen from '../components/Delicatessen.vue'
import EventsSection from '../components/EventsSection.vue'
import FooterContact from '../components/FooterContact.vue'
</script>

<template>
  <div class="antialiased text-dark">
    <NavBar />
    <main>
      <HeroSection />
      <IntroSection />
      <Delicatessen />
      <EventsSection />
    </main>
    <FooterContact />
  </div>
</template>