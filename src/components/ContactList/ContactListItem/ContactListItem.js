import { Item, ContactName, Button } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';

export const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <Item id={id}>
      <ContactName>
        {name}:<span>{number}</span>
      </ContactName>
      <Button onClick={onDelete}>Delete</Button>
    </Item>
  );
};
