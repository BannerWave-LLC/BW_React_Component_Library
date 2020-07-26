import { Component } from 'react'
import { isFirefox } from 'react-device-detect'

import scss from './textarea.module.scss'

class Textarea extends Component {

    constructor(props) {
        super(props)
        this.state = {
            focused: false,
            hasAutofilled: false
        }
        this.textarea = React.createRef()
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
            // Autofill Fixing
            if (this.refs.inputWrapper && !isFirefox && this.refs.inputWrapper.querySelector('input:-webkit-autofill')) {
                this.setState({ hasAutofilled: true })
            }
        }, 300)
        this.resizeElement(this.textarea.current)
    }
    onChange = (e) => {
        this.resizeElement(e.target)
        this.props.onChange(e.target.value)
    }
    resizeElement = (target) => {
        const style = getComputedStyle(target)
        target.style.height = '20px'
        target.style.height = target.scrollHeight - parseInt(style.paddingTop, 10) - parseInt(style.paddingBottom, 10) + 'px'
    }

    render() {
        let inputClass = `textarea ${this.props.className}`
        if (this.state.focused) {
            inputClass += " focused"
        }
        if (this.props.value !== '') {
            inputClass += " hasContent"
        }
        if (this.state.hasAutofilled) {
            inputClass += " hasContent"
        }
        return (
            <div className={scss.textareawrapper}>
                <div className={inputClass} ref="inputWrapper">
                    <label>{this.props.label}{(this.props.required && ' *')}</label>
                    <textarea
                        id={this.props.className}
                        autoComplete="false"
                        type={this.props.type}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                        onChange={this.onChange}
                        onAnimationStart={this.handleAutoFill}
                        value={this.props.value}
                        ref={this.textarea}
                        onKeyDown={this.props.onKeyDown}
                    ></textarea>
                </div>
            </div>
        )
    }
}

export default Textarea