import React from "react";

// children is an array of [React.Component];
// children can be a render function

export default function Father (props) {
    React.Children.forEach(props.children, (childElement) => {
        console.log(childElement);
    })

    let content = "";
    let arg = "long time no see";
    if("function" === typeof props.children)
        content = props.children(arg);
    else 
        content = props.children
    return (
        <div>
            {content}
        </div>
    )
}