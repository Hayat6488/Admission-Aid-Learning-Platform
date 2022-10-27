import React, { createContext, useState } from 'react';
import { getAuth, signInWithPopup, onAuthStateChanged, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from 'firebase/auth'
import app from '../FireBase/Firebase.config';
import { useEffect } from 'react';
import { SignpostOutlined } from '@mui/icons-material';



export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const providerLogIn = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const createUseer = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const LogOut = () => {
        return signOut(auth);
    }

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
            setUser(currentUser);
        });

        return () => {
            unsubscribe();
        }
    },[])

    const AuthInfo = { user, providerLogIn, createUseer, LogOut, signIn }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;