import { Component } from 'react'
import FontAwesome from 'react-fontawesome'

import scss from './dropdown.module.scss'

class DropDown extends Component {

    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount = () => {
        document.addEventListener('click', this.handleClickOutside);
    }

    componentWillUnmount = () => {
        document.removeEventListener('click', this.handleClickOutside);
    }

    setWrapperRef = (node) => {
        this.wrapperRef = node;
    }

    handleClickOutside = (event) => {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({ open: false })
        }
    }

    optionSelected = (value) => {
        this.props.onChange(value)
        this.setState({ open: false })
    }

    render() {
        return (
            <div ref={this.setWrapperRef} className={`${scss.select} ${(this.state.open && 'open')}`}>
                <div onClick={(e) => { this.setState({ open: !this.state.open }) }} className="value">{this.props.value}</div>
                <FontAwesome className='icon' name="angle-down" />
                {(this.state.open &&
                    <div className="dropdown">
                        {(this.props.values.map((value, index) => {
                            return <div onClick={() => { this.optionSelected(value) }} className="option" key={index} value={value}>{value}</div>
                        }))}
                    </div>
                )}
            </div>
        )
    }
}

export default DropDown