import { ContactListItem } from './ContactListItem/ContactListItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactSlice';
import { getFilter } from 'redux/filterSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContact = () => {
    return contacts.filter(({ name }) =>
      name
        .split(' ')
        .join('')
        .toLocaleLowerCase()
        .includes(filter.toLocaleLowerCase())
    );
  };
  return (
    <List>
      {visibleContact().map(({ name, number, id }) => {
        return <ContactListItem name={name} number={number} key={id} id={id} />;
      })}
    </List>
  );
};
