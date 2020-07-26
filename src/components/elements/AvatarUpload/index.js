import { Component } from 'react'
import { connect } from "react-redux"
import Button from '../../elements/Button'
import Axios from 'axios'

import './AvatarUpload.module.scss'

class AvatarInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sending: false,
            submitSuccessful: false,
            error: ''
        }
        this.fileInputRef = React.createRef()
    }

    openFileDialog = () => {
        if (this.state.disabled) return
        this.fileInputRef.current.click()
    }

    onFileAdded = (e) => {
        if (this.state.disabled) return
        this.callAPI(e.target.files[0])
    }

    callAPI = (file) => {
        this.setState({ sending: true, error: "" })
        let avatarData = new FormData();
        avatarData.append('avatar', file)
        avatarData.append('identifier', this.props.identifier)
        Axios.post(this.props.api, avatarData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'authtoken': this.props.authReducer.authToken
            }
        }).then((res) => {
            console.log('avatar success', res.data)
            this.setState({ submitSuccessful: true, sending: false })
            this.props.onChange({
                url: res.data.secure_url,
                size: Math.floor(res.data.bytes / 1024),
                name: file.name
            })
        }).catch((error) => {
            if (error.response) {
                this.setState({ error: "Error " + error.response.status + " : " + error.response.data.message, sending: false })
            }
        })
    }

    render() {
        let avatarStyle = { backgroundImage: `url('/img/crab.png')` }
        if (this.props.avatar_url) {
            avatarStyle.backgroundImage = `url('${this.props.avatar_url}')`
        }
        return (
            <div className="imageUpload">
                <p className="info">Upload or edit your profile picture (maximum size of 500kb. suggested size 250px x 250px)</p>
                <input ref={this.fileInputRef} type="file" onChange={this.onFileAdded} />
                <div className="avatarContainer">
                    <div className="avatar" style={avatarStyle}></div>
                    <div className="buttonContainer">
                        {(this.props.avatar_name !== '' &&
                            <p className="caption">File name: <span>{this.props.avatar_name}</span></p>
                        )}
                        {(this.props.avatar_size !== '' &&
                            <p className="caption">File size: <span>{this.props.avatar_size}kb</span></p>
                        )}
                        {(!this.state.sending ?
                            <React.Fragment>
                                <Button className="dark" onClick={this.openFileDialog}>UPLOAD IMAGE</Button>
                                {(this.props.avatar_url !== '' &&
                                    <Button className="red" onClick={() => { this.props.onChange({ url: '', size: '', name: '' }) }}>REMOVE</Button>
                                )}
                            </React.Fragment>
                            :
                            <img src="/img/uploading.gif" style={{ width: '80px' }} />
                        )}
                        {(this.state.error !== '' &&
                            <p className="caption">{this.state.error}</p>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}


export default connect(state => state)(AvatarInput)