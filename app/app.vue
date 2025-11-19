<script setup lang="ts">
import { faLink } from '@fortawesome/free-solid-svg-icons';
import AboutMeSection from './components/mainSecion/AboutMeSection.vue';
import ContactMeSection from './components/mainSecion/ContactMeSection.vue';
import HeaderSection from './components/mainSecion/HeaderSection.vue';
import MyInfoSection from './components/mainSecion/MyInfoSection.vue';
import Projects from './components/mainSecion/Projects.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import type { tab } from './types/constant';

const scrollTarget = ref( {
        name: 'Home',
        link: '#Home'
    })
const handleScrollTo  = (target: tab) => {
  scrollTarget.value = {...target};
}

onMounted(() => {
  AOS.init({
    duration: 1000,
      once: false,
      easing: 'ease-in-out',
    })
})
const navbar = 'navbar'
</script>
<template>
  <div>
    <NuxtLayout :name="navbar" :scroll-target="scrollTarget" />
    <HeaderSection />
    <AboutMeSection @clickScrollTo="handleScrollTo" />
    <Projects />
    <ContactMeSection />
    <MyInfoSection />
  </div>
</template>
