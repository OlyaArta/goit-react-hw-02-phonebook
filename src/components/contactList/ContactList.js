import React, { Component } from "react";
import PropTypes from "prop-types";
import ContactItem from "./ContactItem";

// const ContactList = ({ contacts, onDeleteContact }) => {

//   return (
//     <ul>
//       {contacts.map(({ id, name, number }) => (
//         <ContactItem
//           name={name}
//           number={number}
//           onClick={() => onDeleteContact(id)}
//           key={id}
//         />
//       ))}
//     </ul>
//   );
// };

class ContactList extends Component {
  render() {
    const contacts = this.props.contacts;
    const deleteContacts = this.props.onDeleteContact;
    return (
      <ul>
        {contacts.map((contact) => (
          <ContactItem
            name={contact.name}
            number={contact.number}
            onDeleteContact={deleteContacts}
            key={contact.id}
            id={contact.id}
          />
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
