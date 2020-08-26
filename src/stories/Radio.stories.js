import React from 'react'
import Radio from './../components/elements/Radio'

export default {
  title: 'Form Elements/Radio',
  component: Radio,
  argTypes: {
    color: {
        description: 'Accent color when field is focused, effects border and label',
        defaultValue: '#5091B4',
        control: {
          type: 'color'
        },
      }
  }
}

const Template = (args) => <Radio {...args} />

export const Text = Template.bind({})
Text.args = {
  type: 'text',
  label: 'Label'
}