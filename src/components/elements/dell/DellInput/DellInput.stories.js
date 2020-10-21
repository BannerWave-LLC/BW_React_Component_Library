import React from 'react'
import DellInput from '.'

export default {
    title: 'Dell/DellInput',
    component: DellInput
}

const Template = (args) => <DellInput {...args} />

export const Text = Template.bind({})
Text.args = {
    type: 'text',
    label: 'Label',
    value: '',
    onChange: () => { }
}

