import { describe, it, expect } from 'vitest';
import { renderHero, languages } from '../components/hero.js';

describe('renderHero', () => {
  it('should render the heading with emphasized language', () => {
    const html = renderHero();
    expect(html).toContain('<em>language</em>');
    expect(html).toContain('Which');
    expect(html).toContain('do you want to learn?');
  });

  it('should render all language options', () => {
    const html = renderHero();
    languages.forEach(lang => {
      expect(html).toContain(lang.name);
    });
  });

  it('should include the hero image', () => {
    const html = renderHero();
    expect(html).toContain('hero_image.jpg');
  });

  it('should include the subscription banner', () => {
    const html = renderHero();
    expect(html).toContain('Over 25 million subscriptions sold!');
  });
});

describe('languages data', () => {
  it('should have 6 language options', () => {
    expect(languages).toHaveLength(6);
  });
});
