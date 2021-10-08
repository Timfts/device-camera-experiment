import { html } from "lit";
import CustomElement from "../core/CustomElement";
import ResetStylesMixin from "../mixins/ResetStyles";

import styles from "./Gallery.styles";

class Gallery extends CustomElement {
  static styles = styles;
  render() {
    return html`
      <div class="gallery">
        <div class="backdrop-layer"></div>
        <div class="content-layer">
          <p>cebola</p>
        </div>
      </div>
    `;
  }
}

export default ResetStylesMixin(Gallery);
