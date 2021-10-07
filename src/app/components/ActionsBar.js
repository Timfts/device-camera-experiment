import { html } from "lit";
import CustomElement from "../core/CustomElement";
import styles from "./ActionsBar.styles";

export default class ActionsBar extends CustomElement {
  static styles = styles;

  render(){
    return html`
      <div class="actions">
        <p>actions</p>
      </div>
    `
  }
}
