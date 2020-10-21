import React, { Component } from 'react'
import Input from './../../Input'

import scss from './dellInput.module.scss'


class DellInput extends Component {

    render() {
        return (
            <Input className={`${scss.dellinput}`} {...this.props} />
        )
    }
}



export default DellInput