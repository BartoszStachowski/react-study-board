import React, { useContext, useReducer } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { FormField } from '../components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { Title } from 'components/atoms/Title/Title';
import { UsersContext } from 'providers/UsersProvider';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
  consent: false,
  error: '',
}

const actionTypes = {
  inputChange: 'INPUT CHANGE',
  clearValues: 'CLEAR VALUES',
  consentToggle: 'CONSENT TOGGLE',
  throwError: 'THROW ERROR',
}

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.inputChange:
      return {
        ...state,
        [action.field]: action.value
      };
    case actionTypes.clearValues:
      return initialFormState;
    case actionTypes.consentToggle:
      return {
        ...state,
        consent: !state.consent,
      };
    case actionTypes.throwError:
      return {
        ...state,
        error: action.errorValue,
      }
    default:
      return state;
  }
}

export const AddUser = () => {
  const [formValues, dispatch] = useReducer(reducer, initialFormState);
  const ctx = useContext(UsersContext)

  const handleInputChange = (e) => {
    dispatch({
      type: actionTypes.inputChange,
      field: e.target.name,
      value: e.target.value,
    })
  }

  const handleSubmitUser = (e) => {
    e.preventDefault();
    if (formValues.consent) {
      ctx.handleAddUser(formValues);
      dispatch({ type: actionTypes.clearValues });
    } else {
      dispatch({
        type: actionTypes.throwError,
        errorValue: 'You need to give consent',
      });
    }

  }

  return (
    <ViewWrapper as="form" onSubmit={handleSubmitUser}>
      <Title>Add new </Title>
      <FormField name="name" label="Name" id="name" value={formValues.name} onChange={handleInputChange} />
      <FormField name="attendance" label="Attendance" id="attendance" value={formValues.attendance}
                 onChange={handleInputChange} />
      <FormField name="average" label="Average" id="average" value={formValues.average}
                 onChange={handleInputChange} />
      <FormField name="consent" label="Consent" id="consent" type="checkbox" value={formValues.consent}
                 onChange={() => dispatch({ type: actionTypes.consentToggle })} />
      <Button type="submit">Add</Button>
      {formValues.error ? <p>{formValues.error}</p> : null}
    </ViewWrapper>
  )
}
