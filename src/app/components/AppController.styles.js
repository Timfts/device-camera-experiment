import { css } from "lit";

export default css`
  .main-layout {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
  }

  .video-layer {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .video-layer video {
    width: 100%;
    height: 100%;
  }

  .controls-layer {
    position: absolute;
    background-color: white;
    bottom: 0;
  }
`;
