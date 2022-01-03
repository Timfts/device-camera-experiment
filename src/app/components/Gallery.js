import { html, unsafeCSS } from "lit";
import { classMap } from "lit/directives/class-map.js";
import CustomElement from "../core/CustomElement";

import styles from "./Gallery.scss";

class Gallery extends CustomElement {
  static styles = unsafeCSS(styles);
  static properties = {
    isOpen: { type: Boolean, reflect: true },
  };

  connectedCallback() {
    super.connectedCallback();
  }
  render() {
    const componentClass = {
      "gallery--open": this.isOpen,
    };

    return html`
      <div class="gallery ${classMap(componentClass)}">
        <div class="content-layer">
          <button @click="${() => this.emit("close-modal")}">close</button>
        </div>
      </div>
    `;
  }
}

export default Gallery;
