<script setup lang="ts">
import { projects, stackLogos } from '@/features/portfolio/model/portfolio'
</script>

<template>
  <section id="projects" class="section-shell content-section">
    <div class="section-heading">
      <p class="eyebrow">Projects</p>
      <h2>Selected systems and product foundations.</h2>
      <p>Initial content is intentionally data-driven so later refactors can swap real case studies in one place.</p>
    </div>

    <div class="project-grid refined-project-grid">
      <article
        v-for="(project, index) in projects"
        :key="project.name"
        class="project-card refined-project-card"
        :class="{ featured: index === 0 }"
      >
        <div class="project-card-header">
          <span class="project-status">{{ project.status }}</span>
          <span class="project-number">{{ String(index + 1).padStart(2, '0') }}</span>
        </div>

        <div class="project-card-body">
          <p class="project-type">{{ project.type }}</p>
          <h3>{{ project.name }}</h3>
          <p>{{ project.summary }}</p>
        </div>

        <ul class="project-highlights" aria-label="Project highlights">
          <li v-for="highlight in project.highlights" :key="highlight">{{ highlight }}</li>
        </ul>

        <div class="tech-stack" aria-label="Technology stack">
          <span v-for="stack in project.stack" :key="stack" class="tech-chip">
            <img v-if="stackLogos[stack]" :src="stackLogos[stack]" :alt="`${stack} logo`" loading="lazy" decoding="async" />
            <span v-else class="tech-fallback" aria-hidden="true">{{ stack.slice(0, 2) }}</span>
            {{ stack }}
          </span>
        </div>
      </article>
    </div>
  </section>
</template>
