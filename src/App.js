import React from "react";
import Container from "./components/container/Container";
import Form from "./components/form/Form";

class App extends React.Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = (data) => {
    console.log(data);
  };

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <ul></ul>
      </Container>
    );
  }
}

export default App;
