import { css, html } from "lit";
import CustomElement from "../core/CustomElement";

class AppController extends CustomElement {
  static styles = css`
    .canvas {
      display: none;
    }

    video {
      width: 100%;
      height: 80vh;
    }
  `;


  get _videoElm() {
    return this.renderRoot?.querySelector("video");
  }

  _handleButtonClick(e) {
    console.log(this);
    console.log(e);
  }

  _handleOpenFrontalCamera() {
    this._openCamera("user");
  }

  _handleOpenRegularCamera() {
    this._openCamera({ exact: "environment" });
  }

  async _openCamera(facing) {
    const mediaGetter = !!navigator?.mediaDevices?.getUserMedia;

    if (!!mediaGetter) {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: facing,
        },
        audio: false,
      });

      this._videoElm.srcObject = stream;
    }
  }

  render() {
    return html`
      <div class="main-layout">
        <canvas class="canvas"></canvas>
        <video autoplay></video>
        <custom-button @click="${this._handleOpenFrontalCamera}">
          Open frontal camera
        </custom-button>
        <custom-button @click="${this._handleOpenRegularCamera}">
          Open regular camera
        </custom-button>
        <p>sds</p>
      </div>
    `;
  }
}

export default AppController