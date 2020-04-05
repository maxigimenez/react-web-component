import React from 'react';
import ReactDOM from 'react-dom';
import retargetEvents from 'react-shadow-dom-retarget-events';

import { MyComponent } from './my-component';

export default class WebComponent extends HTMLElement {
  container: HTMLDivElement | any;

  createComponent() {
    return React.createElement(MyComponent, {}, React.createElement('slot'));
  }

  getStyles(): HTMLStyleElement {
    const stylesheet = document.createElement('style');
    stylesheet.innerHTML = `
      .my-component {
        border: 1px solid red;
      }
    `;
    return stylesheet;
  }

  connectedCallback() {
    this.container = document.createElement('div');
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(this.container);
    shadowRoot.appendChild(this.getStyles());
    ReactDOM.render(this.createComponent(), this.container);
    retargetEvents(shadowRoot);
  }
}

window.customElements.define('my-react-component', WebComponent);
