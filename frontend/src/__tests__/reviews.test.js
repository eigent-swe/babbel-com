import { describe, it, expect, beforeEach } from 'vitest';
import { renderReviews, initReviews, slides } from '../components/reviews.js';

describe('renderReviews', () => {
  it('should render the heading', () => {
    const html = renderReviews();
    expect(html).toContain('People love Babbel');
  });

  it('should render all reviewer names', () => {
    const html = renderReviews();
    expect(html).toContain('Celeste');
    expect(html).toContain('Roslyn');
    expect(html).toContain('Andrew');
    expect(html).toContain('Pat');
    expect(html).toContain('Helen');
  });

  it('should render prev/next buttons', () => {
    const html = renderReviews();
    expect(html).toContain('reviews-prev');
    expect(html).toContain('reviews-next');
  });

  it('should have correct number of slides', () => {
    expect(slides).toHaveLength(3);
  });
});

describe('initReviews', () => {
  beforeEach(() => {
    document.body.innerHTML = renderReviews();
  });

  it('should disable prev button initially', () => {
    initReviews();
    const prev = document.getElementById('reviews-prev');
    expect(prev.disabled).toBe(true);
  });

  it('should enable next button initially', () => {
    initReviews();
    const next = document.getElementById('reviews-next');
    expect(next.disabled).toBe(false);
  });

  it('should advance slide on next click', () => {
    initReviews();
    const next = document.getElementById('reviews-next');
    const track = document.getElementById('reviews-track');
    next.click();
    expect(track.style.transform).toBe('translateX(-100%)');
  });
});
