import React, { useContext} from 'react'
import { currentFolderContext } from '../../contexts/currentFolderContext'
import TypeImage from '../TypeImage'

export default function FileCard({data, type}) {

    const [currentFolder, setCurrentFolder] = useContext(currentFolderContext)

    const ftype = type==="Folders" ? "folder" :
    data.slice(data.lastIndexOf('.')+1);

    const fileName = type==="Folders" ? data :
    data.slice(0,data.lastIndexOf('.'));
    
    const onClick = () => {
        if (type ==="Folders") setCurrentFolder(currentFolder+"/"+data)   //bug when overclicking
        // else                                                           ////////

    }
  return (
    <div className='filecard' onDoubleClick={onClick}>
        <div> {fileName} </div>
        <div><TypeImage type={ftype} /></div>
    </div>
  )
}
