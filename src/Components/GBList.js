import React from 'react';
import Reflux from 'reflux';
import GuestStore from '../Stores';

//import './GBList.css';

class GBList extends Reflux.Component {

    constructor(props) {
        super(props);
        this.store = GuestStore;
    }

    render() {

        const messageList = this.state.messages.map((message, index) => {

                return (
                    <a href={'mailto:' + message.email} key={index} className={"list-group-item"}>
                        <p className="list-group-item-text">{message.email}</p>
                        <p className="list-group-item-text">{message.text}</p>
                        <p className="list-group-item-text">{message.name}</p>
                        <p className="list-group-item-text">{message.description}</p>
                        <p className="list-group-item-text">{message.privacy}</p>
                    </a>
                );

        });

        return (
            <div className="list-group">
                {messageList}
            </div>
        );
    }
}

export default GBList;
