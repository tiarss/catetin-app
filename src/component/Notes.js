import React from 'react'
import Note from './Note'
import './Notes.css'

const Notes=({notes,handleDeleteNote})=>{
    return(
        <div className="notes">
            {notes.map((note)=>(
                <Note 
                    key={note.id}
                    id={note.id}
                    judul={note.judul}
                    isi={note.isi}
                    tanggal={note.tanggal}
                    handleDeleteNote={handleDeleteNote}
                />
            ))}
        </div>
    )
}

export default Notes