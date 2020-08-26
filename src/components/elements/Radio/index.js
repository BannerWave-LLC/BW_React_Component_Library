import React, { Component } from 'react'
import scss from './radio.module.scss'

class Radio extends Component{
    /*onClick = (e) => {
        this.props.onChange(e.target.getAttribute('value'))
    }*/
    render() {
        return (
            <div className={`${scss.radio} radio_wrapper`}>
                {(this.props.values.map((value, index) => {
                    return <div
                        onClick={this.onClick}
                        key={index}
                        className={(this.props.value === value ? `${scss.selected} ${scss.item}` : scss.item )} 
                        value={value}>{value}</div>
                }))}
            </div>
        )
    }
}
export default Radio
