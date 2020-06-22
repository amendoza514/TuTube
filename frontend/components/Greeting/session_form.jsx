import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {email:'', password:''}
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(type){
        return (event) => {
            this.setState({ [type]: event.target.value })
        }
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.processForm(user)
    }

    render () {
        let redirectPath = this.props.formType === 'signup' ? '/login' : '/signup'
        let redirectText = this.props.formType === 'signup' ? 'login' : 'signup'
        //not currently in use 
        return (
            <div>
                <h2>{this.props.formType} ...or <Link to={redirectPath}>{redirectText}</Link></h2>
                <form>
                    <label>Email:
                        <input type="text" value={this.state.email} onChange={this.handleInput('email')} />
                    </label>
                    <label>Password:
                        <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
                    </label>
                    <button onClick={this.handleSubmit}>{this.props.formType}</button>
                </form>
            </div>
        )
    }
}

export default SessionForm;