import PropTypes from 'prop-types';
import { TableContent, TableRow } from './TransactionHistoryStyled';

export const TransactionList = ({ item }) => {
  return item.map(({ id, type, amount, currency }) => (
    <TableRow key={id}>
      <TableContent>{type}</TableContent>
      <TableContent>{amount}</TableContent>
      <TableContent>{currency}</TableContent>
    </TableRow>
  ));
};

TransactionList.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
