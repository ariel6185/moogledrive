import React, { useContext } from 'react'
import { renderContext } from '../../contexts/renderContext'
import { alertPopupContext } from '../../contexts/alertPopupContext'

export default function EditPopup({setMe, data}) {

  const [newRender, setNewRender] = useContext(renderContext)
  const [message, setMessage] = useContext(alertPopupContext)

  const deleteFile=()=>{
    fetch("http://localhost:3004/files/file",{
    method: "DELETE",
      body: JSON.stringify({ filename : data }),
      headers: { "Content-Type": "application/json" }
    })
    .then(response=>{
      console.log(response)
      response.ok ?
      setNewRender(newRender+1) :
      response.text()
    })
    .then(response=>{response && setMessage(response)})
    setMe('')
  }

  return (
    <div className='fpopup' >
    <div className='popup-container'>
    <div className='popup-innerContainer' >
      
        <button onClick={deleteFile}>Delete</button>
        <button onClick={()=>setMe('') }>Close</button>
    
    </div>
    </div>
    </div>
  )
}
