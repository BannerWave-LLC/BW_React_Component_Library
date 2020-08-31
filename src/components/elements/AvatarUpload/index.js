import React, { Component } from 'react'
import PropTypes from 'prop-types'

import scss from './avatarUpload.module.scss'

class AvatarUpload extends Component {

    constructor(props) {
        super(props)
        this.state = {
            imageToUpload: ''
        }
    }

    render() {
        const { className } = this.props
        return (
            <div className={`${scss.avatarUpload} ${className} avatarUpload`}>
            </div>
        )
    }
}

AvatarUpload.propTypes = {
    /** CSS class name for input element so you can target and adjust css if important */
    className: PropTypes.string,
}

export default AvatarUpload