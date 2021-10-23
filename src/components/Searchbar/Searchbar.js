import {useState} from "react";
import { alert} from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import PropTypes from 'prop-types';

export function Searchbar(props) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.currentTarget.value.toLowerCase());
  };
  
 const handleSubmit = (e) => {
   e.preventDefault();   
    if (value.trim() === "") {
      return alert({
  text: 'Please, enter your query!'
});
    }
    props.onSubmit(value);
   setValue('');
  };

   return (
      <header className="Searchbar">
        <form onSubmit={handleSubmit} className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            value={value}
            name="value"
              autoComplete="off"
              autoFocus
            placeholder="Search images and photos"
            onChange={handleChange}
          />
        </form>
      </header>
    );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func  
}