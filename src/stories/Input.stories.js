import React from 'react'
import Input from './../components/elements/Input'

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    color: {
      defaultValue: '#5091B4',
      control: {
        type: 'color'
      },
      type: {
        control: {
          type: 'select',
          options: ['tel', 'text']
        }
      }
    }
  }
}

const Template = (args) => <Input {...args} />

export const Text = Template.bind({})
Text.args = {
  type: 'text',
  label: 'Label'
}

export const Phone = Template.bind({})
Phone.args = {
  type: 'tel',
  label: 'Phone'
}


