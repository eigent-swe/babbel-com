import { describe, it, expect } from 'vitest';
import { renderCTA } from '../components/cta.js';

describe('renderCTA', () => {
  it('should render the heading', () => {
    const html = renderCTA();
    expect(html).toContain('Join millions of Babbel learners');
    expect(html).toContain('breaking the language barrier every day');
  });

  it('should render all language options', () => {
    const html = renderCTA();
    expect(html).toContain('Spanish (Mexico)');
    expect(html).toContain('French');
    expect(html).toContain('German');
    expect(html).toContain('Italian');
    expect(html).toContain('More');
  });

  it('should contain language links', () => {
    const html = renderCTA();
    expect(html).toContain('href="https://my.babbel.com');
  });
});
