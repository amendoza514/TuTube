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
        this.props.processForm(user).then(this.props.closeModal())
    }

    render () {
        let formText = this.props.formType === 'signup' ? 'Create Account' : 'Sign In';
        let redirectText = this.props.formType === 'login' ? "Create an account" : "Sign in instead";
        let redirectPath = this.props.formType === 'login' ? <Link to='/signup'>Create Account</Link> : <Link to='/login'>Sign in</Link>;
        
        return (
                <form className='auth-form'>
                    <label className='input-name'>
                        
                        <input 
                               type="text" 
                               className ="form-input" 
                               placeholder="Email"
                               value={this.state.email} 
                               onChange={this.handleInput('email')} />
                    </label>
                        <br/><br/>
                    <label className='input-name'>
                        
                        <input type="password" 
                               className="form-input" 
                               placeholder="Password"
                               value={this.state.password} 
                               onChange={this.handleInput('password')} />
                    </label>
                        <br/>
                        <br />
                    <span>{redirectText}</span>
                        <br />
                    <span>{redirectPath}</span>
                        <br/>
                <div id="demo-text" >Not your fullstack project? Use demo mode to sign in anonymously</div>
                    <div id="demo-button" onClick={this.demoLogin}>Demo sign in</div>
                    
                    <div className='action-buttons'>
                        <div id='back-button' onClick={this.props.closeModal} >Create account</div>
                        <button id='submit-button'  onClick={this.handleSubmit}>{formText}</button>
                    </div>
                </form>
        )
    }
}

export default SessionForm;