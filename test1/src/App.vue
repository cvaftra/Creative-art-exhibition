<template>
  <div id="app">
    <NavBar />
    <HeroSection />
    <ExhibitionHighlights />
    <NewsSection />
    <ArtistsShowcase />
    <VisitGuide />
    <PartnersSection />
    <AppFooter />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import HeroSection from './components/HeroSection.vue';
import ExhibitionHighlights from './components/ExhibitionHighlights.vue';
import NewsSection from './components/NewsSection.vue';
import ArtistsShowcase from './components/ArtistsShowcase.vue';
import VisitGuide from './components/VisitGuide.vue';
import PartnersSection from './components/PartnersSection.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    HeroSection,
    ExhibitionHighlights,
    NewsSection,
    ArtistsShowcase,
    VisitGuide,
    PartnersSection,
    AppFooter
  }
};
</script>

<style>
/* Global styles can be added here */
</style>