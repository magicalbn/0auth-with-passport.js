import React, { Component } from 'react';
import Link from 'next/link'
import Router from 'next/router'

import Layout from '../components/Layout'
import { authCheck } from '../lib/authLib'


class Home extends Component {
    state = { user: {}, error: false }

    componentDidMount() {
        authCheck().then(user => this.setState({ user: user })).catch(err => this.setState({ error: true }))
    }


    render() {
        const { user, error } = this.state


        if (error) {
            Router.push('/')
        }

        const { id, displayName, provider, imageURL } = user
        let imageLarge
        if (provider == "twitter") {
            imageLarge = imageURL.replace("_normal", "");
        }
        if (provider == "google") {
            imageLarge = imageURL.split('=s')[0];
        }

        return (
            <Layout title={displayName}>
                <div className="profile" >


                    <img src={imageLarge || imageURL}></img>

                    <div className="division">
                        <p className="id">ID: {id}</p>
                        <p className="name">{displayName}</p>
                        <p className="provider">{provider}</p>
                        <Link href='/json'><a className="link">click here for JSON response</a></Link>
                        <Link href='/auth/logout'><a className="logout">log out</a></Link>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Home;






