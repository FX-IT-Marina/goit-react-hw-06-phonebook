import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './FilterForm/FilterForm';
import { ContactList } from './ContactList/ContactList';
import { FormContainer, Title } from './App.styled';

export function App() {
  return (
    <FormContainer>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </FormContainer>
  );
}
