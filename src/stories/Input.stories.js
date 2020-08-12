import React from 'react'
import Input from './../components/elements/Input'
import { withKnobs, text, color, radios } from '@storybook/addon-knobs'

export default {
  title: 'Input',
  parameters: {
    component: Input,
    decorators: [withKnobs],
    'in-dsm': {
      id: '5f32ae4219aed4d8eeb2005d',
      version: '1.0.0'
    }
  }
}

export const Text = () => {

  const name = text("Label", "Email Address")
  const colorValue = color('Color', '#5091B4')
  const type = radios('Type', { Text: 'text', Phone: 'tel' }, 'text')

  return <Input type={type} color={colorValue} label={name} />
}

