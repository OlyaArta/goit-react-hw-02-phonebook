import React from "react";
import PropTypes from "prop-types";

const ContactItem = ({ name, number, onClick }) => {
  return (
    <li>
      <span>{name}: </span>
      <span>{number}</span>
      <button type="button" onClick={onClick}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContactItem;
