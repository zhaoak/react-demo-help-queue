import React from 'react';
import PropTypes from 'prop-types';

function ToggleTheme(props) {
  const {theme, toggleTheme} = props;

  const styles = {
    backgroundColor: theme.buttonBackground,
    color: theme.textColor
  }

  return (
    <React.Fragment>
      <button type='button' style={styles} onClick={toggleTheme}>
        {theme.textColor === "AntiqueWhite" ? "toggle light theme" : "toggle dark theme"}
      </button>
      <hr/>
    </React.Fragment>
  );
}

ToggleTheme.propTypes = {
  toggleTheme: PropTypes.func
}

export default ToggleTheme;
