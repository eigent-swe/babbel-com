import { describe, it, expect } from 'vitest';
import { renderBeyond, beyondCards } from '../components/beyond.js';

describe('renderBeyond', () => {
  it('should render heading with italic beyond', () => {
    const html = renderBeyond();
    expect(html).toContain('<em>beyond</em>');
    expect(html).toContain('Babbel and');
  });

  it('should render all three cards', () => {
    const html = renderBeyond();
    beyondCards.forEach(c => {
      expect(html).toContain(c.title);
      expect(html).toContain(c.linkText);
    });
  });

  it('should include card images', () => {
    const html = renderBeyond();
    expect(html).toContain('beyond_youtube.png');
    expect(html).toContain('beyond_podcasts.png');
    expect(html).toContain('beyond_magazine.jpg');
  });
});
