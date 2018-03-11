import { css } from 'styled-components';

export const mobile = rules => css`
  @media (max-width: 800px) {
    ${rules}
  }
`;

export const pageWidth = () => css`
  margin: 0 auto;
  max-width: 1000px;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
`;
