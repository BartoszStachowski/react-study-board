import React from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { FormField } from '../components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { Title } from 'components/atoms/Title/Title';

export const AddUser = ({ handleAddUser, formValues, handleInputChange }) => {
  return (
    <ViewWrapper as="form" onSubmit={handleAddUser}>
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
