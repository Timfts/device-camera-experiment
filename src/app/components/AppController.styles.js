import { css } from "lit";

export default css`
  .main-layout {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
    perspective: 150em;
  }

  .video-layer {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    perspective: 150em;
  }

  .canvas-holder {
    display: none;
  }

  .video-holder {
    width: 100%;
    height: 100%;
    transition: all 0.5s ease;
  }

  .video-holder--rotated {
    transform: rotateY(-180deg);
  }

  .video-holder video {
    height: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%) scaleX(-1);
  }

  .controls-slot {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 20vh;
  }
`;
