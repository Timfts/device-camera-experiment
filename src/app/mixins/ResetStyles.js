import { css } from "lit";

const ResetStylesMixin = (SuperElement) => {
  const inheritedCss = SuperElement?.styles || "";
  return class extends SuperElement {
    static styles = [
      css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
          -webkit-tap-highlight-color: transparent; 
        }

        :host {
          color: red;
        }
      `,
      inheritedCss,
    ];
  };
};

export default ResetStylesMixin;
