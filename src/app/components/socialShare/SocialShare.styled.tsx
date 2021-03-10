import styled, { css } from 'styled-components';

const SocialShareStyled = styled.div`
  ${() => {
    return css`
      display: flex;
      align-items: flex-end;
      justify-content: flex-start;
      .social-share__icon {
        margin-right: 32px;
        display: inline-block;
        line-height: 0;
      }
      .social-share__copy {
        line-height: 0;
        display: inline-block;
        background-color: transparent;
        border: none;
        margin: 0;
        padding: 0;
      }
      .social-share__icon,
      .social-share__copy {
        transition: opacity 100ms ease-in-out;
        &:hover {
          opacity: 0.8;
        }
      }
    `;
  }};
`;

export default SocialShareStyled;
