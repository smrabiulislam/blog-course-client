import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthProvider, { AuthContext } from '../../Firebase/Authprovider';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext)
    if (!user) {
        return <Navigate to="/signin" ></Navigate>;
    }
    return children;

};

export default PrivateRoute;