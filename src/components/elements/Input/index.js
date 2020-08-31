import React, { Component } from 'react'
import PhoneInput from 'react-phone-input-2'
import { isFirefox } from 'react-device-detect'
import PropTypes from 'prop-types'

import scss from './input.module.scss'

class Input extends Component {

    constructor(props) {
        super(props)
        this.state = {
            focused: false,
            hasAutofilled: false
        }
    }

    onFocus = () => {
        this.setState({ focused: true, hasAutofilled: false })
    }
    onBlur = () => {
        this.setState({ focused: false, hasAutofilled: false })
    }

    handleAutoFill = (e) => {
        if (e.target.value !== '') {
            this.setState({ hasAutofilled: true });
        }
    }

    componentDidMount = () => {
        setTimeout(() => {
            if (this.refs.inputWrapper && !isFirefox && this.refs.inputWrapper.querySelector('input:-webkit-autofill')) {
                this.setState({ hasAutofilled: true })
            }
        }, 300)
    }

    onChangeInput = (e) => {
        if (e.target) {
            this.props.onChange(e.target.value)
        }
    }



    render() {
        const { value, onKeyDown, onChange } = this.props

        let inputClass = `${this.props.className} input`
        if (this.state.focused) {
            inputClass += " focused"
        }
        if (value !== '' || this.props.type === 'tel') {
            inputClass += " hasContent"
        }
        if (this.state.hasAutofilled) {
            inputClass += " hasContent"
        }
        if (this.props.type === 'tel') {
            inputClass += " tel"
        }
        if (this.props.error) {
            inputClass += " error"
        }

        let inputStyle = {}
        let labelStyle = {}
        if (this.state.focused && this.props.color) {
            inputStyle.borderColor = this.props.color
            inputStyle.boxShadow = '0px 0px 1px 1px ' + this.props.color
            labelStyle.color = this.props.color
        }

        return (
            <div className={`${scss.input} ${this.props.className} input_wrapper`}>
                <div className={`${inputClass} input`} ref="inputWrapper" style={inputStyle} >
                    <label style={labelStyle}>{this.props.label}{(this.props.required && <span>*</span>)}</label>
                    {(this.props.type === 'tel' ?
                        <PhoneInput
                            country={'us'}
                            onKeyDown={onKeyDown}
                            onAnimationStart={this.handleAutoFill}
                            value={value}
                            onFocus={this.onFocus}
                            onBlur={this.onBlur}
                            autoComplete="false"
                            onChange={onChange}
                        />
                        :
                        <input
                            autoComplete="false"
                            type={this.props.type}
                            onFocus={this.onFocus}
                            onBlur={this.onBlur}
                            onChange={this.onChangeInput}
                            onAnimationStart={this.handleAutoFill}
                            value={value}
                            onKeyDown={onKeyDown}
                        />
                    )}
                </div>
            </div>
        )
    }
}

Input.propTypes = {
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

export default Input