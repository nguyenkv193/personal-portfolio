<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const menuOpen = ref(false)
const currentYear = new Date().getFullYear()

const projects = [
  { number: '01', name: 'Northstar', type: 'Product platform', year: '2026', accent: 'lime', note: 'A clearer path from question to action.' },
  { number: '02', name: 'Kindred', type: 'Digital care', year: '2025', accent: 'coral', note: 'Careful systems for human moments.' },
  { number: '03', name: 'Common Ground', type: 'Civic technology', year: '2024', accent: 'blue', note: 'Tools that make participation easier.' },
]

const principles = [
  ['01', 'Start with the real problem', 'Make the useful thing before making it look clever.'],
  ['02', 'Give systems room to breathe', 'Clear hierarchy and considerate details earn their keep.'],
  ['03', 'Build for the next decision', 'Good code keeps a product adaptable once it leaves the screen.'],
]

function closeMenu() {
  menuOpen.value = false
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') closeMenu()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <div class="portfolio-shell">
    <a class="skip-link" href="#main-content">Skip to content</a>

    <header class="site-header">
      <a class="wordmark" href="#top" aria-label="YN portfolio home">YN<span>®</span></a>

      <nav class="desktop-nav" aria-label="Primary navigation">
        <a href="#work">Selected work</a>
        <a href="#approach">Approach</a>
        <a href="#contact">Contact</a>
      </nav>

      <button class="menu-toggle" type="button" :aria-expanded="menuOpen" aria-controls="mobile-menu" @click="menuOpen = !menuOpen">
        <span>{{ menuOpen ? 'Close' : 'Menu' }}</span>
        <i :class="{ 'is-open': menuOpen }" aria-hidden="true" />
      </button>

      <nav v-if="menuOpen" id="mobile-menu" class="mobile-nav" aria-label="Mobile navigation">
        <a href="#work" @click="closeMenu">Selected work <span>↘</span></a>
        <a href="#approach" @click="closeMenu">Approach <span>↘</span></a>
        <a href="#contact" @click="closeMenu">Contact <span>↘</span></a>
      </nav>
    </header>

    <main id="main-content" tabindex="-1">
      <span id="top" class="anchor" aria-hidden="true" />

      <section class="hero" aria-labelledby="hero-title">
        <div class="hero-intro">
          <p class="eyebrow"><span class="status-dot" /> Independent developer · Product thinker</p>
          <p class="location">Working across<br>strategy, design &amp; code.</p>
        </div>

        <div class="hero-title-wrap">
          <p class="hero-kicker">Portfolio <span>/</span> 2026</p>
          <h1 id="hero-title">Useful<br><em>by design.</em></h1>
          <p class="hero-summary">I help thoughtful teams turn complicated ideas into digital products that are clear, capable and unmistakably theirs.</p>
        </div>

        <div class="hero-object" aria-hidden="true">
          <svg viewBox="0 0 420 420" fill="none">
            <path d="M29 112H391M29 308H391M112 29V391M308 29V391" stroke="currentColor" stroke-width="1" />
            <rect x="112" y="112" width="196" height="196" fill="currentColor" />
            <circle cx="210" cy="210" r="69" fill="#10110f" />
            <path d="M210 141V279M141 210H279" stroke="#C6FF00" stroke-width="16" />
            <circle cx="210" cy="210" r="16" fill="#FF6B4A" />
          </svg>
          <div class="object-label label-top">FORM / FUNCTION</div>
          <div class="object-label label-bottom">FIELD NOTES<br>01—26</div>
        </div>

        <a class="scroll-link" href="#work">Scroll for selected work <span aria-hidden="true">↓</span></a>
      </section>

      <section id="work" class="work-section" aria-labelledby="work-heading">
        <div class="section-heading">
          <p class="eyebrow">01 / Selected work</p>
          <h2 id="work-heading">A small selection<br>of meaningful work.</h2>
          <p>Strategy and interface craft, brought together to make products feel simpler than the problems behind them.</p>
        </div>

        <div class="project-list">
          <a v-for="project in projects" :key="project.number" href="#contact" class="project" :class="`project--${project.accent}`" :aria-label="`Discuss ${project.name}`">
            <div class="project-index">{{ project.number }}</div>
            <div class="project-main"><h3>{{ project.name }}</h3><p>{{ project.note }}</p></div>
            <div class="project-meta"><span>{{ project.type }}</span><span>{{ project.year }}</span></div>
            <div class="project-action" aria-hidden="true">↗</div>
          </a>
        </div>
      </section>

      <section id="approach" class="approach-section" aria-labelledby="approach-heading">
        <div class="approach-lead">
          <p class="eyebrow">02 / How I work</p>
          <h2 id="approach-heading">Good design earns<br>its place in the system.</h2>
          <p>I work from the inside out—understanding the decision, shaping the interface, then making sure the implementation holds up when people actually use it.</p>
          <a href="mailto:hello@yourname.dev" class="text-link">Start a conversation <span aria-hidden="true">↗</span></a>
        </div>

        <ol class="principle-list">
          <li v-for="principle in principles" :key="principle[0]">
            <span>{{ principle[0] }}</span>
            <div><h3>{{ principle[1] }}</h3><p>{{ principle[2] }}</p></div>
          </li>
        </ol>
      </section>

      <section class="availability" aria-label="Capabilities and availability">
        <p>Currently open to select collaborations</p>
        <div class="capability-list"><span>Product strategy</span><span>Interface systems</span><span>Front-end craft</span></div>
        <span class="availability-mark" aria-hidden="true">+</span>
      </section>

      <section id="contact" class="contact-section" aria-labelledby="contact-heading">
        <p class="eyebrow">03 / Contact</p>
        <h2 id="contact-heading">Have a good<br>problem?</h2>
        <p>Let’s make something that deserves to exist.</p>
        <a class="email-link" href="mailto:hello@yourname.dev">hello@yourname.dev <span aria-hidden="true">↗</span></a>
      </section>
    </main>

    <footer class="site-footer">
      <span>© {{ currentYear }} YOUR NAME</span>
      <span>Built with care, without the noise.</span>
      <div><a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></div>
    </footer>
  </div>
</template>

<style scoped>
.portfolio-shell { --ink: #10110f; --paper: #f5f2eb; --muted: #8d9087; --line: rgb(245 242 235 / .2); --acid: #c6ff00; --coral: #ff6b4a; --blue: #89adff; min-height: 100vh; overflow: clip; background: var(--ink); color: var(--paper); }
.skip-link { position: fixed; z-index: 100; top: .75rem; left: .75rem; transform: translateY(-160%); background: var(--acid); color: var(--ink); padding: .7rem .9rem; font-size: .8rem; font-weight: 700; }.skip-link:focus-visible { transform: translateY(0); }
.anchor { position: absolute; top: 0; }.site-header { position: relative; z-index: 20; display: grid; grid-template-columns: 1fr auto; align-items: center; max-width: 1500px; margin: 0 auto; padding: 1.4rem 1.25rem; border-bottom: 1px solid var(--line); }.wordmark { font: 700 1.15rem/1 var(--font-display); letter-spacing: -.1em; }.wordmark span { vertical-align: top; margin-left: .12rem; color: var(--acid); font: 500 .5rem/1 var(--font-sans); }.desktop-nav { display: none; gap: 2rem; color: #c7c8c1; font-size: .72rem; font-weight: 600; letter-spacing: .1em; text-transform: uppercase; }.desktop-nav a:hover { color: var(--acid); }.menu-toggle { display: inline-flex; align-items: center; gap: .7rem; color: var(--paper); font-size: .72rem; font-weight: 600; letter-spacing: .1em; text-transform: uppercase; }.menu-toggle i, .menu-toggle i::after { display: block; width: 17px; height: 1px; background: currentColor; content: ''; transition: transform .2s ease; }.menu-toggle i::after { transform: translateY(5px); }.menu-toggle i.is-open { transform: rotate(45deg); }.menu-toggle i.is-open::after { transform: rotate(90deg); }.mobile-nav { grid-column: 1 / -1; display: grid; margin-top: 1.25rem; border-top: 1px solid var(--line); }.mobile-nav a { display: flex; justify-content: space-between; padding: 1rem 0; border-bottom: 1px solid var(--line); font: 600 1.15rem var(--font-display); }.mobile-nav a span { color: var(--acid); }
.hero { position: relative; display: grid; grid-template-rows: auto 1fr auto; min-height: 730px; max-width: 1500px; margin: 0 auto; padding: 2.3rem 1.25rem 1.5rem; }.hero-intro { display: flex; justify-content: space-between; gap: 1rem; }.eyebrow { color: var(--muted); font-family: var(--font-mono); font-size: .68rem; font-weight: 500; letter-spacing: .12em; line-height: 1.45; text-transform: uppercase; }.status-dot { display: inline-block; width: 7px; height: 7px; margin-right: .45rem; border-radius: 50%; background: var(--acid); }.location { text-align: right; color: #c7c8c1; font-family: var(--font-mono); font-size: .74rem; line-height: 1.35; }.hero-title-wrap { position: relative; z-index: 2; align-self: center; padding: 5.5rem 0 2.5rem; }.hero-kicker { margin-bottom: 1.15rem; color: var(--acid); font-family: var(--font-mono); font-size: .7rem; font-weight: 500; letter-spacing: .13em; text-transform: uppercase; }.hero-kicker span { color: var(--muted); }.hero h1, h2, h3 { font-family: var(--font-display); }.hero h1 { max-width: 800px; font-size: clamp(4.4rem, 12vw, 9.5rem); font-weight: 600; letter-spacing: -.105em; line-height: .78; text-wrap: balance; }.hero h1 em { color: var(--acid); font-style: normal; }.hero-summary { max-width: 390px; margin-top: 2rem; color: #cbccc5; font-size: 1rem; line-height: 1.65; }.hero-object { position: absolute; z-index: 1; right: -5.5rem; top: 45%; width: min(61vw, 530px); color: rgb(245 242 235 / .22); transform: translateY(-38%); }.hero-object svg { width: 100%; }.object-label { position: absolute; color: var(--paper); font-family: var(--font-mono); font-size: .62rem; font-weight: 500; letter-spacing: .12em; line-height: 1.35; }.label-top { top: 15%; left: 8%; }.label-bottom { right: 11%; bottom: 13%; text-align: right; }.scroll-link { display: inline-flex; gap: .75rem; width: max-content; color: #c7c8c1; font-family: var(--font-mono); font-size: .72rem; font-weight: 500; letter-spacing: .1em; text-transform: uppercase; }.scroll-link span { color: var(--acid); font-size: 1rem; line-height: .7; transition: transform .2s ease; }.scroll-link:hover span { transform: translateY(3px); }
.work-section { background: var(--paper); color: var(--ink); padding: 4.5rem 1.25rem 0; }.section-heading, .project-list, .approach-section, .availability, .contact-section, .site-footer { max-width: 1500px; margin-right: auto; margin-left: auto; }.section-heading { display: grid; gap: 1.4rem; padding-bottom: 4.4rem; }.section-heading .eyebrow { color: #676960; }.section-heading h2, .approach-lead h2, .contact-section h2 { font-size: clamp(2.7rem, 7vw, 6.7rem); font-weight: 600; letter-spacing: -.09em; line-height: .85; text-wrap: balance; }.section-heading > p:last-child { max-width: 350px; color: #565850; font-size: .95rem; line-height: 1.65; }.project-list { border-top: 1px solid #151612; }.project { display: grid; grid-template-columns: 2.5rem minmax(0, 1fr) auto; align-items: center; gap: .75rem; min-height: 156px; border-bottom: 1px solid #151612; padding: 1.5rem 0; transition: background-color .22s ease, color .22s ease, padding .22s ease; }.project:hover { padding-right: .8rem; padding-left: .8rem; background: var(--ink); color: var(--paper); }.project-index { align-self: start; padding-top: .25rem; color: #676960; font: .72rem var(--font-sans); }.project-main h3 { font-size: clamp(2rem, 6vw, 5.5rem); font-weight: 600; letter-spacing: -.09em; line-height: .85; }.project-main p { display: none; margin-top: .75rem; color: #b9bbb2; font-size: .84rem; }.project-meta { display: none; color: #676960; font-size: .75rem; line-height: 1.4; }.project:hover .project-meta { color: #b9bbb2; }.project-action { align-self: start; font-size: 1.7rem; transition: transform .22s ease; }.project:hover .project-action { transform: translate(4px, -4px); }.project--lime:hover { box-shadow: inset 5px 0 var(--acid); }.project--coral:hover { box-shadow: inset 5px 0 var(--coral); }.project--blue:hover { box-shadow: inset 5px 0 var(--blue); }
.approach-section { display: grid; gap: 4rem; padding: 5.5rem 1.25rem; }.approach-lead .eyebrow { color: var(--acid); }.approach-lead h2 { margin-top: 1.3rem; }.approach-lead > p { max-width: 520px; margin-top: 1.7rem; color: #c7c8c1; line-height: 1.7; }.text-link { display: inline-flex; gap: .7rem; margin-top: 2rem; padding-bottom: .35rem; border-bottom: 1px solid var(--acid); color: var(--acid); font-size: .78rem; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }.text-link span { transition: transform .2s ease; }.text-link:hover span { transform: translate(3px, -3px); }.principle-list { list-style: none; border-top: 1px solid var(--line); }.principle-list li { display: grid; grid-template-columns: 2.6rem 1fr; gap: .6rem; padding: 1.45rem 0; border-bottom: 1px solid var(--line); }.principle-list > li > span { color: var(--acid); font-size: .72rem; }.principle-list h3 { font-size: 1.5rem; font-weight: 600; letter-spacing: -.06em; }.principle-list p { margin-top: .55rem; color: #b4b6ad; font-size: .88rem; line-height: 1.55; }.availability { position: relative; display: grid; gap: 2rem; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); padding: 1.4rem 1.25rem; color: #c7c8c1; font-size: .72rem; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; }.capability-list { display: flex; flex-wrap: wrap; gap: .75rem 1.4rem; color: var(--paper); }.capability-list span::before { margin-right: .45rem; color: var(--acid); content: '—'; }.availability-mark { position: absolute; right: 1.3rem; top: 50%; color: var(--acid); font-size: 1.4rem; transform: translateY(-50%); }
.contact-section { padding: 6rem 1.25rem; background: var(--acid); color: var(--ink); }.contact-section .eyebrow { color: #444733; }.contact-section h2 { max-width: 900px; margin-top: 1.2rem; }.contact-section > p:not(.eyebrow) { margin-top: 1.9rem; font-size: 1.05rem; }.email-link { display: inline-flex; gap: 1rem; margin-top: 3.4rem; border-bottom: 2px solid var(--ink); padding-bottom: .65rem; font: 600 clamp(1.25rem, 3vw, 2.5rem)/1 var(--font-display); letter-spacing: -.05em; }.email-link span { transition: transform .22s ease; }.email-link:hover span { transform: translate(5px, -5px); }.site-footer { display: grid; gap: 1.2rem; padding: 1.5rem 1.25rem 2rem; color: var(--muted); font-size: .7rem; font-weight: 600; letter-spacing: .06em; text-transform: uppercase; }.site-footer div { display: flex; gap: 1.3rem; color: var(--paper); }.site-footer a:hover { color: var(--acid); }
@media (min-width: 700px) { .site-header { grid-template-columns: 1fr auto; padding: 1.5rem 2.5rem; }.desktop-nav { display: flex; }.menu-toggle, .mobile-nav { display: none; }.hero { min-height: 820px; padding: 3.2rem 2.5rem 2rem; }.hero-intro { display: block; }.location { margin-top: 1.3rem; text-align: left; }.hero-title-wrap { padding: 7rem 0 3rem; }.hero-object { right: 1rem; width: min(48vw, 510px); }.work-section { padding: 7rem 2.5rem 0; }.section-heading { grid-template-columns: 1fr 2fr 1fr; align-items: end; }.section-heading h2 { grid-column: 2 / 3; }.section-heading > p:last-child { grid-column: 3; }.project { grid-template-columns: 4rem minmax(0, 1fr) 150px 2.5rem; gap: 1.5rem; min-height: 190px; }.project-main p { display: block; }.project-meta { display: grid; gap: .4rem; }.approach-section { grid-template-columns: minmax(0, 1fr) minmax(360px, 1fr); gap: 7vw; padding: 8rem 2.5rem; }.principle-list { align-self: end; }.availability { grid-template-columns: 1fr 2fr auto; align-items: center; padding: 1.45rem 2.5rem; }.availability-mark { position: static; transform: none; }.contact-section { padding: 9rem 2.5rem; }.site-footer { grid-template-columns: 1fr 1fr auto; padding: 1.7rem 2.5rem 2.2rem; } }
@media (min-width: 1100px) { .site-header, .hero, .work-section, .approach-section, .availability, .contact-section, .site-footer { padding-right: 4.5rem; padding-left: 4.5rem; }.hero { min-height: 900px; }.hero-object { right: 5%; }.hero-title-wrap { padding-top: 6rem; }.project { min-height: 215px; }.project-main p { font-size: .92rem; }.approach-section { gap: 12vw; }.contact-section { padding-top: 10rem; padding-bottom: 10rem; } }
@media (prefers-reduced-motion: reduce) { *, *::before, *::after { scroll-behavior: auto !important; transition-duration: .01ms !important; } }
</style>
