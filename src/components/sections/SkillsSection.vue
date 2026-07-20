<script setup lang="ts">
import { computed } from 'vue'
import { skills } from '@/features/portfolio/model/portfolio'

const marqueeSkills = computed(() => [...skills, ...skills])
</script>

<template>
  <section id="skills" class="section-shell content-section">
    <div class="section-heading">
      <p class="eyebrow">Skills</p>
      <h2>Tools I use to build reliable backend systems.</h2>
      <p>Core technologies from the current portfolio base. The content can be replaced later with your final CV data.</p>
    </div>

    <div class="skill-marquee" aria-label="Technology skills">
      <div class="skill-track">
        <article v-for="(skill, index) in marqueeSkills" :key="`${skill.name}-${index}`" class="skill-logo-card">
          <img :src="skill.logo" :alt="`${skill.name} logo`" loading="lazy" decoding="async" />
          <span>{{ skill.name }}</span>
        </article>
      </div>
    </div>
  </section>
</template>
