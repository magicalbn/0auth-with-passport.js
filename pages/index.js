import React, { Component } from 'react';
import Link from 'next/link'

import Layout from '../components/Layout'
import LoginCard from '../components/Login/LoginCard'


class Home extends Component {
    state = {}
    render() {
        return (
            <Layout title="Login with Passportjs">
                <div className="login-container">
                    <p className="title">Sign in to your Account</p>
                    <LoginCard />
                    <p className="or">OR</p>
                    <form onSubmit={(event)=>event.preventDefault()}>
                        <input type="input" placeholder="Email address or Username"></input>
                        <input type="password" placeholder="Password"></input>
                        <div className="button-group">
                            <button className="clear" type="reset">CLEAR</button>
                            <button className="submit" type="submit">LOG IN</button>
                        </div>
                    </form>
                    <hr/>
                    <p className="signup">Don't have an account?</p>
                    <button className="new">SIGN UP</button>
                </div>
            </Layout>
        );
    }
}

export default Home;