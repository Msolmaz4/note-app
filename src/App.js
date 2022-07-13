
import { useState } from 'react';
import './App.css';
import NotList from './components/NotList';
import {nanoid} from 'nanoid'
import Search from './components/Search';
import Header from './components/Header'


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


const [search,setSearch] = useState('')

  
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


const deleteNotes = (id) => {

   const newNo = notes.filter((note)=> note.id !== id)
   setNotes(newNo)
}
 

  return (
    <div className="container">
      <Header/>
      <Search handleSearch={setSearch}  />
      <NotList
      notes ={notes.filter((note)=>
        note.text.toLowerCase().includes(search)
        )}
      addNote= {addNote}
      deleteNotes= {deleteNotes}

      />
    


    </div>
  );
}

export default App;
