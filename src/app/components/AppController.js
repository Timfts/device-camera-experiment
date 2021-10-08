import { html } from "lit";
import CustomElement from "../core/CustomElement";
import styles from "./AppController.styles";
import LayoutController from "../controllers/LayoutController";
import ResetStylesMixin from "../mixins/ResetStyles";

class AppController extends CustomElement {
  static styles = styles;

  static properties = {
    _loadedDeviceList: { state: true },
    _devicesList: { state: true },
    _isMobileDevice: { state: true },
    _facing: { state: true },
  };

  constructor() {
    super();

    this._loadedDeviceList = false;
    this._devicesList = [];
    this._facing = "user";
    this.layout = new LayoutController(this);
    this.stream = null;
  }

  connectedCallback() {
    super.connectedCallback();
    this._openCamera();
  }

  _handleOpenGallery() {
    alert("opening gallery");
  }

  _handleOpenFrontalCamera() {
    this._openCamera("user");
  }

  _handleOpenRegularCamera = () => {
    this._openCamera({ exact: "environment" });
  };

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
    this._openCamera()

    console.log("toggle");
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
            @open-gallery="${this._handleOpenGallery}"
            @toggle-camera="${this._handleToggleCamera}"
          ></actions-bar>
        </div>
      </div>
    `;
  }
}

export default ResetStylesMixin(AppController);
