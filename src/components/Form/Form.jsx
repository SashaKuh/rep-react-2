// Forms.js
import React from "react";
import { Formik, Field, Form } from "formik";
import { nanoid } from 'nanoid';

export const Forms = ({ name, email, addContact }) => {
  return (
    <>
      <h2>Phonebook</h2>
      <Formik
        initialValues={{ name: '', email: '' }}
        onSubmit={(values) => {
          const newContact = { id: nanoid(), ...values };
          addContact(newContact);
          console.log(values);
        }}
      >
        <Form>
          <label>Name</label>
          <Field name="name" type="text" />
          <label>Email</label>
          <Field name="email" type="email" />
          <button type="submit">Submit</button>
          <button type="reset">Clear</button>
        </Form>
      </Formik>
    </>
  );
};
