import React from 'react'
import { Link, Redirect } from 'react-router-dom'

class Sidebar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let sidebarStyle =
          this.props.mode === false ? "main-sidebar" : "dark-main-sidebar";
        return(
            <>
                <div className={sidebarStyle}>
                    <Link to='./' className='home-icon'>
                        <i className="fas fa-home"></i>
                    </Link>
                    <a href='https://www.linkedin.com/in/alex-mendoza-aa4615b5/' className='linkedin-icon'>
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href='https://github.com/amendoza514/TuTube' className='linkedin-icon' className='subs-icon'>
                        <i className="fab fa-github"></i>
                    </a>
                </div> 
            </>
        )
    }
}

export default Sidebar