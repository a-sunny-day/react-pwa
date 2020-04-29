import React, {userContext} from 'react';

export default class StatefulChild extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
        this.onClick = this.onClick.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
    }
    shouldComponentUpdate(nextProps, nextState) {
        // every time props and state changes, this function will be called
        // props will be the latest props
        // state still changes, but the ui won't update !
        // [state and ui do not sync]!
        console.log("current: ", this.props, this.state);
        console.log("next: ", nextProps, nextState);
        return true;
    }
    onClick(e) {
        e.stopPropagation();
        this.setState({counter: this.state.counter + 1});
    }
    onMouseEnter(e) {
        console.log("mouse enter", this.props, this.state);
    }
    render() {
        return (
            <i onClick={this.onClick}
               onMouseEnter={this.onMouseEnter}>{this.state.counter + " : " + this.props.counter}</i>
        )
    }
}