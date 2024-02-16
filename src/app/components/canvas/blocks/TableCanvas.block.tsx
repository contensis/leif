import React from 'react';
import {
  RenderBlockPropsWithChildren,
  TableBlock as TableBlockProps,
  Table as TableCanvas,
} from '@contensis/canvas-react';
import styled, { css } from 'styled-components';
// import TableBlockStyled from '~/components/TableBlock/TableBlock.styled';

const TableBlock = (props: RenderBlockPropsWithChildren<TableBlockProps>) => {
  return (
    <TabledStyled data-component="table-block">
      <div>
        <TableCanvas block={props.block} />
      </div>
    </TabledStyled>
  );
};

export default TableBlock;

const TabledStyled = styled.div`
  ${() => {
    return css`
      > div:first-child {
        min-width: 720px;
        max-width: 100%;
        overflow-x: auto;
      }
    `;
  }}
`;
