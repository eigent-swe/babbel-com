/**
 * Reviews data organized by slides.
 */
export const slides = [
  [
    { name: 'Celeste', rating: 'Excellent', text: "Babbel is excellent - short and sweet and effective lessons and great quick review which is key to remembering. I love it! I'm learning Dutch!!" },
    { name: 'Roslyn', rating: 'Excellent', text: 'Babbel has helped me to get a good grasp of the language in a fun and challenging way. I enjoy the dialogues and scenarios, which include helpful phrases that can be used in various situations.' },
  ],
  [
    { name: 'Andrew', rating: 'Excellent', text: "Almost like real immersion. Practical dialogues that will be useful when I'll have conversations in Italian." },
    { name: 'Pat', rating: 'Excellent', text: 'Great way to learn a language. Fun, interactive, and engaging. I am enjoying the course immensely and would recommend it to anyone who wishes to learn a second language' },
  ],
  [
    { name: 'Helen', rating: 'Excellent', text: 'I love this bite-sized, very clever language learning design. Genius!' },
  ],
];

/**
 * Renders the reviews carousel section.
 * @returns {string}
 */
export function renderReviews() {
  const slideHTML = slides.map((slide, i) => `
    <li class="reviews__slide" aria-label="Slide ${i + 1} out of ${slides.length}" data-slide="${i}">
      ${slide.map(review => `
        <blockquote class="reviews__quote">
          <p class="reviews__reviewer"><strong>${review.name}</strong> | ${review.rating}</p>
          <p class="reviews__text">${review.text}</p>
        </blockquote>
      `).join('')}
    </li>
  `).join('');

  return `
    <section class="reviews" aria-label="People love Babbel">
      <div class="reviews__inner">
        <div class="reviews__header">
          <div>
            <h2 class="reviews__heading">People love Babbel</h2>
            <p class="reviews__subheading">MIllions of 5-star reviews.**</p>
          </div>
          <div class="reviews__nav">
            <button class="reviews__nav-btn reviews__nav-btn--prev" id="reviews-prev" disabled aria-label="Previous">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12 15L7 10L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            </button>
            <button class="reviews__nav-btn reviews__nav-btn--next" id="reviews-next" aria-label="Next">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M8 5L13 10L8 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            </button>
          </div>
        </div>
        <div class="reviews__track-wrapper">
          <ul class="reviews__track" id="reviews-track">
            ${slideHTML}
          </ul>
        </div>
      </div>
    </section>
  `;
}

/**
 * Initializes the reviews carousel interactivity.
 */
export function initReviews() {
  const track = document.getElementById('reviews-track');
  const prevBtn = document.getElementById('reviews-prev');
  const nextBtn = document.getElementById('reviews-next');
  if (!track || !prevBtn || !nextBtn) return;

  let currentSlide = 0;
  const totalSlides = slides.length;

  function updateCarousel() {
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === totalSlides - 1;
  }

  prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
      currentSlide--;
      updateCarousel();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentSlide < totalSlides - 1) {
      currentSlide++;
      updateCarousel();
    }
  });
}
