!function(){let e,t,n,i=e=>e;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var r=document.createElement("style");r.innerHTML='.main-layout{width:100vw;height:100vh;overflow:hidden;position:relative;perspective:150em}.video-layer{width:100%;height:100%;position:absolute;top:0;left:0;overflow:hidden;perspective:150em}.video-holder{width:100%;height:100%;transition:all .5s ease}.video-holder--rotated{transform:rotateY(-180deg)}.video-holder video{height:100%;position:absolute;top:0;left:50%;transform:translate(-50%) scaleX(-1)}.controls-slot{position:absolute;bottom:0;width:100%;height:20vh}.buttons-container{max-width:400px;display:flex;justify-content:space-around;align-items:center;margin:0 auto}.button{border:none;font-family:inherit;border-radius:50%;-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);position:relative;z-index:0;outline:none;display:flex;align-items:center;justify-content:center;cursor:pointer}.button:before{position:absolute;width:125%;height:125%;display:block;content:"";top:50%;left:50%;transform:translate(-50%,-50%);z-index:-1;border-radius:50%;border:2px solid rgba(255,255,255,.3)}.take-picture-button{width:60px;height:60px;background-color:#ffffffe6}.gallery-button,.change-camera{width:40px;height:40px;color:#fff;background-color:#0009}.button-icon{width:20px}*,*:before,*:after{box-sizing:border-box;padding:0;margin:0;-webkit-tap-highlight-color:transparent}:host{width:100%}.gallery{height:100%;width:100%;position:relative;border-radius:20px 20px 0 0;overflow:hidden;height:60vh;position:fixed;bottom:0;transform:translateY(100%);transition:all .3s ease-out;background-color:#ffffffbf;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);will-change:transform}.gallery--open{transform:translateY(0)}.content-layer{padding:20px}\n',document.head.appendChild(r),System.register(["./vendor-legacy.313a2a9a.js"],(function(){"use strict";var r,a,s,l;return{setters:[function(e){r=e.s,a=e.o,s=e.p,l=e.a}],execute:function(){class d extends r{query(e){var t;return null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e)}queryAll(e){var t;return null===(t=this.renderRoot)||void 0===t?void 0:t.querySelectorAll(e)}emit(e,t={}){const n=new CustomEvent(e,{detail:t,bubbles:!0,composed:!0,cancelable:!0});this.dispatchEvent(n)}}class h{constructor(e){(this.host=e).addController(this),this.height=window.innerHeight,this.width=window.innerWidth,this._handleResize=this._handleResize.bind(this)}hostConnected(){this._setupResizeEvent()}hostDisconnected(){this._clearResizeEvent()}_setupResizeEvent(){window.addEventListener("resize",this._handleResize)}_clearResizeEvent(){window.removeEventListener("resize",this._handleResize)}_handleResize(e){this.height=window.innerHeight,this.width=window.innerWidth,this.host.requestUpdate()}}class c extends d{constructor(){super(),this.layout=new h(this),this._loadedDeviceList=!1,this._devicesList=[],this._facing="user",this.stream=null,this._isGalleryOpen=!1}connectedCallback(){super.connectedCallback(),this._openCamera()}_handleToggleGallery(){this._isGalleryOpen=!this._isGalleryOpen}_toggleFacing(){"user"===this._facing?this._facing={exact:"environment"}:this._facing="user"}async _openCamera(){var e,t;if(!(null===(e=navigator)||void 0===e||null===(t=e.mediaDevices)||void 0===t||!t.getUserMedia)){const e=await navigator.mediaDevices.getUserMedia({video:{facingMode:this._facing},audio:!1});this.stream=e,this.query("video").srcObject=e}}_handleToggleCamera(){var e,t;this.query(".video-holder").classList.toggle("video-holder--rotated"),null===(e=this.stream)||void 0===e||null===(t=e.getTracks())||void 0===t||t.forEach((e=>{null==e||e.stop()})),this._toggleFacing(),this._openCamera()}_handleTakePicture(){const e=document.createElement("canvas"),t=this.query("video");e.height=t.videoHeight,e.width=t.videoWidth;const n=e.getContext("2d");"user"===this._facing&&(n.translate(e.width,0),n.scale(-1,1)),n.drawImage(t,0,0);const i=e.toDataURL("image/png"),o=document.createElement("a");o.download="file.png",o.href=i,o.click()}render(){return s(e||(e=i`
      <div class="main-layout">
        <div class="video-layer">
          <div class="video-holder">
            <video autoplay playsinline></video>
          </div>
        </div>
        <div class="controls-slot">
          <actions-bar
            @open-gallery="${0}"
            @toggle-camera="${0}"
            @take-picture="${0}"
          ></actions-bar>
        </div>
        <app-gallery
          ?isOpen="${0}"
          @close-modal="${0}"
        ></app-gallery>
      </div>
    `),this._handleToggleGallery,this._handleToggleCamera,this._handleTakePicture,this._isGalleryOpen,this._handleToggleGallery)}}o(c,"styles",a(".main-layout {\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  position: relative;\n  perspective: 150em;\n}\n\n.video-layer {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  perspective: 150em;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.video-holder {\n  width: 100%;\n  height: 100%;\n  transition: all 0.5s ease;\n}\n\n.video-holder--rotated {\n  transform: rotateY(-180deg);\n}\n\n.video-holder video {\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%) scaleX(-1);\n}\n\n.controls-slot {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 20vh;\n}")),o(c,"properties",{_loadedDeviceList:{state:!0},_devicesList:{state:!0},_isMobileDevice:{state:!0},_facing:{state:!0},_isGalleryOpen:{state:!0}});class p extends d{render(){return s(t||(t=i`
      <div class="actions">
        <div class="buttons-container">
          <button
            @click="${0}"
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
            @click="${0}"
            class="button take-picture-button"
          >
            &nbsp;
          </button>

          <button
            class="button change-camera"
            @click="${0}"
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
    `),(()=>this.emit("open-gallery")),(()=>this.emit("take-picture")),(()=>this.emit("toggle-camera")))}}o(p,"styles",a('*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  -webkit-tap-highlight-color: transparent;\n}\n\n:host {\n  width: 100%;\n}\n\n.buttons-container {\n  max-width: 400px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  margin: 0 auto;\n}\n\n.button {\n  border: none;\n  font-family: inherit;\n  border-radius: 50%;\n  -webkit-backdrop-filter: blur(20px);\n          backdrop-filter: blur(20px);\n  position: relative;\n  z-index: 0;\n  outline: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.button:before {\n  position: absolute;\n  width: 125%;\n  height: 125%;\n  display: block;\n  content: "";\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: -1;\n  border-radius: 50%;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n}\n\n.take-picture-button {\n  width: 60px;\n  height: 60px;\n  background-color: rgba(255, 255, 255, 0.9);\n}\n\n.gallery-button,\n.change-camera {\n  width: 40px;\n  height: 40px;\n  color: white;\n  background-color: rgba(0, 0, 0, 0.6);\n}\n\n.button-icon {\n  width: 20px;\n}'));class u extends d{connectedCallback(){super.connectedCallback()}render(){const e={"gallery--open":this.isOpen};return s(n||(n=i`
      <div class="gallery ${0}">
        <div class="content-layer">
          <button @click="${0}">close</button>
        </div>
      </div>
    `),l(e),(()=>this.emit("close-modal")))}}o(u,"styles",a("*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  -webkit-tap-highlight-color: transparent;\n}\n\n:host {\n  width: 100%;\n}\n\n.gallery {\n  height: 100%;\n  bottom: 0;\n  width: 100%;\n  position: relative;\n  border-radius: 20px 20px 0 0;\n  overflow: hidden;\n  height: 60vh;\n  position: fixed;\n  bottom: 0;\n  transform: translateY(100%);\n  transition: all 0.3s ease-out;\n  background-color: rgba(255, 255, 255, 0.75);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  will-change: transform;\n}\n\n.gallery--open {\n  transform: translateY(0);\n}\n\n.content-layer {\n  padding: 20px;\n}")),o(u,"properties",{isOpen:{type:Boolean,reflect:!0}}),customElements.define("main-app",c),customElements.define("actions-bar",p),customElements.define("app-gallery",u)}}}))}();
