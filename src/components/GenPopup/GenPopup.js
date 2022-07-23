import React from 'react'

export default function GenPopup({ message, setMe }) {

  return (
    <div className='fpopup' >
        <div className='popup-container'>
        <div className='popup-innerContainer' >
          
            <p><b>{message}</b></p>
            <button onClick={()=>setMe('') }>OK</button>
        
        </div>
        </div>
    </div>
  )
}
