import styled from 'styled-components';

const QuoteWrapperStyled = styled.div`
  margin: 1rem 0;
  position: relative;

  &:before {
    content: '\\201C';
    font-size: 4em;
    color: #77e8c6;
    position: absolute;
    left: 10px;
    top: 10px;
  }
`;
export default QuoteWrapperStyled;
