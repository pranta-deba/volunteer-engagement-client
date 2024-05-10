import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../services/firebase.config";
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
            } else {
                setUser(null);
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
    const emailPasswordSignIn = (email,password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(() => {
                setUpdateTrigger(!updateTrigger)
            })
    }





    console.log(user);

    return <AuthContext.Provider value={{
        themeController,
        setThemeController,
        user,
        emailPasswordRegister,
        googleSignIn,
        updateUser,
        emailPasswordSignIn,
        logOut
    }}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;