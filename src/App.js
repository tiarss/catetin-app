import Notes from './component/Notes'
import NewNote from './component/NewNote'
import Navbar from './component/Navbar'
import {nanoid} from 'nanoid'
import './App.css'
import useLocalStorage from './component/LocalStorage'


function App() {
  const [notes,setNotes] = useLocalStorage('note',[{
    id: nanoid(),
    judul:"halooo",
    isi:"halpo",
    tanggal:"26/14/21"
  }]);
  
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
          <NewNote handleAddNote={addNote}/>
        </div>
        <div className="notes-app">
          <Notes 
            notes={notes}
            handleDeleteNote={deleteNote}
          />
        </div>
        <div className="bg"></div>
      </div>
  );
}

export default App;
