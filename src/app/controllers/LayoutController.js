/**
 * @typedef {import("lit").ReactiveController} ReactiveController
 */

/**
 * @implements {ReactiveController}
 */
class LayoutController {
  constructor(host) {
    (this.host = host).addController(this);
    this.height = window.innerHeight;
    this.width = window.innerWidth;
    this._handleResize = this._handleResize.bind(this);
  }

  hostConnected() {
    this._setupResizeEvent();
  }

  hostDisconnected() {
    this._clearResizeEvent();
  }

  _setupResizeEvent() {
    window.addEventListener("resize", this._handleResize);
  }

  _clearResizeEvent() {
    window.removeEventListener("resize", this._handleResize);
  }

  _handleResize(e) {
    this.height = window.innerHeight;
    this.width = window.innerWidth;
    this.host.requestUpdate();
  }
}

export default LayoutController;
