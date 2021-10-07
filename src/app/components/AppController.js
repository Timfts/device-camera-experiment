import { html } from "lit";
import CustomElement from "../core/CustomElement";
import styles from "./AppController.styles";

class AppController extends CustomElement {
  static styles = styles;

  static properties = {
    _loadedDeviceList: { state: true },
    _devicesList: { state: true },
  };

  constructor() {
    super();

    this._loadedDeviceList = false;
    this._devicesList = [];
  }

  connectedCallback() {
    super.connectedCallback();
    this._detectAvailableCameras();
  }

  async _detectAvailableCameras() {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const videoDevices = devices.filter(
      (device) => device.kind === "videoinput"
    );

    const labels = videoDevices.reduce((acc, item) => `${acc} * ${item.label} \n`, '')

    alert(labels)

    this._devicesList = videoDevices;
    this._loadedDeviceList = true;
  }

  _handleOpenGallery() {
    alert("opening gallery");
  }

  _handleToggleCamera() {
    console.log("toggleCamera");
  }

  _handleTakePicture() {}

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
          <actions-bar></actions-bar>
          <button @click="${this._handleOpenFrontalCamera}">camera</button>
        </div>
      </div>
    `;
  }
}

export default AppController;
