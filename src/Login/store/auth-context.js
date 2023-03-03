import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {},
});

export function AuthContextProvider(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("login") === "1") {
            setIsLoggedIn(true);
        }
    }, []);

    function loginHandler(email, password) {
        localStorage.setItem("login", "1");
        setIsLoggedIn(true);
    }

    function logoutHandler() {
        localStorage.removeItem("login");
        setIsLoggedIn(false);
    }
    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                onLogout: logoutHandler,
                onLogin: loginHandler,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
