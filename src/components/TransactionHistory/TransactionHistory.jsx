import PropTypes from 'prop-types';
import { TransactionList } from './TransactionList';
import {
  Table,
  TableHead,
  TableTitle,
  TableBody,
} from './TransactionHistoryStyled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead>
        <tr>
          <TableTitle>Type</TableTitle>
          <TableTitle>Amount</TableTitle>
          <TableTitle>Currency</TableTitle>
        </tr>
      </TableHead>
      <TableBody>
        <TransactionList item={items} />
      </TableBody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
