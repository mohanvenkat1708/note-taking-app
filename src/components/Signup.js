import React from "react";
const Signup=()=>{
    return <div className="login-container">
        <h3>Sign up 👊 to create Your Account🥰</h3>
        <form method="post">
        <input type="text" placeholder="Your Name🤝"/>
        <input type="password" placeholder="Password🔑"/>
        <input type="submit" value="Signup" className="submit"/>
        </form>
    </div>
}

export default Signup;