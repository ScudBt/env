import React, {Component} from 'react';
import  video1 from './videos/video1.mp4'
import  video2 from './videos/video2.mp4'
import  video3 from './videos/video3.mp4'
import  video4 from './videos/video4.mp4'

class Videos extends Component {
    render() {
        return (
            <div className={"videos"}>
                <div className="video main-video">
                    <video className={"v"} src={video1}/>
                    <h3>Wheat Paddock</h3>
                </div>
                <div className="video">
                    <video className={"v"} src={video2}/>
                    <h3>Sunset on the Steppe</h3>
                </div>
                <div className="video">
                    <video className={"v"} src={video3}/>
                    <h3>Exploring the Forest</h3>
                </div>
                <div className="video">
                    <video className={"v"} src={video4}/>
                    <h3>Maple Boulevard</h3>
                </div>
            </div>
        );
    }
}

export default Videos;