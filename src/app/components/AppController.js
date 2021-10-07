import { LitElement, css, html } from "lit";

export default class AppController extends LitElement {
  constructor() {
    super();
    console.log("app mounted");
  }

  _handleButtonClick(e) {
    console.log(this);
    console.log(e);
  }

  _handleOpenCamera() {
    const hasMedia = !!navigator?.mediaDevices?.getUserMedia

    alert(hasMedia)
  }

  render() {
    return html`
      <div class="main-layout">
        <custom-button @click="${this._handleOpenCamera}">
          Open camera
        </custom-button>
      </div>
    `;
  }
}
