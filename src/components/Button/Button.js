import React from 'react'
import { useContext, useState } from 'react'
import { createFolderPopupContext } from '../../contexts/createFolderPopupContext'
// import {useDropzone} from 'react-dropzone';
import CreateFile from '../CreateFile';


export default function Button({txt}) {

    const setisFolderPopup = useContext(createFolderPopupContext)
    
    const [x,setX]=useState('')
    // const {open} = useDropzone()
    function importD() {
        const input = document.createElement('input');
        input.type = 'file';
        input.onchange = _this => {
                  let files =   Array.from(input.files);
                  console.log(files);
              };
        input.click();
      }

    const clicked =()=>{
        
        if(txt === "Add new Folder" ) setisFolderPopup(true)
        if (txt === "Add new File") setX(true)
    }
    
    return (
        <div>
        {x&&<CreateFile setState={setX}/>}
        <button onClick={clicked} >{txt}</button>
    </div>
  )
}
