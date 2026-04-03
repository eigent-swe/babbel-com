import { describe, it, expect, beforeEach } from 'vitest';
import { renderFAQ, initFAQ, faqItems } from '../components/faq.js';

describe('renderFAQ', () => {
  it('should render the heading', () => {
    const html = renderFAQ();
    expect(html).toContain('Frequently Asked Questions');
  });

  it('should render all FAQ questions', () => {
    const html = renderFAQ();
    faqItems.forEach(item => {
      expect(html).toContain(item.question);
    });
  });

  it('should have 7 FAQ items', () => {
    expect(faqItems).toHaveLength(7);
  });

  it('should have answers hidden by default', () => {
    const html = renderFAQ();
    expect(html).toContain('hidden');
  });
});

describe('initFAQ', () => {
  beforeEach(() => {
    document.body.innerHTML = renderFAQ();
    initFAQ();
  });

  it('should toggle answer on button click', () => {
    const btn = document.querySelector('.faq__question');
    const answer = document.querySelector('.faq__answer');
    btn.click();
    expect(answer.hidden).toBe(false);
    expect(btn.getAttribute('aria-expanded')).toBe('true');
  });

  it('should close answer on second click', () => {
    const btn = document.querySelector('.faq__question');
    const answer = document.querySelector('.faq__answer');
    btn.click();
    btn.click();
    expect(answer.hidden).toBe(true);
    expect(btn.getAttribute('aria-expanded')).toBe('false');
  });
});
