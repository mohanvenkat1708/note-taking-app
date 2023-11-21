import { useState } from "react";

const AddNote=({handleAddNote})=>{
    const [text, setText]=useState("");
    const [charCount, setCharCount]=useState(0);
    const charLimit=50;
    const handleChange=(event)=>{
        // console.log(event.target.value);
        const inputText=event.target.value;
        if(inputText.length>charLimit)
        {
            setText(inputText.substring(0,charLimit));
            setCharCount(charLimit);
        }
        else 
        {
            setText(inputText);
            setCharCount(inputText.length);
        }
        
    }

    const handleSaveClick=()=>{
        if(text.trim().length>0)
        {
            handleAddNote({text});
            setText("");
            setCharCount(0);
        }
        
    }


    return(
        <div className="notes new-note">

        <textarea rows="8" cols="10" value={text} placeholder="Type to add a note...⌨️" onChange={handleChange}></textarea>

        <div className="notes-footer">

            <small>{charLimit-charCount} Remaining</small>

            <button className="save-btn" onClick={handleSaveClick}>Save🥳</button>
        </div>

        </div>
    );
}

export default AddNote;