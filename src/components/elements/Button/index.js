import React from 'react'
import { Component } from 'react'

import css from './button.module.css'

class Button extends Component {

    render() {
        return (
            <div onClick={this.props.onClick} className={`${this.props.className} ${css.button} button`}>
                {this.props.children}
            </div>
        )
    }
}

export default Button