import React from "react";

class Dropdown extends React.Component{
    constructor(props) {
        this.state = {
            listOpened: false,
        }
    }

    render() {
        (<div className="dropdown-container">
            <div className="dropdown-header">
                <input className="dropdown-input" type={this.props.type}></input>
            </div>
            {
                this.state.listOpened && (
                    <ul className="dropdown-list">
                        {
                            this.props.list.map(item => {
                                return (
                                    <li key={item.id} className="dropdown-item">
                                        
                                    </li>
                                )
                            })
                        }
                    </ul>
                )
            }
            
        </div>)
    }
}

