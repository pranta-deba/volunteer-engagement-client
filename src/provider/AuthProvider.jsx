import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../services/firebase.config";
import axios from "axios";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [themeController, setThemeController] = useState(localStorage.getItem('theme') || 'light');
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const [updateTrigger, setUpdateTrigger] = useState(false);

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                const tokenAccess = async () => {
                    await axios.post(`${import.meta.env.VITE_API_URL}/jwt`, {
                        email: currentUser?.email
                    },
                        { withCredentials: true })
                }
                tokenAccess();
            } else {
                setUser(null);
                const removeToken = async () => {
                    await axios(`${import.meta.env.VITE_API_URL}/logOut`, { withCredentials: true });
                }
                removeToken();
            }
        })
        return () => unSubscribe();
    }, [updateTrigger])

    const emailPasswordRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }
    const logOut = () => {
        signOut(auth);
    }
    const emailPasswordSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }


    // console.log(user);

    return <AuthContext.Provider value={{
        user,
        emailPasswordRegister,
        googleSignIn,
        updateUser,
        emailPasswordSignIn,
        logOut,
        themeController,
        setThemeController, updateTrigger, setUpdateTrigger
    }}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;