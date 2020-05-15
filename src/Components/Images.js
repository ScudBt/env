import React, {Component} from 'react';
import pic1 from './images/pic1.jpg'
import pic2 from './images/pic2.jpg'
import pic3 from './images/pic3.jpg'
import pic4 from './images/pic4.jpg'
import pic5 from './images/pic5.jpg'
import pic6 from './images/pic6.jpg'
import pic7 from './images/pic7.jpg'

class Images extends Component {

render() {
        return (
            <div className={"parent"}>
                <div className="child child1">
                    <img src={pic1} alt="a beautiful nature image"/>
                    <h3>Creek under the Clouds</h3>
                    <p>"In every walk in with nature <br/> one receives far more than he seeks."<br/> - John Muir</p>
                </div>
                <div className="child child2">
                    <img src={pic2} alt="a beautiful nature image"/>
                    <h4>End of the Continent</h4>
                </div>
                <div className="child child3">
                    <img src={pic3} alt="a beautiful nature image"/>
                    <h4>Sky v.s. the Well</h4>
                </div>
                <div className="child child4">
                    <img src={pic4} alt="a beautiful nature image"/>
                    <div>
                        <h3>Flower under the Sunset</h3>
                        <p>"'Is the spring coming?' he said. 'What is it like?' ...<br/>
                            'It is the sun shining on the rain and the rain falling on the sunshine,
                            and things pushing up and working under the earth.'"<br/>
                            —Frances Hodgson Burnett, The Secret Garden</p>
                    </div>
                </div>
                <div className="child child5">
                    <img src={pic5} alt="a beautiful nature image"/>
                    <h4>Beautiful Sakura Tree</h4>
                </div>
                <div className="child child6">
                    <img src={pic6} alt="a beautiful nature image"/>
                    <h4>Wildness: Waiting for the rain</h4>
                </div>
                <div className="child child7">
                    <img src={pic7} alt="a beautiful nature image"/>
                    <h4>Sunset to the Infinity</h4>
                </div>
            </div>
        );
    }
}

export default Images;