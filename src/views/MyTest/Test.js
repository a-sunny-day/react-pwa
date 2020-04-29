import React from "react";
import Father from "./Father";
import StatelessChild from "./StatelessChild.js";
import StatePureFather from "./StatePureFather.js";
import TestSection from "components/TestSection/TestSection.js";
import {UserInfoContext, ThemeContext} from 'store/Context.js';
import {produce} from "immer";


export default class Test extends React.Component {
    constructor(props)  {
        super(props);
        this.setUserinfo = this.setUserinfo.bind(this); // must come before this.state
        this.state = {
            theme: 'light',
            userinfo: {
                name: "chris",
                age: 27,
                operation: {
                    setUserinfo: this.setUserinfo
                }
            }
        };
    }
    
    setUserinfo(userinfo) {
        this.setState(produce( draft => {
            for(let key in userinfo) {
                draft.userinfo[key] = userinfo[key]; 
            }
        }));
    }

    render() {
        return (
            <UserInfoContext.Provider value={this.state.userinfo}>
                <ThemeContext.Provider vlaue={this.state.theme}>
                    <div>
                        <TestSection>
                            <Father role="father">
                                <StatelessChild name="four"/>
                                <h1 className="bastard-bb" nothing="xxx">bastard</h1>
                            </Father> 
                        </TestSection>

                        <TestSection>
                            <Father role="father">
                                { arg => (<h1>{arg}</h1>) }
                            </Father>
                        </TestSection>
                        
                        <TestSection className={"hello-world"}>
                            <StatePureFather index={3}></StatePureFather>
                        </TestSection>
                    </div>
                </ThemeContext.Provider>
            </UserInfoContext.Provider>
        )
    }
}