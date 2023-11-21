import Header from "./components/Header.js";

import NotesList from "./components/NotesList";

import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import Search from './components/Search';
import {nanoid} from 'nanoid';
import { useState, useEffect } from "react";
import AddNote from "./components/AddNote";
import Notes from "./components/Notes.js";

const App=()=>{

  const [searchText, setSearchText]=useState("");
  const [notes, setNotes]= useState(()=>{
    const savedNotes = JSON.parse(localStorage.getItem('saved-notes-data'));

    return savedNotes || [{
    id: nanoid(),
    text:"This is my first note😁 ",
    date: "14/11/2023"
  },
  {
    id: nanoid(),
    text:"This is my second note😁 ",
    date: "14/11/2023"
  },
  {
    id: nanoid(),
    text:"This is my third note😁 ",
    date: "14/11/2023"
  },
  {
    id: nanoid(),
    text:"This is my fourth note😁 ",
    date: "14/11/2023"
  },
];

  });

useEffect(()=>
{
  localStorage.setItem('saved-notes-data',JSON.stringify(notes))},[notes]);
  const addNote=({text})=>{
 
  const date= new Date();
  const newNote={
    id:nanoid(),
    text:text,
    date: date.toLocaleDateString(),
  }

  const newNotes=[...notes, newNote];
  //console.log(text);

  setNotes(newNotes);
};


  const deleteNote=({id})=>{
    const newNote=notes.filter((notes)=>notes.id!==id);
    setNotes(newNote);
  }
  //localStorage.clear();
  return (
    <div className="container">
      <Login/>
      <Signup/>
      <Header/>
      <Search handleSearchNote={setSearchText}/>
      <NotesList  handleAddNote={addNote}
      handleDeleteNote={deleteNote}
      
      notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText.toLowerCase()))}

      //the reson, why we keep the original notes array separated is that, if there is another component that relies on the original array, then it's actions won't be affected by the search function
      />
    </div>
  );
}



export default App;