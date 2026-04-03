# Babbel.com — Site Exploration

## Overview
Babbel.com is a language learning platform's marketing/landing page. It is a single-page scrollable site with multiple sections promoting the Babbel app and language courses. The site is content-heavy with minimal interactivity (FAQ accordion, reviews carousel).

## Tech Stack Decision
**Choice: Vanilla JS + CSS (no framework)**

**Reasoning:**
- The site is primarily an L1 (static display) / L2 (simple state) site
- It's a content-driven marketing page — no complex state management needed
- Interactive elements are limited to: FAQ accordion toggle, reviews carousel navigation
- A framework like React or Vue would be overkill for this level of complexity
- Vanilla JS + CSS can handle all interactions cleanly with minimal code
- No backend needed — all content is static

## Pages & Routes
The mock only needs to replicate the homepage (`/`). All other links (learn-spanish, learn-french, etc.) are external links to my.babbel.com or other domains.

| Route | Description |
|-------|------------|
| `/` | Main landing page with all sections |

## Page Sections (top to bottom)

### 1. Header / Navigation Bar
- Babbel logo (left)
- Nav links: "For businesses" link
- Language selector button ("Display language: American English")
- "Log in" link
- "Sign up" button (orange, rounded)

### 2. Hero Section
- Heading: "Which *language* do you want to learn?" (language in italic/orange)
- Grid of language buttons with flag icons: Spanish (Mexico), Spanish (Spain), French, German, Italian, More
- Background image: diverse group of people at garden table
- Banner below: "Over 25 million subscriptions sold!"

### 3. Feature Section — "The effective way to learn a language online"
Three alternating content cards:
1. "Learn to speak a new language with confidence" — image left, text right, "Start learning" CTA
2. "Learn at your own pace" — image right, text left, "Start learning" CTA
3. "Develop your language skills with a variety of tools" — image left, text right, "Start learning" CTA

### 4. The Proven Babbel Method
- Heading + paragraph
- Three columns:
  1. "Learn Fast. Talk Sooner."
  2. "Backed by Proven Results"
  3. "Designed by Language Experts"

### 5. Babbel and *beyond*
- Three cards: Babbel Videos (Watch), Babbel Podcasts (Listen), Babbel Magazine (Read)

### 6. People Love Babbel (Reviews Carousel)
- Yellow/gold background
- Heading: "People love Babbel" with "Millions of 5-star reviews"
- Previous/Next navigation buttons
- Slides with pairs of review quotes (3 slides)
- Reviews: Celeste, Roslyn (slide 1), Andrew, Pat (slide 2), Helen (slide 3)

### 7. Frequently Asked Questions (Accordion)
- 7 FAQ items, each with expand/collapse toggle (chevron icon)
- Items: What is Babbel, Languages available, Levels, Free trial, Benefits, Subscription options, Payment methods
- Background: off-white/cream

### 8. CTA Section
- Orange background
- "Join millions of Babbel learners breaking the language barrier every day"
- Language selection buttons (same as hero)

### 9. Footer
- Three columns: Courses (13 languages), More Babbel (13 links), Company (11 links)
- Bottom bar: © 2026 Babbel GmbH, Imprint, Terms, Privacy, Do Not Sell
- Social icons: Facebook, YouTube, Instagram, LinkedIn

## Visual Design System
- **Primary color**: Orange (#FF6F00 / warm orange for CTAs)
- **Accent**: Gold/Yellow (#FFCF4D for review section, hero banner)
- **Background**: Off-white/cream (#F5F1EB or similar)
- **Text**: Dark near-black (#1A1A1A)
- **Card backgrounds**: White
- **Font**: Sans-serif (appears to be a custom font, likely "Babbel" branded)
- **Border radius**: Rounded corners on buttons and cards
- **Layout**: Max-width centered content, responsive

## Interactive Behaviors
1. **FAQ Accordion**: Click to expand/collapse. Chevron rotates. Only one open at a time (likely).
2. **Reviews Carousel**: Previous/Next buttons. Previous disabled on first slide. Horizontal slide transition.
3. **Language selector dropdown**: Opens a dropdown with language options (header).
4. **Hover effects**: Buttons have hover states.
5. **Cookie banner**: Modal overlay on first visit (we won't replicate this).

## API Endpoints
No dynamic API calls needed. All content is static/hardcoded on the marketing page.

## Data Models
No backend data models needed. All content is static.

## Screenshots
- `screenshots/explore_real_home_20260403_021500.png` — Full homepage
- `screenshots/explore_real_faq_open_20260403_021540.png` — FAQ accordion open state
