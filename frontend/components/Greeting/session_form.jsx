import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {email:'', password:''}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleInput(type){
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }
    
    usernameParse() {
        let s = this.props.currentUser.email;
        let searchString = "@";
        s = s.slice(0, s.indexOf(searchString))
        s = s.split('_').join(' ')
        let words = s.split(' ')
        let newWords = []
        words.forEach(word => newWords.push(word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()));
        return newWords.join(' ')
    }
    
    buttonParse() {
        let s = this.props.currentUser.email;
        return s.slice(0, 1);
    }

    demoLogin() {
        this.props.processForm({ email: 'demo_user@gmail.com', password: '123456' })
        .then(() => this.props.closeModal());
    }

    loginError() {
        return (
            <ul className='error-list'>
                {this.props.errors.map((error, i) => (
                    this.props.formType !== 'login' ? '' :
                        <li key={`error-${i}`}>
                            <i className="fas fa-exclamation-circle"></i>
                        &nbsp;&nbsp;{error}
                        </li>
                ))}
            </ul>
        )
    }

    emailError() {
        return (this.props.errors.map((error, i) => (
            !error.includes('Email') ? '' :
                <ul className='error-list'>
                    <li key={`error-${i}`}>
                        <i className="fas fa-exclamation-circle"></i>
                        &nbsp;&nbsp;{error}
                    </li>
                </ul>
        ))
        )
    }

    passwordError() {
      return (this.props.errors.map((error, i) => (
                !error.includes('Password') ? '' :
                <ul className='error-list'>
                <li key={`error-${i}`}>
                <i className="fas fa-exclamation-circle"></i>
                &nbsp;&nbsp;{error}
                </li>
                </ul> ))
      )
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.processForm(user)
        .then(() => this.props.closeModal())
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
                    {this.emailError()}
            </label>
            <br /><br />
            <label className='input-name'>
                <input type="password"
                    className="form-input"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleInput('password')} />
                    {this.passwordError()}
                    {this.loginError()}
            </label>
            <br /><br />
            <div id="demo-text" >Not your fullstack project? Use demo mode to sign in anonymously.</div>
            <div id="demo-button" onClick={this.demoLogin}>Demo sign in</div>
            <div className='action-buttons'>
                {otherFormButton}
                <button id='submit-button' onClick={this.handleSubmit}>{submitText}</button>
            </div>
        </form>;

        if (this.props.formType === 'logout') {
          form = (
          <form className="user-form">
          <div>
          <div className="user-button-menu" style={{backgroundColor: this.props.currentUser.icon_color}}>
            {this.buttonParse()}
          </div>
          <div className="user-name-menu">
            {this.usernameParse()}
          <div className="user-email-menu">
            {this.props.currentUser.email}
          </div>
          </div>
          </div>
          {/* <i id="user-icon" className="fas fa-user" >
          <div id="user-show-text" onClick={() => { <Link to="/login"></Link> }} >
            &nbsp;&nbsp;&nbsp;Your profile
          </div>
          </i> */}
          <i id="dark-mode-icon" className="fas fa-adjust" onClick={() => alert("Dark Mode coming soon!")}>
          <div id="dark-mode-text" onClick={() => {  <Link to="/login"></Link> }}>
            &nbsp;&nbsp;&nbsp;Dark mode
          </div>
          </i>
          <i  id="logout-icon"  className="fas fa-sign-out-alt" onClick={this.handleLogout}>
          <div id="logout-text">  &nbsp;&nbsp;&nbsp; Sign out
          </div>
          </i>
          <div   id="back-button" onClick={this.props.closeModal}>back
          </div>
          </form>
        )
      };
        
    return (
      <>
        {form}
      </>
    )
  }
}

export default SessionForm;