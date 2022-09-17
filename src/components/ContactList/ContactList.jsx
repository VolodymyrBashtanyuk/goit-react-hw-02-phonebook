import { List, Item, Button } from './ContactListStyled';

export const ContactList = ({ items, onRemove }) => {
  const itemList = items.map(({ id, name, number }) => {
    return (
      <Item key={id}>
        {name}: {number}
        <Button type="button" onClick={() => onRemove(id)}>
          Delete
        </Button>
      </Item>
    );
  });

  return <List>{itemList}</List>;
};
