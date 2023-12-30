import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('buttonDemo')
export class btnDemo extends LitElement {
    static styles = css`
    button{
        color : green;
    }
    `


    @property() name = 'Somebody';

    render() {
        return html`<button> click me ${this.id} </button>`
    }
    
}

declare global {
    interface HTMLElementTagNameMap {
      'buttonDemo': btnDemo;
    }
  }