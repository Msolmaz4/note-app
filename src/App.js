
import { useState } from 'react';
import './App.css';
import NotList from './components/NotList';
import {nanoid} from 'nanoid'


function App() {


  const [notes ,setNotes]= useState([
    {
      id:nanoid(),
      text:'erste schreibe ich',
      datum:'12/2/22'
    },
    {
      id:nanoid(),
      text:'Zweite schreibe ich',
      datum:'01/2/22'
    },
    {
      id:nanoid(),
      text:'Zum schreibe ich',
      datum:'10/2/21'
    },
    {
      id:nanoid(),
      text:'ich m;chte  schreiben',
      datum:'10/2/22'
    }

  ])

  
const addNote = (text)=>{
   const datum =new Date();
  const newNote = {
    id:nanoid(),
    text:text,
    datum: datum.toLocaleDateString()

  }
 const newNotes= [...notes,newNote]
 setNotes(newNotes)

}
 

  return (
    <div className="container">
      <NotList
      notes ={notes}
      addNote= {addNote}
      />
    


    </div>
  );
}

export default App;
