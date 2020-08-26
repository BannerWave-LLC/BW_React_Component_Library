import React from 'react'
import Checkbox from './../components/elements/Checkbox'

export default {
  title: 'Form Elements/Checkbox',
  component: Checkbox,
  argTypes: {
    className: {
        description: 'CSS class name for checkbox element so you can target and adjust css if important',
        defaultValue: false,
        control: {
          type: 'text'
        }
      },
    value: {
      description: 'Value of the field, if you do not pass in a value, it will store the value locally',
      defaultValue: false,
      control: {
        type: 'boolean'
      }
    },
    color: {
        description: 'Accent color when field is focused, effects border and label',
        defaultValue: '#000000',
        control: {
          type: 'color'
        }
      },
    onClick: {
        action: 'onClick',
        description: 'function to check/uncheck box',
        control: {
            type: null
        }
    },
    label: {
        description: 'text that goes next to the checkbox',
        defaultValue: '',
        control: {
            type: 'text'
        }
    }
  }
}

const Template = (args) => <Checkbox {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Label'
}