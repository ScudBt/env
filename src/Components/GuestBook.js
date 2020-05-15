import React, {Component} from 'react';
import config from '../config'

/*const firebase = require('firebase')*/

class GuestBook extends Component {
    /*constructor(props) {
        super(props)
        this.state = {data: {}}
    }

    componentDidMount() {
        if (!firebase.apps.length) {
            firebase.initializeApp(config)
        }
        firebase.initializeApp(config)
        let ref = firebase.ref('data')
        ref.on('value', snapshot => {
            const data = snapshot.val()
            this.setState({data: data})
        })
    }

    componentDidUpdate(prevProps, prevState, snapshoyt){
        //only call set state here if it is wrapped in a condition
        //if you initialize this.state.shouldUpdate and have not changed it yet then this will not run
        if(this.state.shouldUpdate != prevState.shouldUpdate){
            //same code as above to retrieve the data
            //get a reference to the database
            let ref = firebase.database().ref('data')
            //retrieve its data
            ref.on('value', snapshot => {
                //this is your call back function
                //state will be a JSON object after this
                //set your apps state to contain this data however you like
                const state = snapshot.val()
                //since i use react 16, i set my state like this
                //i have previously declared a state variable like this: const [data, setData] = useState([]) so that I can make the below call
                setData(state)
            })
        }
    }*/

    render() {
        return (
            <div>
                <form className={"form"}>
                    <label>
                        Your name:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Short Description of Yourself:
                        <input type="text" name="description" />
                    </label>
                    <label>
                        Your message to me:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Your Email:
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default GuestBook;