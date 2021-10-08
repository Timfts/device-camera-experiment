import { html } from "lit";
import CustomElement from "../core/CustomElement";
import styles from "./MainApp.styles";
import LayoutController from "../controllers/LayoutController";
import ResetStylesMixin from "../mixins/ResetStyles";

class MainApp extends CustomElement {
  static styles = styles;

  static properties = {
    _loadedDeviceList: { state: true },
    _devicesList: { state: true },
    _isMobileDevice: { state: true },
    _facing: { state: true },
    _isGalleryOpen: { state: true },
  };

  constructor() {
    super();

    this.layout = new LayoutController(this);
    this._loadedDeviceList = false;
    this._devicesList = [];
    this._facing = "user";
    this.stream = null;
    this._isGalleryOpen = false;
  }

  connectedCallback() {
    super.connectedCallback();
    this._openCamera();
  }

  _handleToggleGallery() {
    this._isGalleryOpen = !this._isGalleryOpen;
  }

  _toggleFacing() {
    if (this._facing === "user") {
      this._facing = "environment";
    } else {
      this._facing = "user";
    }
  }

  async _openCamera() {
    const mediaGetter = !!navigator?.mediaDevices?.getUserMedia;

    if (!!mediaGetter) {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: this._facing,
          height: {
            ideal: 720,
            min: 480,
          },
        },
        audio: false,
      });

      this.stream = stream;
      this.query("video").srcObject = stream;
    }
  }

  _handleToggleCamera() {
    const videoHolder = this.query(".video-holder");
    videoHolder.classList.toggle("video-holder--rotated");

    //close current tracks
    this.stream?.getTracks()?.forEach((track) => {
      track?.stop();
    });
    this._toggleFacing();
    this._openCamera();
  }

  _handleTakePicture() {
    const canvas = this.query("canvas");
    const video = this.query("video");
    
    const pixelRatio = window?.devicePixelRatio || 1
    canvas.height = this.layout.height * pixelRatio;
    canvas.width = this.layout.width * pixelRatio;

    const xCenter = video.videoWidth / 2 - this.layout.width / 2;
    const canvasContext = canvas.getContext("2d");
    canvasContext.scale(-1, 1);
    canvasContext.drawImage(
      video,
      xCenter,
      0,
      this.layout.width,
      video.videoHeight,
      0,
      0,
      this.layout.width * -1,
      video.videoHeight
    );
    const image = canvas.toDataURL("image/png");
    const virtualLink = document.createElement("a");
    virtualLink.download = "file.png";
    virtualLink.href = image;
    virtualLink.click();
  }

  render() {
    return html`
      <div class="main-layout">
        <div class="video-layer">
          <div class="video-holder">
            <video autoplay playsinline></video>
          </div>
        </div>
        <div class="controls-slot">
          <actions-bar
            @open-gallery="${this._handleToggleGallery}"
            @toggle-camera="${this._handleToggleCamera}"
            @take-picture="${this._handleTakePicture}"
          ></actions-bar>
        </div>
        <div class="canvas-holder">
          <canvas></canvas>
        </div>
        <app-gallery
          ?isOpen="${this._isGalleryOpen}"
          @close-modal="${this._handleToggleGallery}"
        ></app-gallery>
      </div>
    `;
  }
}

export default ResetStylesMixin(MainApp);
