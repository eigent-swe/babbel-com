import { languages } from './hero.js';

/**
 * Renders the CTA section with language selection.
 * @returns {string}
 */
export function renderCTA() {
  const langButtons = languages.map(lang => {
    const href = lang.slug
      ? `https://my.babbel.com/en/onboarding/default?learn_lang=${lang.slug}`
      : 'https://my.babbel.com/en/onboarding/default';
    return `
      <li class="cta__lang-item">
        <a href="${href}" class="cta__lang-link">
          <span class="cta__lang-flag">${lang.flag}</span>
          <span class="cta__lang-name">${lang.name}</span>
        </a>
      </li>
    `;
  }).join('');

  return `
    <section class="cta">
      <h2 class="cta__heading">Join millions of Babbel learners breaking the language barrier every day</h2>
      <ul class="cta__lang-grid">
        ${langButtons}
      </ul>
    </section>
  `;
}
