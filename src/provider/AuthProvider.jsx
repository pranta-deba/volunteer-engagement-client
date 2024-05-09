import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [themeController, setThemeController] = useState(localStorage.getItem('theme') || 'light');
    const [user, setUser] = useState(null);

    return <AuthContext.Provider value={{ themeController, setThemeController ,user}}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;