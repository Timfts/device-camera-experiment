import { html, unsafeCSS } from "lit";
import CustomElement from "../core/CustomElement";
import LayoutController from "../controllers/LayoutController";
import styles from "./MainApp.scss";

class MainApp extends CustomElement {
  static styles = unsafeCSS(styles);

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
      this._facing = { exact: "environment" };
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
          /* height: {
            ideal: 720,
          }, */
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
    const canvas = document.createElement("canvas");
    const video = this.query("video");
    canvas.height = video.videoHeight;
    canvas.width = video.videoWidth;
    const canvasContext = canvas.getContext("2d");

    if (this._facing === "user") {
      canvasContext.translate(canvas.width, 0);
      canvasContext.scale(-1, 1);
    }
    canvasContext.drawImage(video, 0, 0);

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
        <app-gallery
          ?isOpen="${this._isGalleryOpen}"
          @close-modal="${this._handleToggleGallery}"
        ></app-gallery>
      </div>
    `;
  }
}

export default MainApp;
