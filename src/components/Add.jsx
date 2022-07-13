import { useState } from "react"


const Add = ({addNote})=>{

  const [newtext,setNewtext] = useState('')
  const carackterLimit = 200

  const handleclick =(e)=>{
    if(carackterLimit -e.target.value.length >= 0){
      setNewtext(e.target.value)
    }
   
  }
  const handleSave = () => {

    if(newtext.trim().length>0)
    {
      addNote(newtext)
      setNewtext('')
    }

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
                <small> {carackterLimit - newtext.length} karakter</small>
                <button
                onClick={handleSave}
                 className="save">Save</button>
            </div>
             
        </div>
    )
}
export default Add