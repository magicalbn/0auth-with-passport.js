import React, { Component } from 'react';
import Link from 'next/link'

import Layout from '../components/Layout'
import LoginCard from '../components/Login/LoginCard'
import { authCheck } from '../lib/authLib';
import Router  from 'next/router';


class Home extends Component {
    componentDidMount() {
        authCheck().then(user => {Router.push("/home")} ).catch(e=>{this.setState({isChecking: false})})
    }
    state = {isChecking : true}
    render() {
        const { isChecking } = this.state
        return (
            <Layout title="Login with Passportjs">
                {isChecking ? <div className='auth-check'><p>Checking your login status...</p></div> :  <div className="login-container">
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
                </div>}
            </Layout>
        );
    }
}

export default Home;