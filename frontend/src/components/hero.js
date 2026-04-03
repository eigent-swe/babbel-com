/**
 * Language data for the selection grid.
 */
export const languages = [
  { name: 'Spanish (Mexico)', flag: '🇲🇽', slug: 'QMS' },
  { name: 'Spanish (Spain)', flag: '🇪🇸', slug: 'SPA' },
  { name: 'French', flag: '🇫🇷', slug: 'FRA' },
  { name: 'German', flag: '🇩🇪', slug: 'DEU' },
  { name: 'Italian', flag: '🇮🇹', slug: 'ITA' },
  { name: 'More', flag: '🌐', slug: '' },
];

/**
 * Renders a single language button.
 * @param {{ name: string, flag: string, slug: string }} lang
 * @returns {string}
 */
function renderLanguageButton(lang) {
  const href = lang.slug
    ? `https://my.babbel.com/en/onboarding/default?learn_lang=${lang.slug}`
    : 'https://my.babbel.com/en/onboarding/default';
  return `
    <li class="hero__lang-item">
      <a href="${href}" class="hero__lang-link">
        <span class="hero__lang-flag">${lang.flag}</span>
        <span class="hero__lang-name">${lang.name}</span>
      </a>
    </li>
  `;
}

/**
 * Renders the hero section.
 * @returns {string}
 */
export function renderHero() {
  const langButtons = languages.map(renderLanguageButton).join('');
  return `
    <section class="hero">
      <div class="hero__content">
        <div class="hero__text">
          <h1 class="hero__title">Which <em>language</em> do you want to learn?</h1>
          <ul class="hero__lang-grid">
            ${langButtons}
          </ul>
        </div>
        <div class="hero__image-wrapper">
          <img src="/assets/hero_image.jpg"
               alt="A diverse group of people engaged in a relaxed conversation while sitting around a table in a garden."
               class="hero__image" />
        </div>
      </div>
      <div class="hero__banner">
        <span class="hero__banner-text">Over 25 million subscriptions sold!</span>
      </div>
    </section>
  `;
}
