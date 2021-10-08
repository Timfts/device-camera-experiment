import { LitElement } from "lit";
import ResetStylesMixin from "../mixins/ResetStyles";

class CustomElement extends LitElement {
  query(selector) {
    return this.renderRoot?.querySelector(selector);
  }

  queryAll(selector) {
    return this.renderRoot?.querySelectorAll(selector);
  }
}

export default ResetStylesMixin(CustomElement);
