import React, {useContext} from 'react'
import { alertPopupContext } from '../../contexts/alertPopupContext';
import { currentFolderContext } from '../../contexts/currentFolderContext';
import { renderContext } from '../../contexts/renderContext';
import ('./CreateFolderPopup.css')


export default function CreateFolderPopup({setMe}) {
    
    const [currentFolder, setCurrentFolder] = useContext(currentFolderContext)
    const [newRender, setNewRender] = useContext(renderContext)
    const [message, setMessage] = useContext(alertPopupContext)


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
            setMessage(data)
            else {setNewRender(newRender+1)}
        });
        
        setMe('')
    }
        

  return (
    <div className='fpopup'>
        <div className='popup-container'>
        
        <form onSubmit={onSubmit} className='popup-innerContainer' >

            <label htmlFor='folder'>Folder name: </label>
            <input name='folder' placeholder="New Folder" pattern='^[^.]*$' />

            <div className='popupButtonFlex'>
            <button onClick={()=>setMe('') }>Cancel</button>
            <button type='submit'>Create Folder</button>
            </div>

        </form>
        
        </div>
    </div>
  )
}
