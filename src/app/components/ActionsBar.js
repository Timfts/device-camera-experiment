import { html, unsafeCSS } from "lit";
import CustomElement from "../core/CustomElement";
import styles from "./ActionsBar.scss"


class ActionsBar extends CustomElement {
  static styles = unsafeCSS(styles);

  render() {
    return html`
      <div class="actions">
        <div class="buttons-container">
          <button
            @click="${() => this.emit("open-gallery")}"
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
            @click="${() => this.emit("take-picture")}"
            class="button take-picture-button"
          >
            &nbsp;
          </button>

          <button
            class="button change-camera"
            @click="${() => this.emit("toggle-camera")}"
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
    `;
  }
}

export default ActionsBar;
