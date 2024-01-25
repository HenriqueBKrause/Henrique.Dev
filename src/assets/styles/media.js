import { css } from "styled-components";

const screenSizes = {
  large: 1920,
  desktop: 1549,
  tablet: 1080,
  mobile: 378,
};

export const media = Object.keys(screenSizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${screenSizes[label] / 16}rem) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
