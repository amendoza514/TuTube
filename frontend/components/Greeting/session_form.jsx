import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {email:'', password:''}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    handleInput(type){
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }

    demoLogin(e){
        // this.setState({email:'cargo_pants@gmail.com', password:'123456'})
        e.preventDefault();
        this.setState({ email: 'cargo_pants@gmail.com', password: '123456' }) 
        const demoUser = Object.assign({}, this.state)       
        this.props.processForm(demoUser)
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.processForm(user)
    }

    render () {
        let formText = this.props.formType === 'signup' ? 'Create Account' : 'Sign In';
        let redirectText = this.props.formType === 'login' ? "Don't have a TuTube Account?" : "Already have an account?";
        let redirectPath = this.props.formType === 'login' ? <Link to='/signup'>Create Account</Link> : <Link to='/login'>Sign in</Link>;
        
        return (
            <section className='form-button'>
                <form className='form-dropdown'>
                    <label>Email
                        <br/>
                        <input type="text" value={this.state.email} onChange={this.handleInput('email')} />
                    </label>
                    <br/>
                    <label>Password
                        <br/>
                        <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
                    </label>
                    <br/>
                    <button onClick={this.handleSubmit}>{this.props.formType}</button>
                    <br/>
                    <button onClick={this.demoLogin}>Sign in as a demo user</button>
                    <br/>
                    <br /><br />
                    <span>{redirectText}</span>
                    <br />
                    <span>{redirectPath}</span>
                    <br /><br /><br />
                    <button id='exit-form'>
                        <Link to='./'>back</Link>
                        <br/>
                    </button>
                </form>
            </section>
        )
    }
}

export default SessionForm;