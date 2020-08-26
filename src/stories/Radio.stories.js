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
    },
    direction: {
      description: 'Determines if radio buttons are horizontal or veritically stacked',
      defaultValue: 'horizontal',
      control: {
        type: 'select',
        options: ['horizontal', 'vertical']
      }
    },
    values: {
      description: 'all values that radio lets you select from in array format',
      control: {
        type: 'array',
        separator: ','
      }
    }
  }
}

const Template = (args) => <Radio {...args} />

export const Horizontal = Template.bind({})
Horizontal.args = {
  values: ['Red', 'Green', 'Blue'],
  direction: 'horizontal'
}

export const Vertical = Template.bind({})
Vertical.args = {
  values: ['Red', 'Green', 'Blue'],
  direction: 'vertical'
}