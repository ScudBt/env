import React from 'react';
import Reflux from 'reflux';
import GuestStore from '../Stores';
import Actions from '../Actions';

//import './GBForm.css';

class GBForm extends Reflux.Component {

    constructor(props) {
        super(props);
        this.store = GuestStore;
        this.state = {
            email: '',
            message: '',
            name: '',
            description: '',
            privacy: false
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">*Email address {this.state.messages.length}:   </label>
                            <input type="email" className="form-control" name="email" value={this.state.email}
                                   onChange={this.handleInputChange} id="exampleInputEmail1" placeholder="Email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Your Message:   </label>
                            <input type="text" className="form-control" name="message" value={this.state.message}
                                   onChange={this.handleInputChange} id="exampleInputPassword1" placeholder="Message"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword2">Your Name:   </label>
                            <input type="text" className="form-control" name="name" value={this.state.name}
                                   onChange={this.handleInputChange} id="exampleInputPassword2" placeholder="Name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword3">*Self Description:   </label>
                            <input type="text" className="form-control" name="description"
                                   value={this.state.description} onChange={this.handleInputChange}
                                   id="exampleInputPassword3" placeholder="Description"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword4">Privacy Choice:   </label>
                            <input type="checkbox" className="form-control" name="privacy" checked={this.state.privacy}
                                   onChange={this.handleInputChange} id="exampleInputPassword4" placeholder="Privacy"/>
                        </div>
                        <button className="form-group" onClick={this.onClick}>Submit</button>
                    </div>
                </div>
            </div>
        );
    }

    handleInputChange(event) {
        this.setState({
            privacy: !this.state.privacy,
            selected: !this.state.selected,
        });
    }

    onClick = (e) => {
        console.log(this.state);
        if (this.state.email && this.state.description) {
            Actions.submit(this.state.email, this.state.message, this.state.name, this.state.description, this.state.privacy);
        }

    }

    handleInputChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState((prevState, props) => {
            return {[name]: value};
        });

    }


}

export default GBForm;
