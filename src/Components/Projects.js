import React, {Component} from 'react';
import envPro from './images/envPro.jpg'
import envSci from './images/envSci.jpg'
import hiking from './images/hiking.jpg'

class Projects extends Component {
    render() {
        return (
            <div>
                <div className="project">
                    <div className="pic center">
                        <a href="https://www.epa.gov/">
                            <img src={envPro} className="picture" alt="environment protection"/>
                        </a>
                    </div>
                    <div className="text">
                        <h3>United States Environmental Protection Agency (Environmental Protection Program)</h3>
                        <p>
                            The Environmental Protection Agency (EPA) is an independent agency,
                            specifically an independent executive agency,
                            of the United States federal government for environmental protection.
                            President Richard Nixon proposed the establishment of EPA on July 9, 1970;
                            it began operation on December 2, 1970, after Nixon signed an executive order.
                            The order establishing the EPA was ratified by committee hearings in the House and Senate.
                            The agency is led by its administrator, who is appointed by the president and approved by
                            Congress.
                            The current administrator is former deputy administrator Andrew R. Wheeler,
                            who had been acting administrator since July 2018.[5] The EPA is not a Cabinet department,
                            but the administrator is normally given cabinet rank.
                        </p>
                    </div>
                </div>
                <div className="project">
                    <div className="pic center">
                        <a href="https://www.environmentalscience.org/careers">
                            <img src={envSci} className="picture"/>
                        </a>
                    </div>
                    <div className="text">
                        <h3>Environmental Science Careers (Environmental Science Program)</h3>
                        <p>
                            Careers in Environmental Science are so varied it is difficult to consider them as one
                            category.
                            You could end up working from home most of the time or traveling around the world on an
                            annual basis.
                            You could be doing desk work, field work, or some combination thereof.
                            Your focus could be mathematical, physical, or written.
                            Of course the majority careers in Environmental Science are some blend in-between.
                        </p>
                    </div>
                </div>
                <div className="project">
                    <div className="pic center">
                        <a href="https://www.hikingproject.com/">
                            <img src={hiking} className="picture"/>
                        </a>
                    </div>
                    <div className="text">
                        <h3>Hiking Project (Environmental Exploration Program)</h3>
                        <p>
                            Discover your next hike <br/>
                            Get out on the trail with detailed maps shared by hikers like you.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;