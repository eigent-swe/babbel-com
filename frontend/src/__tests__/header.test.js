import { describe, it, expect } from 'vitest';
import { renderHeader } from '../components/header.js';

describe('renderHeader', () => {
  it('should return HTML containing the Babbel logo', () => {
    const html = renderHeader();
    expect(html).toContain('babbel_logo.png');
    expect(html).toContain('alt="Babbel"');
  });

  it('should contain navigation links', () => {
    const html = renderHeader();
    expect(html).toContain('For businesses');
    expect(html).toContain('Log in');
    expect(html).toContain('Sign up');
  });

  it('should contain the language selector button', () => {
    const html = renderHeader();
    expect(html).toContain('American English');
    expect(html).toContain('header__lang-btn');
  });

  it('should have proper ARIA attributes', () => {
    const html = renderHeader();
    expect(html).toContain('aria-label="main"');
    expect(html).toContain('aria-label="Babbel home"');
  });
});
