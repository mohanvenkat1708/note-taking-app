import React from "react";
const Login=()=>{
    return <div className="login-container">
        <h1>Login Please😎</h1>
        <form method="post" >
        <input type="text" placeholder="Your Name🤝"/>
        <input type="password" placeholder="Password🔑"/>
        <input type="submit" value="Login" className="submit"/>
        </form>
    </div>
}

export default Login;