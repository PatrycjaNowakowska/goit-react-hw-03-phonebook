import React from 'react'

const ContactList = ({ filter, contacts, deleteContact }) => {
    return (
        <div>
         <ul>
          {filter === ""
            ? contacts.map(({ id, name, number }) => (
                <li key={id}>
                    {name}: {number}
                    <button type="button" onClick={() => deleteContact(id)}>DELETE</button>
                </li>
              ))
            : contacts
                .filter(({ name }) =>
                  name.toLowerCase().includes(filter.toLowerCase())
                )
                .map(({ id, name, number }) => (
                  <li key={id}>
                        {name}: {number}
                        <button type="button" onClick={() => deleteContact(id)}>DELETE</button>
                  </li>
                ))}
        </ul> 
        </div>
    )
}
    
export default ContactList;