import React from 'react'
import FileCard from '../FileCard/FileCard'

export default function FileContainer({type, data}) {

  
  return (
    <div>
        <div className="containerh">{type}</div>
        <div className={type==='Folders' ? 'Folderinnerc' : 'Fileinnerc'}>
            {data.map(v=><FileCard key={v} data={v} type={type} />)} 
        </div>
    </div>
  )
}
