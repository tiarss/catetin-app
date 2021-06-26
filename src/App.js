import Notes from './component/Notes'
import NewNote from './component/NewNote'
import Navbar from './component/Navbar'
import {nanoid} from 'nanoid'
import './App.css'
import useLocalStorage from './component/LocalStorage'
import Search from './component/Search'
import { useState } from 'react'


function App() {
  const [notes,setNotes] = useLocalStorage('note',[{
    id: nanoid(),
    judul:"halooo",
    isi:"halpo",
    tanggal:"26/14/21"
  }]);
  
  const [searchText,setSearchText] = useState('')

  const addNote = (judul,isi) =>{
    const date = new Date();
    const newNote = {
      id:nanoid(),
      judul:judul,
      isi:isi,
      tanggal:date.toLocaleDateString()
    }
    const newNotes = [...notes,newNote];
    setNotes(newNotes)
  }

  const deleteNote = (id)=>{
    const newNotes = notes.filter((note)=> note.id !== id)
    setNotes(newNotes)
  }

  return (
      <div className="App">
        <Navbar />
        <div className="new-notes">
          <h1>Add Note</h1>
          <NewNote handleAddNote={addNote}/>
        </div>
        <div className="notes-app">
          <h1 style={{color: "white", marginBottom:'10px',marginTop:"13px"}}>Search Note</h1>
          <Search handleSearchNote={setSearchText}/>
          <Notes 
            notes={notes.filter((note)=>
              note.judul.toLowerCase().includes(searchText.toLowerCase())
              )} 
            handleDeleteNote={deleteNote}
          />
        </div>
        <div className="bg"></div>
      </div>
  );
}

export default App;
