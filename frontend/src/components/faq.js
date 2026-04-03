/**
 * FAQ items data.
 */
export const faqItems = [
  {
    question: 'What is Babbel, and how does it work?',
    answer: 'Babbel is a leading language learning subscription app designed to kickstart your journey in mastering a new language. Want to learn more about the <a href="https://www.babbel.com/en/magazine/babbel-method" target="_blank" rel="noopener">Babbel Method</a>?',
  },
  {
    question: 'What languages can I learn with Babbel?',
    answer: 'Babbel offers courses in 14 languages: Spanish (Latin American and European), French, German, Italian, Portuguese, Russian, Danish, Dutch, Indonesian, Norwegian, Polish, Swedish, and Turkish.',
  },
  {
    question: 'What levels are available?',
    answer: 'Babbel offers courses from beginner (A1) to upper intermediate (B2) levels, depending on the language. Each course is designed to build progressively on what you have learned.',
  },
  {
    question: 'Can I try Babbel for free?',
    answer: 'Yes! Babbel offers a free first lesson in every language so you can get a taste of the Babbel experience before subscribing.',
  },
  {
    question: 'What are the benefits of using Babbel?',
    answer: 'Babbel provides expert-crafted courses, speech recognition technology, personalized review sessions, and real-world conversation skills. 92% of users who completed the study improved their language proficiency in just 2 months.',
  },
  {
    question: 'What are the subscription options?',
    answer: 'Babbel offers flexible subscription plans: monthly, quarterly, annual, and lifetime access. The longer the plan, the more you save per month.',
  },
  {
    question: 'What payment methods does Babbel accept?',
    answer: 'Babbel accepts major credit cards, debit cards, PayPal, and various local payment methods depending on your region.',
  },
];

/**
 * Renders the FAQ section.
 * @returns {string}
 */
export function renderFAQ() {
  const items = faqItems.map((item, i) => `
    <div class="faq__item" data-faq-index="${i}">
      <h3 class="faq__question-heading">
        <button class="faq__question" aria-expanded="false" aria-controls="faq-answer-${i}">
          <span class="faq__question-text">${item.question}</span>
          <svg class="faq__chevron" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M6 8L10 12L14 8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </h3>
      <div class="faq__answer" id="faq-answer-${i}" hidden>
        <p class="faq__answer-text">${item.answer}</p>
      </div>
    </div>
  `).join('');

  return `
    <section class="faq">
      <h2 class="faq__heading">Frequently Asked Questions</h2>
      <div class="faq__list">
        ${items}
      </div>
    </section>
  `;
}

/**
 * Initializes the FAQ accordion behavior.
 */
export function initFAQ() {
  const faqSection = document.querySelector('.faq__list');
  if (!faqSection) return;

  faqSection.addEventListener('click', (e) => {
    const button = e.target.closest('.faq__question');
    if (!button) return;

    const item = button.closest('.faq__item');
    const answer = item.querySelector('.faq__answer');
    const isOpen = button.getAttribute('aria-expanded') === 'true';

    button.setAttribute('aria-expanded', !isOpen);
    answer.hidden = isOpen;
    item.classList.toggle('faq__item--open', !isOpen);
  });
}
