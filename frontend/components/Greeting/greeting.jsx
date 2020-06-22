import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        let button = 
        <div>
            <Link to='/login'>Login</Link>
            <br/>
            <Link to='/signup'>Signup</Link>
        </div>

        if (this.props.currentUser) {
            button = 
            <div>
                <p>Welcome, {this.props.currentUser.email}</p>
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

