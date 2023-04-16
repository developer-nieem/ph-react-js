import React, { createContext } from 'react';


export const AuthContext= createContext(null);

const AuthProvider = ({children}) => {

    const user = {displayName: 'hasan'}
    return (
        <div>
            
            <AuthContext value={user}>
                    {children}
            </AuthContext>
        </div>
    );
};

export default AuthProvider;