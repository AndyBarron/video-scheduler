import { css } from 'styled-components';

const MOBILE_BREAKPOINT_PX = 800;

export const desktop = rules => css`
  @media (min-width: ${ MOBILE_BREAKPOINT_PX + 1 }px) {
    ${ rules }
  }
`;

export const mobile = rules => css`
  @media (max-width: ${ MOBILE_BREAKPOINT_PX }px) {
    ${ rules }
  }
`;

export const pageWidth = () => css`
  margin: 0 auto;
  max-width: 1000px;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
`;
