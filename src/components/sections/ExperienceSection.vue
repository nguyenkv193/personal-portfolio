<script setup lang="ts">
import { experiences, stackLogos } from '@/features/portfolio/model/portfolio'
</script>

<template>
  <section id="experience" class="section-shell content-section">
    <div class="section-heading narrow-heading">
      <p class="eyebrow">Experience</p>
      <h2>Workflow-heavy work, shaped into clear backend boundaries.</h2>
    </div>

    <div class="experience-list">
      <article v-for="(item, index) in experiences" :key="`${item.company}-${item.role}`" class="experience-card">
        <div class="experience-index">{{ String(index + 1).padStart(2, '0') }}</div>

        <div class="experience-main">
          <div class="experience-heading">
            <div>
              <p class="experience-period">{{ item.period }} / {{ item.location }}</p>
              <h3>{{ item.role }}</h3>
            </div>
            <span>{{ item.company }}</span>
          </div>

          <p class="experience-summary">{{ item.summary }}</p>

          <ul class="experience-highlights" aria-label="Experience highlights">
            <li v-for="highlight in item.highlights" :key="highlight">{{ highlight }}</li>
          </ul>

          <div class="compact-stack" aria-label="Technology stack">
            <span v-for="stack in item.stack" :key="stack">
              <img v-if="stackLogos[stack]" :src="stackLogos[stack]" :alt="`${stack} logo`" loading="lazy" decoding="async" />
              <span v-else class="compact-stack-fallback" aria-hidden="true">{{ stack.slice(0, 2) }}</span>
              {{ stack }}
            </span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

