import React from 'react';
import {
  RenderBlockPropsWithChildren,
  TableBlock as TableBlockProps,
  Table as TableCanvas,
} from '@contensis/canvas-react';
import styled, { css } from 'styled-components';

const TableBlock = (props: RenderBlockPropsWithChildren<TableBlockProps>) => {
  return (
    <TabledStyled data-component="table-block">
      <div style={{ overflowX: 'auto' }}>
        <TableCanvas block={props.block} />
      </div>
    </TabledStyled>
  );
};

export default TableBlock;

const TabledStyled = styled.div`
  ${() => {
    return css`
      table {
        border-collapse: collapse;
        width: 100%;
      }
    `;
  }}
`;
