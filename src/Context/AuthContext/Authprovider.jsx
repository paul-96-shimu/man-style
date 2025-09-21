import React, { useState } from 'react';
import { AuthContext } from './Authcontex';
import { PiPassword } from 'react-icons/pi';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase.init';

const Authprovider = ({ children }) => {

    const [loading, setLoading] = useState(true)


    const createUser = (emai, PiPassword) => {

        setLoading(true)
        return createUserWithEmailAndPassword(auth, emai, PiPassword)
    }


    const logInUser = (email, Password) => {

        setLoading(true)
        return signInWithEmailAndPassword(auth, email, Password)

    }


    const authInfo = {
        loading,
        createUser,
        logInUser 


    }
    return (

        <AuthContext value={authInfo}>

            {children}
        </AuthContext>

    );
};

export default Authprovider;