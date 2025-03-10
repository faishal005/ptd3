import React from 'react'
import { useSelector } from 'react-redux';
import "./SingleNotePage.scss";
import {getAllNotes} from '../../features/notes/noteSlice';
import { useParams } from 'react-router';

const SingleNotePage = () => {
    const {id} = useParams ();
    const notes = useSelector(getAllNotes);
    let tempNote = notes.filter(note => note.noteId == id);

  return (
    <section className='note-single-section'>
        <div className='note-single-title'>
            <h2 className='my-2 fs-16 '> {tempNote[0].noteTitle}</h2>
        </div>
        <div className='py-2'>
            <p>{tempNote[0].noteContent}</p>
        </div>
    </section>
  )
}

export default SingleNotePage
