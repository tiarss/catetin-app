import {MdDeleteForever} from 'react-icons/md'
import React from 'react'
import './Note.css'

const Note = ({judul,isi,tanggal,id,handleDeleteNote})=>{
    return(
            <div className="note">
                <div className="header-note">
                    <h2>{judul}</h2>
                    <p>{isi}</p>
                </div>
                <div className="footer-note">
                <small>{tanggal}</small>
                <MdDeleteForever 
                    className="delete-icon" 
                    size="1.3em" 
                    color="rgb(50, 50, 255)"
                    onClick={()=> handleDeleteNote(id)}/>
                </div>
            </div>
    );
}

export default Note