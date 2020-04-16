import React from 'react';
import "./Checkbox.scss";
import classnames from 'classnames';

class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            checked: true,
        }
        this.onChange = this.onChange.bind(this);
    }
    onChange(event) {
        console.log(event.target.checked);
        this.setState({
            checked: event.target.checked
        })
    }

    render() {
        return (
            <label className={classnames('zm-checkbox-container', this.props.containerClass)}>
                {this.props.text}
                <input type="checkbox" checked={this.state.checked} onChange={this.onChange}></input>
                <span className="check-mark"></span>
            </label>
        )
    }
}

export default Checkbox;