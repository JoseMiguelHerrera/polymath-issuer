import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

import { Form, Button } from 'carbon-components-react'
import { FormDatePicker } from './formDatePicker'
import { TextInput } from 'polymath-ui'
import {
  required,
  ethereumAddress,
  // integer,
  url,
} from 'polymath-ui/dist/validate'

export const formName = 'user_form'

// const minMonth = minValue(1)
// const maxMonth = minValue(6)

class InvestorForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  }

  render () {
    return (
      <Form onSubmit={this.props.handleSubmit}>
        <Field
          name='address'
          component={TextInput}
          label='Eth Address'
          placeholder='Investor Address'
          validate={[required, ethereumAddress]}
        />
        <Field
          name='sell'
          component={TextInput}
          label='Sell Restriction Date'
          validate={[required]}
          placeholder='Please type the exact format mm/dd/yyyy'
        />

        <Field
          name='buy'
          component={TextInput}
          label='Buy Restriction Date'
          validate={[required]}
          placeholder='Please type the exact format mm/dd/yyyy'
        />
        <p>&nbsp;</p>
        <Button type='submit'>
          Submit
        </Button>
      </Form>
    )
  }
}

export default reduxForm({
  form: formName,
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(InvestorForm)
