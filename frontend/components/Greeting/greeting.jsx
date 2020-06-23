import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        let button = 
        <div>
                <Link to='/login'>Sign In</Link>
                {/* <Link to='/signup'>Create Account</Link> */}
                {/* Do I need this??? */}
        </div>

        if (this.props.currentUser) {
            button = <div>
                        <span>{this.props.currentUser.email}</span>
                        <p>Hello, {this.props.currentUser.email}</p>
                        <button onClick={this.props.logout}>Logout</button>
                    </div>
        };

        return (
            <>
                {button}
            </>
        )
    }
}

export default Greeting;

