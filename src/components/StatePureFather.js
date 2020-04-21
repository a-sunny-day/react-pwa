import React from "react";
import StateChild from 'components/StatefulChild.js';

export default class StatePureFathe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        // if father won't update, then its children won't update neither;
        // father and children are bound together via props in Render function; 
        // only father's rerender can change childrens's props,
        return false;
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({counter: this.state.counter + 1});
        }, 1000);
    }
   
    render() {
        return (<div>
            <div>state pure father's props: {this.props.index}</div>
           <StateChild counter={this.state.counter}/>
        </div>)
    }
}