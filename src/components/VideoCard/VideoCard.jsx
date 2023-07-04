import React from 'react'
import './Videocard.css';
// import VideoImg from '../../assets/Vde.png';
// import Avatar from '../../assets/Bar.png'

function VideoCard(props) {
    return (
      <div className='videoCard'>
        <a href="https://www.youtube.com/watch?v=5IIv1xB_yBQ">
            <img className='videoImg' src={props.thubnail} alt="" />
          <div className='videoDate'>
            <div><img src={props.channelLogo} alt="" /></div>
            <div className='channelDetails'>
                <h5>{props.title}</h5>
                <p className='c_name'>{props.channelName}</p>
                <p>{props.views} &bull; {props.time}</p>
            </div>
          </div>
          </a>
      </div>
    )
}

export default VideoCard