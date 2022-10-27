import React, { createContext, useState } from 'react';
import { getAuth, signInWithPopup, onAuthStateChanged, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from 'firebase/auth'
import app from '../FireBase/Firebase.config';
import { useEffect } from 'react';
import { SignpostOutlined } from '@mui/icons-material';



export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);

    const [user, setUser] = useState(null);

    const providerLogIn = (provider) => {
        setLoading(false);
        return signInWithPopup(auth, provider)
    }

    const createUseer = (email, password) => {
        setLoading(false);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email,password) => {
        setLoading(false);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const LogOut = () => {
        setLoading(false);
        return signOut(auth);
    }

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }
    },[])

    const AuthInfo = { user, providerLogIn, createUseer, LogOut, signIn, loading }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;