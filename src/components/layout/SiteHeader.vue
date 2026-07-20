<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const isDark = ref(true)

const themeLabel = computed(() => (isDark.value ? 'Switch to light theme' : 'Switch to dark theme'))

function applyTheme(nextIsDark: boolean) {
  isDark.value = nextIsDark
  document.documentElement.classList.toggle('dark', nextIsDark)
  localStorage.setItem('portfolio-theme', nextIsDark ? 'dark' : 'light')
}

function toggleTheme() {
  applyTheme(!isDark.value)
}

onMounted(() => {
  const savedTheme = localStorage.getItem('portfolio-theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  applyTheme(savedTheme ? savedTheme === 'dark' : prefersDark)
})
</script>

<template>
  <header class="site-header">
    <a class="brand" href="#home" aria-label="Portfolio home">
      <span class="brand-mark" aria-hidden="true">
        <span></span>
      </span>
      <span class="brand-text">Backend Portfolio</span>
    </a>

    <nav class="desktop-nav" aria-label="Primary navigation">
      <a v-for="item in navItems" :key="item.href" :href="item.href">{{ item.label }}</a>
    </nav>

    <button class="theme-toggle" type="button" :aria-label="themeLabel" @click="toggleTheme">
      <svg v-if="isDark" aria-hidden="true" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19" />
      </svg>
      <svg v-else aria-hidden="true" viewBox="0 0 24 24" fill="none">
        <path d="M21 14.5A8.5 8.5 0 0 1 9.5 3a7 7 0 1 0 11.5 11.5Z" />
      </svg>
    </button>
  </header>
</template>


