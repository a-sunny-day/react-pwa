import React from "react";
import Father from "components/Father";
import Child from "components/Child";
import StatePureFather from "components/StatePureFather.js";

export default function Test(props) {
    return (
        <div>
            <Father role="father">
               <Child name="four"/>
               <h1 className="bastard-bb" nothing="xxx">bastard</h1>
           </Father> 
           <Father role="father">
                {
                    arg => (<h1>{arg}</h1>)
                }
           </Father> 
           <StatePureFather index={3}></StatePureFather>
        </div>
    )
}