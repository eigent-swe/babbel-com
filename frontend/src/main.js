import './style.css';

/**
 * Initialize the Babbel mock application.
 */
export function initApp() {
  const app = document.getElementById('app');
  if (!app) return;
  app.innerHTML = '<h1>Babbel Mock — Coming Soon</h1>';
}

if (typeof document !== 'undefined' && document.readyState !== 'loading') {
  initApp();
} else if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', initApp);
}
