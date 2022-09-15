export const ContactList = ({ items }) => {
  const itemList = items.map(({ id, name, number }) => {
    return (
      <li key={id}>
        {name}: {number}
      </li>
    );
  });

  return <ul>{itemList}</ul>;
};
