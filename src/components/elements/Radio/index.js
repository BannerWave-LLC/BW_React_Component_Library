import { Component } from 'react'

import scss from './radio.module.scss'

class Radio extends Component {

    onClick = (e) => {
        this.props.onChange(e.target.getAttribute('value'))
    }

    render() {
        return (
            <div className={scss.radio}>
                {(this.props.values.map((value, index) => {
                    return <div
                        onClick={this.onClick}
                        key={index}
                        className={(this.props.value === value ? 'selected item' : 'item ')} value={value}>{value}</div>
                }))}
            </div>
        )
    }
}

export default Radio