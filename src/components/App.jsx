import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  addContacts = data => {
    this.setState(prevState => {
      const newContact = {
        id: nanoid(5),
        ...data,
      };
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onAddContacs={this.addContacts} />
        <h2>Contacts</h2>
        <ContactList items={this.state.contacts} />
      </>
    );
  }
}
