import styled, { css } from 'styled-components';

export default styled.button`
  ${({ theme }) => {
    return css`
      --semantic-riptide-primary: #77e8c6;
      --semantic-riptide-secondary: #39b28e;
      --semantic-martinique-primary: #2b2f51;
      --semantic-martinique-secondary: #1e213e;
      --semantic-martinique-tertiary: rgba(195, 198, 222, 0.2);
      --semantic-white-primary: #fff;
      --semantic-white-secondary: rgba(255, 255, 255, 0.2);

      ${theme.typeStyles.h5};
      font-family: ${theme.typeStyles.fontFamily.headings};
      font-weight: 600;
      text-align: center;
      text-decoration: none;
      padding: 16px 8px;
      max-width: 256px;
      width: 100%;
      border-radius: 4px;
      border: none;
      transition: all 200ms ease-out;
      display: flex;
      align-items: center;
      justify-content: center;

      .btn__icon {
        margin-left: 16px;
      }

      &:focus {
        outline: 2px solid var(--semantic-link-primary);
        outline-offset: -4px;
      }

      &[data-theme='riptide'] {
        background-color: var(--semantic-riptide-primary);
        color: var(--semantic-martinique-primary);
        &:hover {
          background-color: var(--semantic-riptide-secondary);
        }
      }
      &[data-theme='riptide'][data-variant='secondary'] {
        background-color: transparent;
        border: 1px solid var(--semantic-riptide-primary);
        &:hover {
          background-color: var(--semantic-martinique-tertiary);
        }
      }

      &[data-theme='martinique'] {
        background-color: var(--semantic-martinique-primary);
        color: var(--semantic-riptide-primary);
        &:hover {
          background-color: var(--semantic-martinique-secondary);
        }
      }
      &[data-theme='martinique'][data-variant='secondary'] {
        background-color: transparent;
        color: var(--semantic-martinique-primary);
        border: 1px solid var(--semantic-martinique-primary);
        &:hover {
          background-color: var(--semantic-martinique-tertiary);
        }
      }

      &[data-theme='white'] {
        background-color: var(--semantic-white-primary);
        color: var(--semantic-white-primary);
        &:hover {
          background-color: var(--semantic-white-secondary);
        }
      }
      &[data-theme='white'][data-variant='secondary'] {
        background-color: transparent;
        border: 1px solid var(--semantic-white-primary);
        &:hover {
          background-color: var(--semantic-white-secondary);
        }
      }
    `;
  }}
`;
