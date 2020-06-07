import React, {Component} from 'react';
import onos from "./images/1917.jpg";
import avengers from "./images/avengers.jpg";
import joker from "./images/joker.jpg";
import knive from "./images/knives out.jpg";
import pl from "./images/paatal lok.jpg";
import parasite from "./images/parasite.jpg";
import shawshank from "./images/shawshank.jpg";
import dance from "./images/the last dance.jpg";

class Movies extends Component {
    render() {
        return (
            <div className={"movies"}>
                <img src={onos} alt="a beautiful nature image"/>
                <img src={avengers} alt="a beautiful nature image"/>
                <img src={joker} alt="a beautiful nature image"/>
                <img src={knive} alt="a beautiful nature image"/>
                <img src={pl} alt="a beautiful nature image"/>
                <img src={parasite} alt="a beautiful nature image"/>
                <img src={shawshank} alt="a beautiful nature image"/>
                <img src={dance} alt="a beautiful nature image"/>
            </div>
        );
    }
}

export default Movies;