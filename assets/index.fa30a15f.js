var e=Object.defineProperty,n=(n,t,i)=>(((n,t,i)=>{t in n?e(n,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[t]=i})(n,"symbol"!=typeof t?t+"":t,i),i);export function __vite_legacy_guard(){import("data:text/javascript,")}import{s as t,o as i,p as o,a as r}from"./vendor.752a4c21.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&n(e)})).observe(document,{childList:!0,subtree:!0})}function n(e){if(e.ep)return;e.ep=!0;const n=function(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?n.credentials="include":"anonymous"===e.crossorigin?n.credentials="omit":n.credentials="same-origin",n}(e);fetch(e.href,n)}}();class s extends t{query(e){var n;return null==(n=this.renderRoot)?void 0:n.querySelector(e)}queryAll(e){var n;return null==(n=this.renderRoot)?void 0:n.querySelectorAll(e)}emit(e,n={}){const t=new CustomEvent(e,{detail:n,bubbles:!0,composed:!0,cancelable:!0});this.dispatchEvent(t)}}class a{constructor(e){(this.host=e).addController(this),this.height=window.innerHeight,this.width=window.innerWidth,this._handleResize=this._handleResize.bind(this)}hostConnected(){this._setupResizeEvent()}hostDisconnected(){this._clearResizeEvent()}_setupResizeEvent(){window.addEventListener("resize",this._handleResize)}_clearResizeEvent(){window.removeEventListener("resize",this._handleResize)}_handleResize(e){this.height=window.innerHeight,this.width=window.innerWidth,this.host.requestUpdate()}}class l extends s{constructor(){super(),this.layout=new a(this),this._loadedDeviceList=!1,this._devicesList=[],this._facing="user",this.stream=null,this._isGalleryOpen=!1}connectedCallback(){super.connectedCallback(),this._openCamera()}_handleToggleGallery(){this._isGalleryOpen=!this._isGalleryOpen}_toggleFacing(){"user"===this._facing?this._facing={exact:"environment"}:this._facing="user"}async _openCamera(){var e;if(!!(null==(e=null==navigator?void 0:navigator.mediaDevices)?void 0:e.getUserMedia)){const e=await navigator.mediaDevices.getUserMedia({video:{facingMode:this._facing},audio:!1});this.stream=e,this.query("video").srcObject=e}}_handleToggleCamera(){var e,n;this.query(".video-holder").classList.toggle("video-holder--rotated"),null==(n=null==(e=this.stream)?void 0:e.getTracks())||n.forEach((e=>{null==e||e.stop()})),this._toggleFacing(),this._openCamera()}_handleTakePicture(){const e=document.createElement("canvas"),n=this.query("video");e.height=n.videoHeight,e.width=n.videoWidth;const t=e.getContext("2d");"user"===this._facing&&(t.translate(e.width,0),t.scale(-1,1)),t.drawImage(n,0,0);const i=e.toDataURL("image/png"),o=document.createElement("a");o.download="file.png",o.href=i,o.click()}render(){return o`
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
    `}}n(l,"styles",i(".main-layout {\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  position: relative;\n  perspective: 150em;\n}\n\n.video-layer {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  perspective: 150em;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.video-holder {\n  width: 100%;\n  height: 100%;\n  transition: all 0.5s ease;\n}\n\n.video-holder--rotated {\n  transform: rotateY(-180deg);\n}\n\n.video-holder video {\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%) scaleX(-1);\n}\n\n.controls-slot {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 20vh;\n}")),n(l,"properties",{_loadedDeviceList:{state:!0},_devicesList:{state:!0},_isMobileDevice:{state:!0},_facing:{state:!0},_isGalleryOpen:{state:!0}});class d extends s{render(){return o`
      <div class="actions">
        <div class="buttons-container">
          <button
            @click="${()=>this.emit("open-gallery")}"
            class="button gallery-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="button-icon"
              viewBox="0 0 512 512"
            >
              <title>Folder Open</title>
              <path
                d="M64 192v-72a40 40 0 0140-40h75.89a40 40 0 0122.19 6.72l27.84 18.56a40 40 0 0022.19 6.72H408a40 40 0 0140 40v40"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
              />
              <path
                d="M479.9 226.55L463.68 392a40 40 0 01-39.93 40H88.25a40 40 0 01-39.93-40L32.1 226.55A32 32 0 0164 192h384.1a32 32 0 0131.8 34.55z"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
              />
            </svg>
          </button>

          <button
            @click="${()=>this.emit("take-picture")}"
            class="button take-picture-button"
          >
            &nbsp;
          </button>

          <button
            class="button change-camera"
            @click="${()=>this.emit("toggle-camera")}"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="button-icon"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M304 48l112 112-112 112M398.87 160H96M208 464L96 352l112-112M114 352h302"
              />
            </svg>
          </button>
        </div>
      </div>
    `}}n(d,"styles",i('*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  -webkit-tap-highlight-color: transparent;\n}\n\n:host {\n  width: 100%;\n}\n\n.buttons-container {\n  max-width: 400px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  margin: 0 auto;\n}\n\n.button {\n  border: none;\n  font-family: inherit;\n  border-radius: 50%;\n  -webkit-backdrop-filter: blur(20px);\n          backdrop-filter: blur(20px);\n  position: relative;\n  z-index: 0;\n  outline: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.button:before {\n  position: absolute;\n  width: 125%;\n  height: 125%;\n  display: block;\n  content: "";\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: -1;\n  border-radius: 50%;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n}\n\n.take-picture-button {\n  width: 60px;\n  height: 60px;\n  background-color: rgba(255, 255, 255, 0.9);\n}\n\n.gallery-button,\n.change-camera {\n  width: 40px;\n  height: 40px;\n  color: white;\n  background-color: rgba(0, 0, 0, 0.6);\n}\n\n.button-icon {\n  width: 20px;\n}'));class c extends s{connectedCallback(){super.connectedCallback()}render(){const e={"gallery--open":this.isOpen};return o`
      <div class="gallery ${r(e)}">
        <div class="content-layer">
          <button @click="${()=>this.emit("close-modal")}">close</button>
        </div>
      </div>
    `}}n(c,"styles",i("*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  -webkit-tap-highlight-color: transparent;\n}\n\n:host {\n  width: 100%;\n}\n\n.gallery {\n  height: 100%;\n  bottom: 0;\n  width: 100%;\n  position: relative;\n  border-radius: 20px 20px 0 0;\n  overflow: hidden;\n  height: 60vh;\n  position: fixed;\n  bottom: 0;\n  transform: translateY(100%);\n  transition: all 0.3s ease-out;\n  background-color: rgba(255, 255, 255, 0.75);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  will-change: transform;\n}\n\n.gallery--open {\n  transform: translateY(0);\n}\n\n.content-layer {\n  padding: 20px;\n}")),n(c,"properties",{isOpen:{type:Boolean,reflect:!0}}),customElements.define("main-app",l),customElements.define("actions-bar",d),customElements.define("app-gallery",c);
