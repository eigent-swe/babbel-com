/**
 * Feature card data.
 */
export const featureCards = [
  {
    title: 'Learn to speak a new language with confidence',
    text: "With Babbel, you'll learn practical and useful skills that you can apply right away — so you can reach your goal of having real-life conversations faster.",
    image: '/assets/feature_confidence.jpg',
    imageAlt: 'Two girls having breakfast while sitting at a table in the street of a European city.',
    cta: 'Start learning',
  },
  {
    title: 'Learn at your own pace',
    text: "Achieve your goals with course material that's tailored to your proficiency level, interests, and time commitment. Stay motivated with real-time feedback, progress trackers, and handy visualizations.\n\nIt's like having a private tutor in your pocket.",
    image: '/assets/feature_pace.jpg',
    imageAlt: 'An individual checking the Babbel app on their device.',
    cta: 'Start learning',
  },
  {
    title: 'Develop your language skills with a variety of tools',
    text: 'Sharpen your pronunciation using speech recognition. Build your conversation skills with engaging, interactive dialogues. Get helpful grammar tips while reading, writing, listening, and exploring culture bites.',
    image: '/assets/feature_tools.jpg',
    imageAlt: 'A girl sitting comfortably on the couch while engaging with her device.',
    cta: 'Start learning',
  },
];

/**
 * Renders a single feature card.
 * @param {object} card
 * @param {number} index
 * @returns {string}
 */
function renderFeatureCard(card, index) {
  const reversed = index % 2 === 1 ? ' features__card--reversed' : '';
  const paragraphs = card.text.split('\n\n').map(p => `<p class="features__card-text">${p}</p>`).join('');
  return `
    <article class="features__card${reversed}">
      <div class="features__card-img-wrapper">
        <img src="${card.image}" alt="${card.imageAlt}" class="features__card-img" loading="lazy" />
      </div>
      <div class="features__card-content">
        <div>
          <h3 class="features__card-title">${card.title}</h3>
          ${paragraphs}
        </div>
        <a href="https://my.babbel.com/en/onboarding/default" class="features__card-cta">${card.cta}</a>
      </div>
    </article>
  `;
}

/**
 * Renders the features section.
 * @returns {string}
 */
export function renderFeatures() {
  const cards = featureCards.map(renderFeatureCard).join('');
  return `
    <section class="features">
      <h2 class="features__heading">The effective way to learn a language online</h2>
      <div class="features__cards">
        ${cards}
      </div>
    </section>
  `;
}
