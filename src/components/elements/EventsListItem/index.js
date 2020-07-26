import { Component } from 'react'
import Container from '../../layouts/Container'
import Button from '../../elements/Button'

import scss from './EventsListItem.module.scss'

class EventsListItem extends Component {

    render() {
        return (
            <Container className={scss.item}>
                <div className="date">
                    <p className="day">02</p>
                    <p className="month">May</p>
                </div>
                <div className="info">
                    <h1>Facebook Ads from Tech to Creative to Launch</h1>
                    <p>Learn how to optimize facebook for your business from professionals in the field. See how to take ads from concepting to successfull launch for best performance.</p>
                </div>
                <div className="cta">
                    <h1>Online via zoom</h1>
                    <p>12:00 - 2:30 PM EST</p>
                    <Button>Event Details</Button>
                </div>
            </Container>
        )
    }
}

export default EventsListItem