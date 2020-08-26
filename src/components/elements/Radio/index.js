import React, { Component } from 'react'
import scss from './radio.module.scss'

class Radio extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    onClick = (e) => {
        if (e.target) {
            console.log(e.target.getAttribute('value'))
            if (this.props.onChange) {
                this.props.onChange(e.target.getAttribute('value'))
            } else {
                this.setState({ value: e.target.getAttribute('value') })
            }
        }
    }

    render() {
        const value = (this.props.value ? this.props.value : this.state.value)
        const { values, direction, color } = this.props
        return (
            <div className={`${scss.radio} ${direction + 'Radio'} radio_wrapper`}  >
                {(values && values.map((val, index) => {
                    return <div
                        onClick={this.onClick}
                        key={index}
                        className={(value === val ? `${scss.selected} ${scss.item}` : scss.item)}
                        value={val}>{val}</div>
                }))}
                {console.log(direction)}
            </div>
        )
    }
}
export default Radio
