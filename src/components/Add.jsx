import { useState } from "react"


const Add = ({addNote})=>{

  const [newtext,setNewtext] = useState('')

  const handleclick =(e)=>{
    setNewtext(e.target.value)
  }
  const handleSave = () => {
addNote(newtext)
  }

    return(
        <div className="note new">
            <textarea name="" 
            id="" 
            cols="30" 
            rows="10" 
            placeholder=" k;nnen Sie neu task eingeben"
            value={newtext}
            onChange={handleclick}
            ></textarea>
            <div className="note-dri">
                <small>200 karakter</small>
                <button
                onClick={handleSave}
                 className="save">Save</button>
            </div>
             
        </div>
    )
}
export default Add