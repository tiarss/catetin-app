import React, { useState } from 'react'
import './NewNotes.css'

const NewNote =({handleAddNote})=>{
    const [noteText,setNoteText]=useState('');
    const [noteTitle,setNoteTitle]=useState('');
    
    const characterLimit = 200;
    const limitJudul = 20;

    const handleChange =(event)=>{
        //console.log(event.target.value)
        if(characterLimit - event.target.value.length >=0){
            setNoteText(event.target.value);
        };
        
    };
    const handleChangetTitle =(event)=>{
        if(limitJudul-event.target.value.length >=0){
            setNoteTitle(event.target.value);
        }
    }
    const handleSaveClick = () =>{
        if(noteText.trim().length > 0){
            handleAddNote(noteTitle,noteText);
            setNoteText('');
            setNoteTitle('');
        };
        
    };
    return(
        <div className="news-notes">
            <input 
                type="text" 
                placeholder="Tulis Judul"
                onChange={handleChangetTitle}
                value={noteTitle}
                />
            <textarea 
                rows="10" 
                cols="30"
                placeholder="Tulis isi Note anda!"
                onChange={handleChange}
                value={noteText}
                >
            </textarea>
            <button onClick={handleSaveClick}>Save</button>
        </div>
    );
}

export default NewNote