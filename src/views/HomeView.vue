<script setup lang="ts">
import SiteHeader from '@/components/layout/SiteHeader.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
</script>

<template>
  <div class="app-page">
    <SiteHeader />
    <main>
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
    <footer class="site-footer section-shell">
      <span
        ><svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" />
          <path d="M14.5 9.5a3.5 3.5 0 1 0 0 5" />
        </svg>
        Copyright by Khuat Van Nguyen.</span
      >
    </footer>
  </div>
</template>
