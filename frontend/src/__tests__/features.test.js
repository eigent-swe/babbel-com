import { describe, it, expect } from 'vitest';
import { renderFeatures, featureCards } from '../components/features.js';

describe('renderFeatures', () => {
  it('should render the section heading', () => {
    const html = renderFeatures();
    expect(html).toContain('The effective way to learn a language online');
  });

  it('should render all three feature cards', () => {
    const html = renderFeatures();
    featureCards.forEach(card => {
      expect(html).toContain(card.title);
      expect(html).toContain(card.image);
    });
  });

  it('should render CTA links', () => {
    const html = renderFeatures();
    expect(html).toContain('Start learning');
  });

  it('should alternate card layout with reversed class', () => {
    const html = renderFeatures();
    expect(html).toContain('features__card--reversed');
  });
});
