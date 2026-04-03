import './style.css';
import { renderHeader, initHeader } from './components/header.js';
import { renderHero } from './components/hero.js';
import { renderFeatures } from './components/features.js';
import { renderMethod } from './components/method.js';

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
    </main>
  `;
  initHeader();
}

if (typeof document !== 'undefined' && document.readyState !== 'loading') {
  initApp();
} else if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', initApp);
}
