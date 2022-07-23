import React, {useRef, useEffect, useContext} from 'react'
import { alertPopupContext } from '../../contexts/alertPopupContext'
import { currentFolderContext } from '../../contexts/currentFolderContext'
import { renderContext } from '../../contexts/renderContext'
import './CreateFile.css'

export default function CreateFile({setState}) {    //bug when cancelled

    const fileTypes = ['txt', 'js', 'css', 'json', 'doc', 'docx', 'xls', 'wav', 'psd', 
        'png', 'jpg', 'jpge', 'mp3', 'mp4', 'php', 'pdf', 'gif']
    const inputRef = useRef()
    const [newRender, setNewRender] = useContext(renderContext)
    const [currentFolder, setCurrentFolder] = useContext(currentFolderContext)
    const [message, setMessage] = useContext(alertPopupContext)

    useEffect(() =>{
        inputRef.current.click();
    },[])

    const validFileType=(fileName) =>{

        const ftype = fileName.slice(fileName.lastIndexOf('.')+1);
        return (fileTypes.filter(v=>v==ftype))

    }
    
    const validations = (files)=>{
        
        return (!files[0])? 
             setMessage("no file"):

             (files[0].size >1500000)? 
             setMessage("File size must be under 1.5Mb"):

             (!validFileType(files[0].name))?        
             setMessage(`only allows file types of :
              txt js css json doc docx xls wav psd 
              png jpg jpge mp3 mp4 php pdf gif
             `):

             true;
    }
    
    const onOpen =() => {
        let files =   inputRef.current.files;
        console.log(files[0]);
        
        if(validations(files))  {
            
            const formData = new FormData();
             formData.append("file", files[0]);
             formData.append("myPath", currentFolder);
             
             
             fetch("http://localhost:3004/files/addFile", {
                 method: "POST",
                 body: formData,
                 headers: {enctype : 'multipart/form-data'}
             })
            //  .then((res) => res.json())
             .then(() => setNewRender(newRender+1))
            //  setMessage(JSON.stringify(`${res.message}, status: ${res.status}`));
        }
             setState('')
    };


  return (
    <>
        <input type="file" className="createfile" name="createfile" ref={inputRef} onChange={onOpen}/>
    </>
  )
}




