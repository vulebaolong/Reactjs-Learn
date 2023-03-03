import React, { useContext } from "react";

import LoginContent from "./components/LoginContent/LoginContent.js";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context.js";

function Login(props) {
    const ctx = useContext(AuthContext);
    console.log(ctx);
    return (
        <>
            {/* nới thiết lập trạng thái login true hay false */}
            <MainHeader />
            <main>
                {!ctx.isLoggedIn && <LoginContent />}
                {ctx.isLoggedIn && <Home />}
            </main>
        </>
    );
}

export default Login;
