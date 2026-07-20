<script setup lang="ts">
import { profile } from '@/features/portfolio/model/portfolio'
</script>

<template>
  <section id="contact" class="section-shell contact-section contact-panel-section">
    <div class="contact-panel">
      <div class="contact-copy">
        <p class="eyebrow">Contact</p>
        <h2>Have a backend workflow worth building?</h2>
        <p>
          Send a short message about the project, role, or collaboration. I will follow up through email.
        </p>

        <div class="contact-methods" aria-label="Contact methods">
          <a :href="`mailto:${profile.email}`">
            <span class="contact-method-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M4 6h16v12H4z" />
                <path d="m4 7 8 6 8-6" />
              </svg>
            </span>
            <span class="contact-method-text">
              <span>Email</span>
              <strong>{{ profile.maskedEmail }}</strong>
            </span>
          </a>
          <a :href="`tel:${profile.phone}`">
            <span class="contact-method-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.62a2 2 0 0 1-.45 2.11L8 9.75a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.11-.45c.84.3 1.72.51 2.62.63A2 2 0 0 1 22 16.92Z" />
              </svg>
            </span>
            <span class="contact-method-text">
              <span>Phone</span>
              <strong>{{ profile.maskedPhone }}</strong>
            </span>
          </a>
        </div>
      </div>

      <form class="contact-form" aria-label="Contact form">
        <div class="contact-form-header">
          <span>Message</span>
          <strong>Start a conversation</strong>
        </div>
        <label>
          <span>Name</span>
          <input type="text" name="name" autocomplete="name" placeholder="Your name" />
        </label>
        <label>
          <span>Email</span>
          <input type="email" name="email" autocomplete="email" placeholder="you@example.com" />
        </label>
        <label>
          <span>Message</span>
          <textarea name="message" rows="5" placeholder="Tell me what you want to build"></textarea>
        </label>
        <button class="button button-primary" type="button">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
            <path d="M22 2 11 13" />
            <path d="m22 2-7 20-4-9-9-4 20-7Z" />
          </svg>
          Send Message
        </button>
      </form>
    </div>
  </section>
</template>

