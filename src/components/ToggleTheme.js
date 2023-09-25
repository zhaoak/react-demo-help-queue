import React from 'react';
import PropTypes from 'prop-types';

function ToggleTheme(props) {
  return (
    <React.Fragment>
      <button type='button' onClick={props.toggleTheme}>Toggle Theme</button>
      <hr/>
    </React.Fragment>
  );
}

ToggleTheme.propTypes = {
  toggleTheme: PropTypes.func
}

export default ToggleTheme;
