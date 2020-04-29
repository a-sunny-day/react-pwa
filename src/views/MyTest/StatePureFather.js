import React from "react";
import StateChild from './StatefulChild.js';
import StatelessChild from './StatelessChild.js'

export default class StatePureFathe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        // if father won't update, then its children won't update neither;
        // father and children are bound together via props in Render function; 
        // only father's rerender can change childrens's props,
        return false;
    }

    componentDidMount() {
        // setInterval(() => {
        //     this.setState({counter: this.state.counter + 1}, function() {
        //         console.log("state of father: ", this.state)
        //     });
        // }, 1000);
    }
   
    render() {
        return (<div>
            <div>state pure father's counter: {this.state.counter}</div>
            <StateChild counter={this.state.counter}/>
            <StatelessChild />
        </div>)
    }
}