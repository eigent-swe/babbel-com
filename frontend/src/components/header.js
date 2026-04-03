/**
 * Renders the Babbel header/navigation bar.
 * @returns {string} HTML string for the header
 */
export function renderHeader() {
  return `
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
                  <span class="header__lang-label">Display language:</span>
                  <span class="header__flag">🇺🇸</span>
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

  let lastScrollY = 0;
  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 60) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
    lastScrollY = currentScrollY;
  });
}
