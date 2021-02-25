import React from 'react';
import { Route, Redirect } from "react-router-dom";
import Footer from './Footer';

const ProtectedRoute = ({ component: Component, ...props }) => {
    return (
        <Route>
            {
                () => props.loggedIn ? (<><Component {...props} /> <Footer /> </>) : <Redirect to="./sign-in" />
            }
        </Route>
    )
}

export default ProtectedRoute;