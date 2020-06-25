import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
    constructor(props){
        super(props)
        this.usernameParse = this.usernameParse.bind(this);
        this.buttonParse = this.buttonParse.bind(this);
    }

    usernameParse() {
        let s = this.props.currentUser.email;
        let searchString = "@";
        let idx = s.indexOf(searchString);
        return s.slice(0, idx);
    }
    buttonParse() {
        let s = this.props.currentUser.email;
        return s.slice(0, 1);
    }

    render() {
    // const sessionLinks = () => (
    //         <nav className="login-signup">
    //             <button onClick={() => this.props.openModal('login')}>Login</button>
    //   &nbsp;or&nbsp;
    //             <button onClick={() => this.props.openModal('signup')}>Signup</button>
    //         </nav>
    //     );

        let button = 
            <button className='login-button' onClick={() => this.props.openModal('login')}>
                    <i className="fas fa-user-circle"></i>
                    SIGN IN
            </button>
            
        // if (this.props.currentUser) {
        //     button = <button className='user-button' onClick={this.props.logout}>{this.buttonParse()}</button>};

        if (this.props.currentUser) {
            button = <button className='user-button' onClick={() => this.props.openModal('logout')}>{this.buttonParse()}</button>
        };

        return (
            <>
                {button }
                {/* {sessionLinks()} */}
            </>
        )
    }
}

export default Greeting;

