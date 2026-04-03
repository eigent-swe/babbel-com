import { describe, it, expect } from 'vitest';
import { renderMethod, pillars } from '../components/method.js';

describe('renderMethod', () => {
  it('should render the section heading', () => {
    const html = renderMethod();
    expect(html).toContain('The Proven Babbel Method');
  });

  it('should render all three pillars', () => {
    const html = renderMethod();
    pillars.forEach(p => {
      expect(html).toContain(p.title);
      expect(html).toContain(p.text);
    });
  });

  it('should render the subtitle', () => {
    const html = renderMethod();
    expect(html).toContain('award-winning app');
  });
});
