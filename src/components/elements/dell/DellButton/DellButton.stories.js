import React from 'react'
import DellButton from '.'

export default {
    title: 'Dell/Button',
    component: DellButton,
    size: {
        description: 'Test'
    }
}

//export const Small = () => <DellButton size='small'></DellButton>
//export const Medium = () => <DellButton size='medium'></DellButton>

const Template = (args) => <DellButton {...args} />

export const Default = Template.bind({})
Default.args = {
  value: 'Default',
  size: 'small'
}
