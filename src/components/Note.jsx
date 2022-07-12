import {MdDeleteForever} from 'react-icons/md'

const Note =({id,text,datum})=>{
    return(
        <div className="note">
            <span> {text} </span>
            <div className="note-dri">
                <small> {datum} </small>
                <MdDeleteForever className='delete'  size='1.3rem'/>

            </div>
            
        </div>
    )
}
export default Note