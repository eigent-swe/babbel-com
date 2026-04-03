import { describe, it, expect } from 'vitest';
import { renderFooter, footerColumns } from '../components/footer.js';

describe('renderFooter', () => {
  it('should render all three column titles', () => {
    const html = renderFooter();
    expect(html).toContain('Courses');
    expect(html).toContain('More Babbel');
    expect(html).toContain('Company');
  });

  it('should render copyright', () => {
    const html = renderFooter();
    expect(html).toContain('2026 Babbel GmbH');
  });

  it('should render legal links', () => {
    const html = renderFooter();
    expect(html).toContain('Imprint');
    expect(html).toContain('Terms');
    expect(html).toContain('Privacy Statement');
  });

  it('should render social media links', () => {
    const html = renderFooter();
    expect(html).toContain('facebook');
    expect(html).toContain('youtube');
    expect(html).toContain('instagram');
    expect(html).toContain('linkedin');
  });

  it('should have correct number of links per column', () => {
    expect(footerColumns[0].links).toHaveLength(13);
    expect(footerColumns[1].links).toHaveLength(13);
    expect(footerColumns[2].links).toHaveLength(10);
  });
});
