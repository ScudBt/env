import React, {Component} from 'react';
import main from './images/main.jpg'

class Home extends Component {
    render() {
        return (
            <div className={"mainBody"}>
                <div>
                    <img src={main} alt="a beautiful nature image"/>
                </div>
                <div>
                    <p>
                        Industrial pollution, garbage, cutting of trees (deforestation) to make homes and industry,
                        harsh use of chemicals, water pollution etc.
                        They all harm our nature and yes if nature gets harm
                        it will have some side-effects which results in some infections and diseases.
                        Example: In June 2013 a flood attacks on Uttarakhand (Kedarnath) destroyed whole area of Uttarakhand.<br/>
                        In today’s life we all are ignoring our nature by using scientific devices,
                        using chemical bound products; eat food which is full of chemicals or harmful elements.
                        Here we our doing two wrong things firstly Harming our Nature in every possible way.<br/>
                        Secondly harming our self by making wrong use of science.
                        Science is for study and for some useful things not for destroying it.<br/>
                        Every day we got the news that scientist are
                        working on moon to grow potatoes or they are going
                        to search life there because there’s no life on earth soon
                        due to these harmful things and the major part is we know that our earth,
                        our nature is in danger so we have to work on earth to protect it .
                        We have to protect our nature as soon as possible.
                    </p>
                </div>
            </div>
        );
    }
}

export default Home;