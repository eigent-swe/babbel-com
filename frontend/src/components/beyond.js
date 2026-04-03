/**
 * Beyond section cards data.
 */
export const beyondCards = [
  {
    title: 'Babbel Videos',
    text: 'Discover the weird and wonderful things that make a language so fascinating.',
    link: 'https://www.youtube.com/babbelusa',
    linkText: 'Watch',
    image: '/assets/beyond_youtube.png',
  },
  {
    title: 'Babbel Podcasts',
    text: 'Listen as Babbel experts reveal language secrets and give you an inside look at local culture.',
    link: 'https://www.babbel.com/podcasts',
    linkText: 'Listen',
    image: '/assets/beyond_podcasts.png',
  },
  {
    title: 'Babbel Magazine',
    text: 'Explore stories from around the world, get language learning tips and dive deeper into different cultures.',
    link: 'https://www.babbel.com/en/magazine',
    linkText: 'Read',
    image: '/assets/beyond_magazine.jpg',
  },
];

/**
 * Renders the "Babbel and beyond" section.
 * @returns {string}
 */
export function renderBeyond() {
  const cards = beyondCards.map(c => `
    <li class="beyond__card">
      <div class="beyond__card-img-wrapper">
        <img src="${c.image}" alt="${c.title}" class="beyond__card-img" loading="lazy" />
      </div>
      <h3 class="beyond__card-title">${c.title}</h3>
      <p class="beyond__card-text">${c.text}</p>
      <a href="${c.link}" class="beyond__card-link" target="_blank" rel="noopener">${c.linkText}</a>
    </li>
  `).join('');

  return `
    <section class="beyond">
      <div class="beyond__header">
        <h2 class="beyond__heading">Babbel and <em>beyond</em></h2>
        <p class="beyond__subtitle">Want to immerse yourself in your new language? Dive into a world of language learning content.</p>
      </div>
      <ul class="beyond__cards">
        ${cards}
      </ul>
    </section>
  `;
}
