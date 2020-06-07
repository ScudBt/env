import React, {Component} from 'react';
import TabList from "./Components/TabList";
import Body from "./Components/Body";
import './App.css'
const firebase = require('firebase')

class App extends Component {
    constructor() {
        super();
        this.state = {
            activeTab: 1
        }
        this.changeTab = (id) => {
            this.setState({
                activeTab: id
            })
        }
    }
    render() {
         const tabs = [
             {
                 id: 1,
                 title: 'Home'
             },
             {
                 id: 2,
                 title: 'Images'
             },
             {
                 id: 3,
                 title: 'Videos'
             },
             {
                 id: 4,
                 title: 'Projects'
             },
             {
                 id: 5,
                 title: 'Movies'
             },
             {
                 id: 6,
                 title: 'GuestBook'
             },
             {
                 id: 7,
                 title: 'Graph'
             }
         ]
        return (
            <div className={"page"}>
                <div className={"header"}>
                    <div className={"nav-bar"}>
                        <TabList tabs={tabs} changeTab={this.changeTab} activeTab={this.state.activeTab}/>
                    </div>
                    <div className={"title"}>
                        <h1> ScudBt's Website </h1>
                    </div>
                </div>
                <div>
                    <Body activeTab={this.state.activeTab}/>
                </div>
            </div>
        );
    }
}

export default App;