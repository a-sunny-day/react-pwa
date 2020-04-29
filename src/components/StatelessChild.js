import React, {useContext} from "react";
import {UserInfoContext} from 'store/Context.js';

export default function Child (props) {
    console.log(props);
    let userinfo = useContext(UserInfoContext);
    return (
        <div>
            <span>name: </span>
            <i>{props.name || "bastard"}</i>
            <table>
                <tbody>
                    <tr>
                        <td>use name</td>
                        <td>{userinfo.name}</td>
                    </tr>
                    <tr onClick={() => userinfo.operation.setUserinfo({age: userinfo.age + 1})}>
                        <td>user age</td>
                        <td>{userinfo.age}</td>
                    </tr>
                </tbody>
                
            </table>
        </div>
    )
}