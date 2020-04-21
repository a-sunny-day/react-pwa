import React from "react";

export default function Child (props) {
    console.log(props);
    return (
        <div>
            <span>name: </span>
            <i>{props.name || "bastard"}</i>
        </div>
    )
}