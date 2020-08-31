import React from 'react'
import Input from '.'

export default {
  title: 'Form/Input',
  component: Input
}

const Template = (args) => <Input {...args} />

export const Text = Template.bind({})
Text.args = {
  type: 'text',
  label: 'Label',
  value: '',
  onChange: () => { }
}

export const Phone = Template.bind({})
Phone.args = {
  type: 'tel',
  label: 'Phone',
  value: '',
  onChange: () => { }
}


