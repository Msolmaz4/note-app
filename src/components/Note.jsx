import {MdDeleteForever} from 'react-icons/md'

const Note =({id,text,datum,deleteNotes})=>{
    return(
        <div className="note">
            <span> {text} </span>
            <div className="note-dri">
                <small> {datum} </small>
                <MdDeleteForever onClick={()=>deleteNotes(id)} className='delete'  size='1.3rem'/>

            </div>
            
        </div>
    )
}
export default Note