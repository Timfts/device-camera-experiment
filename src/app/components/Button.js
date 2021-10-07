import { LitElement, css, html } from "lit";

export default class CustomComponent extends LitElement {
  static styles = css`
    .button {
      color: red;
    }
  `;

  render() {
    return html`<button class="button"><slot></slot></button>`;
  }
}
