import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {email:'', password:''}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this)
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

    handleLogout() {
        this.props.logout();
        this.props.closeModal();
    }
    

    render () {
        let submitText = this.props.formType === 'signup' ? 'Sign Up' : 'Sign in';
        let formType = this.props.formType !== 'login' ? "Create an account" : "Sign in";
        // let redirectPath = this.props.formType === 'login' ? <Link to='/signup'>Sign Up</Link> : <Link to='/login'>Sign in</Link>;
        let otherFormButton = 
            this.props.formType !== 'signup' ? 
                <div id='signup-form-button'> {this.props.otherForm}</div> : 
                <div id='create-account-form-button'> {this.props.otherForm}</div> 

        let form = <form className='auth-form'>
            <div className='form-title'>
                <div id='T'>T</div>
                <div id='U1'>U</div>
                <div id='U2'>U</div>
                <div id='G'>G</div>
                <div id='L'>L</div>
                <div id='E'>E</div>
            </div>
            <div id='form-type'>{formType}</div>
            <br />
            <div>to continue to TuTube</div>
            <br /><br />
            <label className='input-name'>
                <input
                    type="text"
                    className="form-input"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleInput('email')} />
            </label>
            <br /><br />
            <label className='input-name'>
                <input type="password"
                    className="form-input"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleInput('password')} />
            </label>
            <br /><br />
            <div id="demo-text" >Not your fullstack project? Use demo mode to sign in anonymously.</div>
            <div id="demo-button" onClick={this.demoLogin}>Demo sign in</div>
            <div className='action-buttons'>
                {otherFormButton}
                <button id='submit-button' onClick={this.handleSubmit}>{submitText}</button>
            </div>
        </form>;

        if (this.props.formType === 'logout') form = 
        <form className='user-form'>
            <div className='form-title'>
                <div id='T'>T</div>
                <div id='U1'>U</div>
                <div id='U2'>U</div>
                <div id='G'>G</div>
                <div id='L'>L</div>
                <div id='E'>E</div>
            </div>
            <div id='form-type'>{formType}</div>            
            <button id='logout-button' onClick={this.handleLogout}>Sign out</button>
            <div id='back-button' onClick={this.props.closeModal} >back</div>
        </form>;

        return (
            <>
                {form}
            </>
        )
    }
}

export default SessionForm;

// otherForm()