import { describe, it, expect, beforeEach } from 'vitest';
import { initApp } from '../main.js';

describe('initApp', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="app"></div>';
  });

  it('should render content into the #app element', () => {
    initApp();
    const app = document.getElementById('app');
    expect(app.innerHTML).toContain('Babbel');
  });

  it('should not throw if #app element is missing', () => {
    document.body.innerHTML = '';
    expect(() => initApp()).not.toThrow();
  });
});
