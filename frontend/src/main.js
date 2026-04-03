import './style.css';
import { renderHeader, initHeader } from './components/header.js';
import { renderHero } from './components/hero.js';
import { renderFeatures } from './components/features.js';
import { renderMethod } from './components/method.js';
import { renderBeyond } from './components/beyond.js';
import { renderReviews, initReviews } from './components/reviews.js';
import { renderFAQ, initFAQ } from './components/faq.js';
import { renderCTA } from './components/cta.js';
import { renderFooter } from './components/footer.js';

/**
 * Initialize the Babbel mock application.
 */
export function initApp() {
  const app = document.getElementById('app');
  if (!app) return;
  app.innerHTML = `
    ${renderHeader()}
    <main id="main">
      ${renderHero()}
      ${renderFeatures()}
      ${renderMethod()}
      ${renderBeyond()}
      ${renderReviews()}
      ${renderFAQ()}
      ${renderCTA()}
    </main>
    ${renderFooter()}
  `;
  initHeader();
  initReviews();
  initFAQ();
}

if (typeof document !== 'undefined' && document.readyState !== 'loading') {
  initApp();
} else if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', initApp);
}
