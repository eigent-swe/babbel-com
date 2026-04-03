import './style.css';
import { renderHeader, initHeader } from './components/header.js';

/**
 * Initialize the Babbel mock application.
 */
export function initApp() {
  const app = document.getElementById('app');
  if (!app) return;
  app.innerHTML = `
    ${renderHeader()}
    <main id="main">
      <p style="padding: 120px 40px; text-align: center; font-size: 1.2rem;">
        More sections coming soon...
      </p>
    </main>
  `;
  initHeader();
}

if (typeof document !== 'undefined' && document.readyState !== 'loading') {
  initApp();
} else if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', initApp);
}
