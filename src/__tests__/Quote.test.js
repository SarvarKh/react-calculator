import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';

import Quote from '../components/Quote';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('should render a Quote', () => {
  act(() => {
    render(<Quote />, container);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div>
      <div>Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. –William Paul Thurston</div>
    </div>"
  `);
});
