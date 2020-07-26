import { Component } from 'react'
import Link from 'next/link'
import Button from '../../elements/Button'

import scss from './JoinCard.module.scss'


class JoinCard extends Component {

    // constructor(props){
    //     super(props)
    //     this.state
    // }

    render(){
        return(
            <React.Fragment>
                <div className={`${scss.card} card ${scss.lower}`}>
                    <div className="title dark">
                        <h1>Compass</h1>
                        <h2>$100/Yr</h2>
                        <h3>+ $50 Application Fee</h3>
                    </div>
                    <div className="details">
                        <ul>
                            <li>Digital Membership</li>
                            <li className="unavailable">Membership to 1 of our category exclusive 2x monthly referral circles</li>
                            <li>Listing in online directory</li>
                            <li>Access to Women Belong Facebook group</li>
                            <li>Discounts to Women Belong events</li>
                            <li className="unavailable">Access to member-to-member deals</li>
                            <li className="unavailable">1 In-person member spotlight a year</li>
                            <li className="unavailable">1 Member spotlight blog submission a year</li>
                            <li className="unavailable">2 Additional promotions of each spotlight blog</li>
                            <li className="unavailable">Ability to share events on the online Women Belong calendar</li>
                            <li className="unavailable">Access to member-to-member deals</li>
                        </ul>
                    </div>
                    <Link href="/register"><Button className="coral">JOIN</Button></Link>
                </div>
                <div className={`${scss.card} card ${scss.upper}`}>
                    <div className="title">
                        <h1>Circle</h1>
                        <h2>$350/Yr</h2>
                        <h3>+ $50 Application Fee</h3>
                        {/* <h4>Most Popular</h4> */}
                    </div>
                    <h4>Most Popular</h4>
                    <div className="details">
                        <ul>
                            <li>Digital Membership</li>
                            <li>Membership to 1 of our category exclusive 2x monthly referral circles</li>
                            <li>Listing in online directory</li>
                            <li>Access to Women Belong Facebook group</li>
                            <li>Discounts to Women Belong events</li>
                            <li>Access to member-to-member deals</li>
                            <li>1 In-person member spotlight a year</li>
                            <li>1 Member spotlight blog submission a year</li>
                            <li className="unavailable">2 Additional promotions of each spotlight blog</li>
                            <li className="unavailable">Ability to share events on the online Women Belong calendar</li>
                            <li className="unavailable">Access to member-to-member deals</li>
                        </ul>
                    </div>
                    <Link href="/register"><Button className="coral">JOIN</Button></Link>
                </div>
                <div className={`${scss.card} card ${scss.lower}`}>
                    <div className="title dark">
                        <h1>Core</h1>
                        <h2>$500/Yr</h2>
                        <h3>+ $50 Application Fee</h3>
                    </div>
                    <div className="details">
                        <ul>
                            <li>Digital Membership</li>
                            <li>Membership to 1 of our category exclusive 2x monthly referral circles</li>
                            <li>Listing in online directory</li>
                            <li>Access to Women Belong Facebook group</li>
                            <li>Discounts to Women Belong events</li>
                            <li>Access to member-to-member deals</li>
                            <li>1 In-person member spotlight a year</li>
                            <li>1 Member spotlight blog submission a year</li>
                            <li className="unavailable">2 Additional promotions of each spotlight blog</li>
                            <li className="unavailable">Ability to share events on the online Women Belong calendar</li>
                            <li className="unavailable">Access to member-to-member deals</li>
                        </ul>
                    </div>
                    <Link href="/register"><Button className="coral">JOIN</Button></Link>
                </div>
            </React.Fragment>
        )
    }
}

export default JoinCard