import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, sendEmailVerification } from "firebase/auth";
import app from '../Firebase/firebase.init';

export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    console.log('authprovider', user)

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (profile) => {
        setLoading(true);
        return updateProfile(auth.currentUser, profile);

    }

    const signInWithGithub = (githubProvider) => {
        signInWithPopup(auth, githubProvider)

    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('inside changed', currentUser);

            setUser(currentUser);

            setLoading(false);

        });
        return () => {
            unsubscribe();
        }



    }, [])


    const authInfo = {
        createUser,
        providerLogin,
        user,
        signIn,
        logOut,
        updateUserProfile,
        loading,
        signInWithGithub

    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;