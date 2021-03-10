import styled, { css } from 'styled-components';

const AccordionStyled = styled.div`
  ${({ theme }) => {
    return css`
      width: 100%;
      .accordion__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 40px;
      }
      .accordion__title {
        ${theme.typeStyles.h4};
      }
      .accordion__btn {
        text-decoration: underline;
        color: ${theme.colors.link};
        background-color: transparent;
        border: none;
        padding: 0;
        margin: 0;
        &:hover {
          text-decoration: none;
        }
      }
      .accordion__item {
        &:not(:last-child) {
          margin-bottom: 24px;
        }
      }
      .accordion-item__button {
        ${theme.typeStyles.h5};
        font-family: ${theme.typeStyles.fontFamily.headings};
        color: ${theme.colors.secondary};
        background-color: rgba(195, 198, 222, 0.2);
        border: none;
        border-radius: 4px;
        padding: 16px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .accordion-item__icon {
        width: 16px;
        height: 16px;
      }
      .accordion-item__panel {
        margin: 16px 0 0 0;
        padding: 0 16px;
      }
    `;
  }}
`;

export default AccordionStyled;
