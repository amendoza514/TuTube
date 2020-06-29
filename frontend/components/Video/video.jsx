import React from 'react'
import { Link } from 'react-router-dom'

class Video extends React.Component {

    usernameParse() {
        let s = this.props.video.user;
        let searchString = "@";
        let idx = s.indexOf(searchString);
        return s.slice(0, idx);
    }

    buttonParse() {
        let s = this.props.video.user
        return s.slice(0, 1);
    }

    viewCounter() {
        let v = this.props.video.views;
        let s = v.toString()

        if (s.length === 4) {
            return s.slice(0, 1) + 'K'
        } else if (s.length === 5) {
            return s.slice(0, 2) + 'K'
        } else if (s.length === 6) {
            return s.slice(0, 3) + 'K'
        } else if (s.length > 6) {
            return s.slice(0, 1) + 'M'
        } else {
            return s
        }
    }

    //what is the best way to make these more modular? I'm recycling in many components

    render() {

        // let color = ['#E27D60', '#85DCB', '#E8A87C', '#C38D9E', '#8EE4AF', '#05386B', '#FC4445', '#97CAEF']
        // let randomColor = color[Math.floor(Math.random() * color.length)];

        // $(".user-button-menu").css("color", randomColor)

        let temp = [
            window.corgiOneUrl,
            window.corgiTwoUrl,
            window.corgiThreeUrl,
            window.corgiFourUrl,
            window.corgiFiveUrl,
            window.goatOneUrl
        ]

        return (
                /* <img className='temp' src={thumbnail} /> */
            <div>
                <img className='temp' src={temp[this.props.idx]} />
                <div className='title-container'>
                    <div className='user-button-menu' >{this.buttonParse()}</div>
                    <div className='video-title'>
                    <Link to={`/watch/${this.props.video.id}`}>
                            {this.props.video.title}
                        </Link>
                    </div>
                </div>
                <div className='video-creator'>{this.usernameParse()}</div>
                <div className='video-info'>
                    <div className='video-views'>{this.viewCounter()} views •</div>
                    <div className='video-uploaded'>3 weeks ago</div>
                </div>
            </div>
        )
    }
}

export default Video;

// const EventIndexItem = ({ event, deleteEvent }) => (
//     <li>
//         <Link to={`/events/${event.id}`}>{event.description}</Link>
//         <Link to={`/events/${event.id}/edit`}>Edit</Link>

//         <button onClick={() => deleteEvent(event.id)}>Delete Event</button>
//     </li>
// )

// export default EventIndexItem;