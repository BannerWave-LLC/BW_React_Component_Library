import React, { Component } from 'react'
import PhoneInput from 'react-phone-input-2'
import { isFirefox } from 'react-device-detect'

import scss from './input.module.scss'

class Input extends Component {

    constructor(props) {
        super(props)
        this.state = {
            focused: false,
            hasAutofilled: false,
            value: ''
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
            if (this.props.onChange) {
                this.props.onChange(e.target.value)
            } else {
                this.setState({ value: e.target.value })
            }
        }
    }


    render() {
        const value = (this.props.value ? this.props.value : this.state.value)

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
                            onKeyDown={this.props.onKeyDown}
                            onAnimationStart={this.handleAutoFill}
                            value={value}
                            onFocus={this.onFocus}
                            onBlur={this.onBlur}
                            autoComplete="false"
                            onChange={this.props.onChange}
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
                            onKeyDown={this.props.onKeyDown}
                        />
                    )}
                </div>
            </div>
        )
    }
}

export default Input