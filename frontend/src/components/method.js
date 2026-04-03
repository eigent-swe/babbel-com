/**
 * Method pillars data.
 */
export const pillars = [
  {
    title: 'Learn Fast. Talk Sooner.',
    text: 'Quickly become conversation-ready with diverse learning tools to suit all learning styles.',
    icon: '/assets/lightbulb_icon.svg',
  },
  {
    title: 'Backed by Proven Results',
    text: '92% of users improved their proficiency level in just 2 months*, with 25m actual subscriptions sold.',
    icon: '/assets/medal_icon.svg',
  },
  {
    title: 'Designed by Language Experts',
    text: 'Courses created by 200+ language experts for high-quality learning.',
    icon: '/assets/users_icon.svg',
  },
];

/**
 * Renders the Proven Babbel Method section.
 * @returns {string}
 */
export function renderMethod() {
  const pillarCards = pillars.map(p => `
    <li class="method__pillar">
      <img src="${p.icon}" alt="" class="method__pillar-icon" />
      <h3 class="method__pillar-title">${p.title}</h3>
      <p class="method__pillar-text">${p.text}</p>
    </li>
  `).join('');

  return `
    <section class="method">
      <div class="method__intro">
        <h2 class="method__heading">The Proven Babbel Method</h2>
        <p class="method__subtitle">Learn a new language, fast. Our award-winning app uses the Babbel Method to help you speak confidently. You can complete quick lessons, practice conversations with an AI partner, listen to podcasts, and more.</p>
      </div>
      <ul class="method__pillars">
        ${pillarCards}
      </ul>
    </section>
  `;
}
