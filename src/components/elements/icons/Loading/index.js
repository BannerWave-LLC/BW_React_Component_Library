
import { Component } from 'react'

import scss from './loading.module.scss'

class Loading extends Component {

    render() {
        return (
            <div class={scss.loading}>
                <div class={scss.icon}>
                    <div></div>
                    <div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Loading

