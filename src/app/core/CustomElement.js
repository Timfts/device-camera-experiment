import { LitElement } from "lit";

class CustomElement extends LitElement {
  query(selector) {
    return this.renderRoot?.querySelector(selector);
  }

  queryAll(selector) {
    return this.renderRoot?.querySelectorAll(selector);
  }

  emit(name, payload = {}) {
    const event = new CustomEvent(name, {
      detail: payload,
      bubbles: true,
      composed: true,
      cancelable: true,
    });

    this.dispatchEvent(event);
  }
}

export default CustomElement;
