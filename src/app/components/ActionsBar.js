import { html } from "lit";
import CustomElement from "../core/CustomElement";
import styles from "./ActionsBar.styles";
import ResetStylesMixin from "../mixins/ResetStyles";

class ActionsBar extends CustomElement {
  static styles = styles;

  render() {
    return html`
      <div class="actions">
        <div class="buttons-container">
          <button
            @click="${() => this.emit("open-gallery")}"
            class="button gallery-button"
          >
            G
          </button>

          <button
            @click="${() => this.emit("take-picture")}"
            class="button take-picture-button"
          >
            &nbsp;
          </button>

          <button
            class="button change-camera"
            @click="${() => this.emit("toggle-camera")}"
          >
            c
          </button>
        </div>
      </div>
    `;
  }
}

export default ResetStylesMixin(ActionsBar);
