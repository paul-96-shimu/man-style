import React, { useState } from 'react';
import { AuthContext } from './Authcontex';
import { PiPassword } from 'react-icons/pi';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../firebase.init';

import { GoogleAuthProvider } from "firebase/auth";
import { useEffect } from 'react';

const provider = new GoogleAuthProvider();

const Authprovider = ({ children }) => {

    const [loading, setLoading] = useState(true)

    const [user, setUser] = useState(null)


    const createUser = (emai, PiPassword) => {

        setLoading(true)
        return createUserWithEmailAndPassword(auth, emai, PiPassword)
    }


    const logInUser = (email, Password) => {

        setLoading(true)
        return signInWithEmailAndPassword(auth, email, Password)

    }


    const logOut = () => {
        setLoading(true)

        return signOut(auth)

    }

    const signInGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)

    }

    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, currentUser => {

            setUser(currentUser)
            setLoading(false)

        })
        return unSubscribe()


    }, [])

    const authInfo = {
        loading,
        createUser,
        logInUser,
        signInGoogle,
        logOut,
        user,



    }
    return (

        <AuthContext value={authInfo}>

            {children}
        </AuthContext>

    );
};

export default Authprovider;