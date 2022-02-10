import React, { Component } from "react";
import { nanoid } from "nanoid";
// import ContactList from "../ContactList/ContactList.jsx";

class ContactForm extends Component {
  state = {
    contacts: [],
    name: "",
  };

  inputID = nanoid();

  // Odpowiada za aktualizację stanu
  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState((state) => ({
      contacts: [...state.contacts, { id: nanoid(), name: this.state.name }],
    }));
      console.log(this.state.contacts);

    // e.preventDefault();
    // let newContacts = this.state.contacts;
    // newContacts.push(this.state.name);
    // this.setState({ contacts: newContacts });
    // console.log(this.state.contacts);
  };


  render() {
    // const { name } = this.state;
    // const { contacts } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleChange}
              id={this.inputID}
            />
          </label>

          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map(({ name, id }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ContactForm;
