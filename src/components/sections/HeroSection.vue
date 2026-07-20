<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { heroStack, profile, stackLogos, stats } from '@/features/portfolio/model/portfolio'

const typewriterPhrases: readonly [string, ...string[]] = [
  "Hi, I'm Khuat Van Nguyen",
  "I'm a Backend Developer",
  'I build Spring Boot APIs',
  'I design reliable backend workflows',
]

const phraseIndex = ref(0)
const charIndex = ref(0)
const isDeleting = ref(false)
let typewriterTimer: number | undefined

const currentPhrase = computed(() => typewriterPhrases[phraseIndex.value] ?? typewriterPhrases[0])
const typedText = computed(() => currentPhrase.value.slice(0, charIndex.value))

function tickTypewriter() {
  const phrase = currentPhrase.value

  if (!isDeleting.value && charIndex.value < phrase.length) {
    charIndex.value += 1
    typewriterTimer = window.setTimeout(tickTypewriter, 72)
    return
  }

  if (!isDeleting.value && charIndex.value === phrase.length) {
    isDeleting.value = true
    typewriterTimer = window.setTimeout(tickTypewriter, 1250)
    return
  }

  if (isDeleting.value && charIndex.value > 0) {
    charIndex.value -= 1
    typewriterTimer = window.setTimeout(tickTypewriter, 38)
    return
  }

  isDeleting.value = false
  phraseIndex.value = (phraseIndex.value + 1) % typewriterPhrases.length
  typewriterTimer = window.setTimeout(tickTypewriter, 260)
}

onMounted(() => {
  typewriterTimer = window.setTimeout(tickTypewriter, 360)
})

onBeforeUnmount(() => {
  if (typewriterTimer) {
    window.clearTimeout(typewriterTimer)
  }
})
</script>

<template>
  <section id="home" class="hero-section section-shell">
    <div class="hero-copy">
      <p class="eyebrow">{{ profile.availability }}</p>
      <h1 class="typewriter-heading" aria-live="polite">
        <span>{{ typedText }}</span>
        <span class="typewriter-cursor" aria-hidden="true"></span>
      </h1>

      <div class="hero-identity-row">
        <p class="role-line">{{ profile.role }}</p>
        <div class="social-links hero-social-links" aria-label="Social links">
          <a v-for="link in profile.links" :key="link.label" :href="link.href" class="social-chip">
            <img
              v-if="link.icon"
              :src="link.icon"
              :alt="`${link.label} icon`"
              loading="lazy"
              decoding="async"
            />
            <span v-else class="social-fallback-icon" aria-hidden="true">in</span>
            <span>
              <strong>{{ link.label }}</strong>
              <small>{{ link.value }}</small>
            </span>
          </a>
        </div>
      </div>

      <p class="hero-summary">{{ profile.summary }}</p>

      <div class="hero-actions" aria-label="Primary actions">
        <a class="button button-primary" href="#projects">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
            <path d="M4 6.5h6l2 2H20v9.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6.5Z" />
            `r`n
            <path d="m10 13-2 2 2 2M14 13l2 2-2 2" />
          </svg>
          View Projects
        </a>
        <a class="button button-outline" :href="`mailto:${profile.email}`">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
            <path d="M22 2 11 13" />
            `r`n
            <path d="m22 2-7 20-4-9-9-4 20-7Z" />
          </svg>
          Contact Me
        </a>
      </div>
    </div>

    <div class="developer-panel" aria-label="Developer profile preview">
      <div class="panel-topbar">
        <span></span>
        <span></span>
        <span></span>
        <strong>backend.session</strong>
      </div>

      <div class="console-headline">
        <span>Backend Focus</span>
        <strong>Spring Boot services, secure APIs, batch workflows.</strong>
      </div>

      <div
        class="code-block code-lines"
        role="img"
        aria-label="CandidateWorkflow service code sample"
      >
        <p><span>service</span> CandidateWorkflow {</p>
        <p class="code-indent">role = '{{ profile.role }}'</p>
        <p class="code-indent">database = 'PostgreSQL'</p>
        <p class="code-indent">framework = 'Spring Boot'</p>
        <p class="code-indent">priority = 'maintainable behavior'</p>
        <p>}</p>
      </div>

      <div class="terminal-block"><span>$</span> queue.parse --validate --persist --notify</div>

      <div class="stack-list developer-stack-list">
        <span v-for="item in heroStack" :key="item">
          <img
            v-if="stackLogos[item]"
            :src="stackLogos[item]"
            :alt="`${item} logo`"
            loading="lazy"
            decoding="async"
          />
          <span v-else class="stack-fallback" aria-hidden="true">{{ item.slice(0, 2) }}</span>
          {{ item }}
        </span>
      </div>
    </div>

    <div class="stats-grid" aria-label="Portfolio stats">
      <div v-for="stat in stats" :key="stat.label" class="stat-card">
        <span class="stat-icon" aria-hidden="true">
          <svg v-if="stat.icon === 'projects'" viewBox="0 0 24 24" fill="none">
            <path d="M4 6.5h6l2 2H20v9.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6.5Z" />
            `r`n
            <path d="m10 13-2 2 2 2M14 13l2 2-2 2" />
          </svg>
          <svg v-else-if="stat.icon === 'stack'" viewBox="0 0 24 24" fill="none">
            <path d="m12 3 8 4-8 4-8-4 8-4Z" />
            <path d="m4 12 8 4 8-4M4 17l8 4 8-4" />
          </svg>
          <svg v-else-if="stat.icon === 'growth'" viewBox="0 0 24 24" fill="none">
            <path d="M4 19h16M7 16l4-4 3 3 5-7" />
            <path d="M15 8h4v4" />
          </svg>
          <svg v-else viewBox="0 0 24 24" fill="none">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </span>
        <strong>{{ stat.value }}</strong>
        <span>{{ stat.label }}</span>
      </div>
    </div>
  </section>
</template>
