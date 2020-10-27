import React, { Component } from 'react'
import scss from './button.module.scss'

class Button extends Component {
    render () {
        const { value } = this.props
        //console.log()
        return (
            <div className={scss.button} >
                <div> {value} </div>
            </div>
        )
    }
}
export default Button