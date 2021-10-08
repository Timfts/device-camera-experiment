import { css } from "lit";

export default css`
  :host {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 85vh;
  }

  .gallery {
    height: 100%;
    bottom: 0;
    width: 100%;
    position: relative;
    border-radius: 20px 20px 0 0;
    overflow: hidden;
  }

  .backdrop-layer,
  .content-layer {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    border-radius: 20px 20px 0 0;
  }

  .backdrop-layer {
    background-color: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }

  .content-layer {
    padding: 20px;
  }
`;
