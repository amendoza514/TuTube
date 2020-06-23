import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
    constructor(props){
        super(props)
        this.usernameParse = this.usernameParse.bind(this);
    }

    usernameParse() {
        let s = this.props.currentUser.email;
        let searchString = "@";
        let idx = s.indexOf(searchString);
        return s.slice(0, idx);
    }

    render() {
        let button = 
            <section className='user-button'>
                <Link to='/login'>Sign In</Link>
                {/* <Link to='/signup'>Create Account</Link> */}
                {/* Do I need this??? */}
            </section>

        if (this.props.currentUser) {
            button = <section className='user-button'>
                        {/* <span>{this.props.currentUser.email}</span> */}
                        <p>Hello, {this.usernameParse()}</p>
                        <button onClick={this.props.logout}>Logout</button>
                    </section>
        };

        return (
            <>
                {button}
            </>
        )
    }
}

export default Greeting;

