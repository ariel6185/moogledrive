import React from 'react'
import { useState } from 'react'
import CreateFile from '../CreateFile';
import CreateFolderPopup from '../CreateFolderPopup/CreateFolderPopup';


export default function Button({txt}) {
    
    const [x,setX]=useState('')

    const clicked =()=>{
        
        if(txt === "Add new Folder" ) setX("folder")
        if (txt === "Add new File") setX("file")
    }
    
    return (
        <>

        { x==="file" && <CreateFile setState={setX}/>}
        { x==="folder" && <CreateFolderPopup setMe={setX} />}

        <button onClick={clicked} >{txt}</button>
    </>
  )
}
