import React, { useState, useContext } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { FormField } from '../components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { Title } from 'components/atoms/Title/Title';
import { UsersContext } from 'providers/UsersProvider';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
}

export const AddUser = () => {
  const [formValues, setFormValues] = useState(initialFormState);
  const ctx = useContext(UsersContext)

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmitUser = (e) => {
    e.preventDefault();
    ctx.handleAddUser(formValues);
    setFormValues(initialFormState);
  }

  return (
    <ViewWrapper as="form" onSubmit={handleSubmitUser}>
      <Title>Add new student</Title>
      <FormField name="name" label="Name" id="name" value={formValues.name} onChange={handleInputChange} />
      <FormField name="attendance" label="Attendance" id="attendance" value={formValues.attendance}
                 onChange={handleInputChange} />
      <FormField name="average" label="Average" id="average" value={formValues.average}
                 onChange={handleInputChange} />
      <Button type="submit">Add</Button>
    </ViewWrapper>
  )
}
