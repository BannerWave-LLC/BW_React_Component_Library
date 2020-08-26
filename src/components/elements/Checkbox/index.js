import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'

import scss from './checkbox.module.scss'

class Checkbox extends Component {

    render() {
        console.log(this.props.value)

        return (
            <div className={scss.checkbox}>
                <div className='art' onMouseDown={this.props.onClick}>
                    {(this.props.value &&
                        <FontAwesome className='icon' name="check" />
                    )}
                </div>
                <div className='label'>{this.props.label}</div>
            </div>
        )
    }
}

export default Checkbox