// App.js
import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import contacts from '../contacts.json';

import { Test } from './Test';
import { Forms } from './Form/Form';

export class App extends Component {
  state = {
    good: 0,
    nod: 0,
    bad: 0,
    contacts: [],
    name: '',
    email: ''
  }

  handleClick = (type) => {
    this.setState((prevState) => ({
      [type]: prevState[type] + 1
    }));
  }

  total = () => {
    const { good, nod, bad } = this.state;
    return good + nod + bad;
  }

  addContact = (newContact) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact]
    }));
  }

  onDelete = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id)
    }));
  }
  

  render() {
    return (
      <>
        <Test onClick={this.handleClick} good={this.state.good} nod={this.state.nod} bad={this.state.bad} total={this.total()} />
        <Forms name={this.state.name} email={this.state.email} addContact={this.addContact} />
        <h2>Contacts</h2>
        {this.state.contacts.map((contact) => (
  <div key={contact.id}>
    <p>{contact.name} - {contact.email}</p>
    <button onClick={() => this.onDelete(contact.id)}>Delete</button>
  </div>
))}

      </>
    );
  }
}
