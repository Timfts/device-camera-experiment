import { css } from "lit";

export default css`
  :host {
    width: 100%;
  }

  .buttons-container {
    max-width: 400px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
  }

  .button {
    border: none;
    font-family: inherit;
    border-radius: 50%;
    backdrop-filter: blur(20px);
    position: relative;
    z-index: 0;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .button:before {
    position: absolute;
    width: 125%;
    height: 125%;
    display: block;
    content: "";
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.3);
  }

  .take-picture-button {
    width: 60px;
    height: 60px;
    background-color: rgba(255, 255, 255, 0.9);
  }

  .gallery-button,
  .change-camera {
    width: 40px;
    height: 40px;
    color: white;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .button-icon {
    width: 20px;
  }
`;
