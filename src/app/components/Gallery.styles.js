import { css } from "lit";

export default css`
  :host {
    width: 100%;
  }

  .gallery {
    height: 100%;
    bottom: 0;
    width: 100%;
    position: relative;
    border-radius: 20px 20px 0 0;
    overflow: hidden;
    height: 60vh;
    position: fixed;
    bottom: 0;
    transform: translateY(100%);
    transition: all 0.3s ease-out;
    background-color: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    will-change: transform;
  }

  .gallery--open {
    transform: translateY(0);
  }

  .content-layer {
    padding: 20px;
  }
`;
