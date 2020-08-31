import React from 'react'
import StyledInput from '.'

export default {
    title: 'Styled Form/StyledInput',
    component: StyledInput
}

const Template = (args) => <StyledInput {...args} />

export const Text = Template.bind({})
Text.args = {
  type: 'text',
  label: 'Label',
  value: '',
  onChange: ()=> {}
}

export const Phone = Template.bind({})
Phone.args = {
  type: 'tel',
  label: 'Phone',
  value: '',
  onChange: ()=> {}
}


