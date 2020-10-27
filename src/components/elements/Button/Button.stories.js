import React from 'react'
import Button from '.'

//maybe add
/*argTypes: {
    backgroundColor: { control: 'color' },
  },*/

export default {
    title: 'Form/Button',
    component: Button,
}


const Template = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  value: 'Button',
}