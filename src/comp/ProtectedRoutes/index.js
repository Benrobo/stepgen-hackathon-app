import React from 'react'
import AuthScreen from '../../pages/login';

function ProtectedRoute({ components, ...rest }) {

    const isAuthenticated = true;

    return (
        <>
            {isAuthenticated ? components : <AuthScreen />}
        </>
    )
}

export default ProtectedRoute