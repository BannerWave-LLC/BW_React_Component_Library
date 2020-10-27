import React, { Component } from 'react'
import scss from './dellButton.module.scss'

class DellButton extends Component {

    render () {
       
        const { size, value } = this.props
        
        return (
            <div className={scss.dellButton} >
                <div className={`${scss.button} ${size}`}>{value}</div>
            </div>
        )
    }
}
export default DellButton