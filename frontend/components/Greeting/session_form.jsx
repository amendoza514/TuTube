import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {email:'', password:''}
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(type){
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.processForm(user)
    }

    render () {
        let formText = this.props.formType === 'signup' ? 'Login' : 'Create Account';
        let redirectText = this.props.formType === 'signup' ? "Don't have a TuTube Account?" : "Already have an account?";
        let redirectPath = this.props.formType === 'signup' ? <Link to='/login'>Create Account</Link> : <Link to='/signup'>Sign In</Link>;
        
        return (
            <div className='form'>
                <p>{formText}</p>
                <form>
                    <label>Email:
                        <input type="text" value={this.state.email} onChange={this.handleInput('email')} />
                    </label>
                    <br/>
                    <label>Password:
                        <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
                    </label>
                    <br/>
                    <button onClick={this.handleSubmit}>{this.props.formType}</button>
                    <br/><br/>
                    <span>{redirectText}</span>
                    <br/>
                    <span>{redirectPath}</span>
                </form>
            </div>
        )
    }
}

export default SessionForm;