import React, { Component } from 'react'
import Input from './../Input'
import PropTypes from 'prop-types'


class StyledInput extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <Input  {...this.props} />
        )
    }
}

StyledInput.propTypes = {
    /** Value of the input field */
    value: PropTypes.string.isRequired,

    /** Function that fires every time the value of the field is changed. */
    onChange: PropTypes.func.isRequired,

    /** Type of input field value, still need to implement password, and other */
    type: PropTypes.oneOf(["tel", "text"]).isRequired,

    /** Placeholder text when field is empty, then animates as a top label after user focuses input field. */
    label: PropTypes.string.isRequired,

    /** CSS class name for input element so you can target and adjust css if important */
    className: PropTypes.string,

    /** Adds Astresk if the field is a required field. */
    required: PropTypes.bool,

    /** Function that fires every time the key is pressed, useful for detecting if a user presses Enter to submit a form. */
    onKeyDown: PropTypes.func
}


export default StyledInput