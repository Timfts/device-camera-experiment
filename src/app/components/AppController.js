import { html } from "lit";
import CustomElement from "../core/CustomElement";
import styles from "./AppController.styles";

class AppController extends CustomElement {
  static styles = styles;

  constructor() {
    super();
  }

  _handleOpenFrontalCamera() {
    this._openCamera("user");
  }

  _handleOpenRegularCamera = () => {
    this._openCamera({ exact: "environment" });
  };

  async _openCamera(facing) {
    const mediaGetter = !!navigator?.mediaDevices?.getUserMedia;

    if (!!mediaGetter) {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: facing,
        },
        audio: false,
      });

      this.query("video").srcObject = stream;
    }
  }

  render() {
    return html`
      <div class="main-layout">
        <div class="video-layer">
          <video autoplay playsinline></video>
        </div>
        <div class="controls-layer">
          <button @click="${this._handleOpenFrontalCamera}">camera</button>
        </div>
      </div>
    `;
  }
}

export default AppController;
