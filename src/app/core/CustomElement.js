import { LitElement, css, html } from "lit";
import ResetStylesMixin from "../mixins/ResetStyles";

class CustomElement extends LitElement {
  query(selector) {
    this.renderRoot?.querySelector(selector);
  }

  queryAll(selector) {
    this.renderRoot?.querySelectorAll(selector);
  }
}

export default ResetStylesMixin(CustomElement);
