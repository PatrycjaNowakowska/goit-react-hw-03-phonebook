import React from 'react'

const Filter = ({ filterInput }) => {
    return (
        <div>
          <p>Find contacts by name</p>
        <input
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Filter by name"
          onChange={filterInput}
        />
        </div>
    )
}

export default Filter;