import {html, css, LitElement} from 'lit';
// import {property} from 'lit/decorators.js';

// @customElement('buttonDemo')
export class btnDemo extends LitElement {
    declare name: string;
    static styles = css`
    button {
        color : green;
    }
    `;


    // @property() name = 'Somebody';
    static properties = {name: {type: String}}
    constructor() {
        super();
        this.name = 'Default';
      }

    render() {
        return html`<button> click me ${this.name} </button>`
    }
    
}
customElements.define('buttonDemo',btnDemo);

declare global {
    interface HTMLElementTagNameMap {
      'buttonDemo': btnDemo;
    }
  }