import { Component } from 'react'
import PhoneInput from 'react-phone-input-2'
import { isFirefox } from 'react-device-detect'

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
        let inputClass = `${this.props.className} input`
        if (this.state.focused) {
            inputClass += " focused"
        }
        if (this.props.value !== '' || this.props.type === 'tel') {
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
        return (
            <div className={scss.input}>
                <div className={inputClass} ref="inputWrapper">
                    <label>{this.props.label}{(this.props.required && <span>*</span>)}</label>
                    {(this.props.type === 'tel' ?
                        <PhoneInput
                            id={this.props.className}
                            country={'us'}
                            onKeyDown={this.props.onKeyDown}
                            onAnimationStart={this.handleAutoFill}
                            value={this.props.value}
                            onFocus={this.onFocus}
                            onBlur={this.onBlur}
                            autoComplete="false"
                            onChange={this.props.onChange}
                        />
                        :
                        <input
                            id={this.props.className}
                            autoComplete="false"
                            type={this.props.type}
                            onFocus={this.onFocus}
                            onBlur={this.onBlur}
                            onChange={this.onChangeInput}
                            onAnimationStart={this.handleAutoFill}
                            value={this.props.value}
                            onKeyDown={this.props.onKeyDown}
                        />
                    )}
                </div>
            </div>
        )
    }
}

export default Input