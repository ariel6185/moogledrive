import React, { useEffect, useContext, useState } from 'react'
import FileContainer from '../../components/FileContainer'
import { currentFolderContext } from '../../contexts/currentFolderContext'
import { renderContext } from '../../contexts/renderContext'
import './page.css'

export default function FolderPage() {

    const [currentFolder, setCurrentFolder] = useContext(currentFolderContext)
    const [newRender, setNewRender] = useContext(renderContext)
    const [data, setData] = useState()
    const [files , setFiles] = useState(null)
    const [folders , setFolders] = useState(null)

    useEffect(()=>{

        console.log(currentFolder);
        fetch("http://localhost:3004/files",{
            method: "PUT",
            body: JSON.stringify({folderName: currentFolder}),
            headers: { "Content-Type": "application/json" }
        })
        .then((res) => res.json())
        .then((res) =>{setData(res); console.log(res)})

    },[ currentFolder, newRender ])

    useEffect(() =>{
        
        let folders =[],
            files = []; 
        data?.map(v=>{
            if(v.includes('.'))files.push(v)
            else folders.push(v)
        })
        // folders.length>0 && 
        setFolders(folders)
        // files.length>0 && 
        setFiles(files)

    },[data])
    

  return (
    <>
        {folders && <FileContainer type="Folders" data={folders} /> }
        {files && <FileContainer type="Files" data={files} /> }
    </>
  )
}
