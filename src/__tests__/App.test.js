import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';

import App from '../components/App';

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
    render(<App />, container);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div>
      <h3>Let's do some math!</h3>
      <div>
        <div>0</div>
        <div><button type=\\"button\\">AC</button><button type=\\"button\\">+/-</button><button type=\\"button\\">%</button><button type=\\"button\\">÷</button></div>
        <div><button type=\\"button\\">7</button><button type=\\"button\\">8</button><button type=\\"button\\">9</button><button type=\\"button\\">X</button></div>
        <div><button type=\\"button\\">4</button><button type=\\"button\\">5</button><button type=\\"button\\">6</button><button type=\\"button\\">-</button></div>
        <div><button type=\\"button\\">1</button><button type=\\"button\\">2</button><button type=\\"button\\">3</button><button type=\\"button\\">+</button></div>
        <div><button type=\\"button\\">0</button><button type=\\"button\\">.</button><button type=\\"button\\">=</button></div>
      </div>
    </div>"
  `);
});
