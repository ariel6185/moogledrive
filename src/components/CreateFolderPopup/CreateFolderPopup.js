import React, {useContext} from 'react'
import { currentFolderContext } from '../../contexts/currentFolderContext';
import { renderContext } from '../../contexts/renderContext';


export default function CreateFolderPopup({setMe}) {
    
    const [currentFolder, setCurrentFolder] = useContext(currentFolderContext)
    const [newRender, setNewRender] = useContext(renderContext)

    const onSubmit = (e) => {

        e.preventDefault();
        const folderName = currentFolder+'/'+ e.target.folder.value

        fetch("http://localhost:3004/files/addFolder",{
            method: "POST",
            body: JSON.stringify({folderName : folderName}),
            headers: { "Content-Type": "application/json" }
        })
        .then((res) =>res.text())
        .then((data) =>{
            if (data==="Folder already exist" )  ///fix res.status
            alert(data)
            else {setNewRender(newRender+1)}
        });
        
        setMe('')
    }

  return (
    <div className='fpopup'>
        <form onSubmit={onSubmit}>
            <label htmlFor='folder'>Folder name: </label>
            <input name='folder' placeholder="New Folder" pattern='^[^.]*$' />
            <button>Create Folder</button>
        </form>
    </div>
  )
}
