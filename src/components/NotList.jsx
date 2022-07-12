import Add from './Add'
import Note from './Note'

const NotList =({notes ,addNote})=>{
    return(
        <div className='note-list'>
            {notes.map((note)=>(
                <Note
                id={note.id}
                text={note.text}
                datum={note.datum}



                
                />
            ))}
            <Add addNote={addNote}/>
        </div>
    )
}

export default NotList