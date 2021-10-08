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
          <button class="button gallery-button">G</button>
          <button class="button take-picture-button">&nbsp;</button>
          <button class="button change-camera">c</button>
        </div>
      </div>
    `;
  }
}

export default ResetStylesMixin(ActionsBar);
