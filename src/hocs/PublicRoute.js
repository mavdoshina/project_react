import React from "react";
import { Route, Navigate } from "react-router-dom";

function PublicRoute({ authenticated, ...rest }) {
    return !authenticated ? <Route {...rest} /> : <Navigate to="/chats" />;
}

export default PublicRoute;