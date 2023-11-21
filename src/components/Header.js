import React from "react";

const Header=()=>{
    
    const toggle=()=>{
        document.getElementById("root").style.minHeight="100vh";
        if(document.getElementById("root").style.backgroundColor =="white")
        {
            document.getElementById("root").style.backgroundColor="black";
            document.getElementsByClassName("heading")[0].style.color="white";
        }
        else{
            
            document.getElementById("root").style.backgroundColor="white";
            document.getElementsByClassName("heading")[0].style.color="black";
        }
        
    }
    return(
        <div className="header">
            <h1 className="heading">Happy Happy Notes 😊😉🤩🥰🥳</h1>

            <button className="toggle-btn" onClick={toggle}>Toggle⚙️</button>

        </div>
    )
}

export default Header;