/**
 * Renders the Babbel header/navigation bar.
 * @returns {string} HTML string for the header
 */
export function renderHeader() {
  return `
    <a href="#main" class="skip-link">Skip to main content</a>
    <header class="header" id="site-header">
      <div class="header__inner">
        <a href="/" class="header__logo" aria-label="Babbel home">
          <img src="/assets/babbel_logo.png" alt="Babbel" class="header__logo-img" />
        </a>
        <nav class="header__nav" aria-label="main">
          <ul class="header__nav-list">
            <li class="header__nav-item">
              <a href="https://www.babbelforbusiness.com/us/" class="header__link">For businesses</a>
            </li>
            <li class="header__nav-item">
              <button class="header__lang-btn" aria-label="Display language: American English">
                <span class="header__lang-text">
                  <svg class="header__globe-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                  American English
                </span>
                <svg class="header__chevron" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              </button>
            </li>
            <li class="header__nav-item header__nav-item--spacer"></li>
            <li class="header__nav-item">
              <a href="#" class="header__link">Log in</a>
            </li>
            <li class="header__nav-item">
              <a href="#" class="header__signup-btn">Sign up</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  `;
}

/**
 * Initializes header scroll behavior (sticky).
 */
export function initHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  });
}
