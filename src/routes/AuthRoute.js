import { Route, Redirect } from "react-router-dom";
import React from "react";
let userInfo = false;


export default function AuthRoute({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={
                ({ location }) => {
                    if (userInfo) {
                        // ok
                        return children;
                    } else {
                        // need to signin
                        return (
                            <Redirect to={{ pathname: '/signin', search: `from=${location.pathname}`, state: { from: location } }} />
                        )
                    }
                }
            }
        />
    )
}