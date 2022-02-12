import React from 'react';

const ContactForm = ({ handleSubmit, handleChangeName, inputID, handleChangeNumber }) => {
    return (
        <div>
          <form onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            //   value={this.state.name}
              onChange={handleChangeName}
              id={inputID}
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
            //   value={this.state.number}
              onChange={handleChangeNumber}
              id={inputID}
            />
          </label>

          <button type="submit">Add contact</button>
        </form>
        </div>
    )
}

export default ContactForm;