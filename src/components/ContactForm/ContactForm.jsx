import React, { Component } from "react";
import { nanoid } from "nanoid";
// import ContactList from "../ContactList/ContactList.jsx";

class ContactForm extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };

  inputID = nanoid();

  // Odpowiada za aktualizację stanu
  handleChangeName = (e) => {
    e.preventDefault();
    this.setState((state) => ({
      ...state,
      name: e.target.value,
    }));
  };

  handleChangeNumber = (e) => {
    e.preventDefault();
    this.setState((state) => ({
      ...state,
      number: e.target.value,
    }));
  };

  filterInput = (e) => {
    e.preventDefault();
    this.setState((state) => ({
      ...state,
      filter: e.target.value,
    }));
    console.log(this.state.filter);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState((state) => ({
      contacts: [
        ...state.contacts,
        { id: nanoid(), name: this.state.name, number: this.state.number },
      ],
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
              onChange={this.handleChangeName}
              id={this.inputID}
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.handleChangeNumber}
              id={this.inputID}
            />
          </label>

          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <input
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Filter by name"
          onChange={this.filterInput}
        />
        <ul>
          {this.state.filter === ""
            ? this.state.contacts.map(({ id, name, number }) => (
                <li key={id}>
                  {name}: {number}
                </li>
              ))
            : this.state.contacts
                .filter(({ name }) =>
                  name.toLowerCase().includes(this.state.filter.toLowerCase())
                )
                .map(({ id, name, number }) => (
                  <li key={id}>
                    {name}: {number}
                  </li>
                ))}
        </ul>
      </div>
    );
  }
}

export default ContactForm;
