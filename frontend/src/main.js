import './style.css';
import { renderHeader, initHeader } from './components/header.js';
import { renderHero } from './components/hero.js';

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
    </main>
  `;
  initHeader();
}

if (typeof document !== 'undefined' && document.readyState !== 'loading') {
  initApp();
} else if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', initApp);
}
