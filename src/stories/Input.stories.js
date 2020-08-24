import React from 'react'
import Input from './../components/elements/Input'

export default {
  title: 'Form Elements/Input',
  component: Input,
  argTypes: {
    type: {
      description: 'Type of input field value, still need to implement password, and other',
      defaultValue: 'text',
      control: {
        type: 'select',
        options: ['tel', 'text']
      }
    },
    label: {
      description: 'Placeholder text when field is empty, then animates as a top label after user focuses input field.',
      control: {
        type: 'text'
      }
    },
    required: {
      description: 'adds Astresk if the field is a required field.',
      defaultValue: false,
      control: {
        type: 'boolean'
      }
    },
    color: {
      description: 'Accent color when field is focused, effects border and label',
      defaultValue: '#5091B4',
      control: {
        type: 'color'
      },
    },
    className: {
      description: 'CSS class name for input element so you can target and adjust css if important',
      defaultValue: null,
      control: {
        type: 'text'
      }
    },
    value: {
      description: 'Value of the field, if you do not pass in a value, it will store the value locally',
      defaultValue: null,
      control: {
        type: 'text'
      }
    },
    onChange: {
      action: 'onChange',
      description: 'Function that fires every time the value of the field is changed.',
      defaultValue: null,
      control: {
        type: null
      }
    },
    onKeyDown: {
      action: 'onKeyDown',
      description: 'Function that fires every time the key is pressed, useful for detecting if a user presses Enter to submit a form.',
      defaultValue: null,
      control: {
        type: null
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


