import styled from 'styled-components';

export const Table = styled.table`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 900px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  border: 1px solid black;
  box-shadow: 6px 9px 29px -2px rgba(120, 153, 166, 0.61);
`;

export const TableHead = styled.thead`
  border-spacing: 0;
`;

export const TableTitle = styled.th`
  width: 300px;
  padding: 10px 0;
  border-right: 1px solid black;
  :last-child {
    border-right: 0;
  }
  background-color: blue;
`;

export const TableBody = styled.tbody`
  text-align: center;
  border-spacing: 0;
  border-top: 0;
`;

export const TableRow = styled.tr`
  background-color: #12f8d2;
  :nth-last-child(2n) {
    background-color: #b3f3e8;
  }
`;

export const TableContent = styled.td`
  width: 300px;
  border-right: 1px solid black;
  :last-child {
    border-right: 0;
  }
  padding: 10px 0;
`;
