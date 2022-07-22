import React, {useState} from 'react'
import CreateFolderPopup from '../CreateFolderPopup/CreateFolderPopup'
import EditPopup from '../EditPopup/EditPopup'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Nav from '../Nav/Nav'
import './Layout.css'
import { createFolderPopupContext } from '../../contexts/createFolderPopupContext'
import { currentFolderContext } from '../../contexts/currentFolderContext'
import { renderContext } from '../../contexts/renderContext'

export default function Layout() {

  const [isFolderPopup, setisFolderPopup] = useState()
  const [currentFolder, setCurrentFolder] = useState("root")
  const newRender = useState(0)

  return (
    <>
    <currentFolderContext.Provider value={[currentFolder, setCurrentFolder]}>
    <createFolderPopupContext.Provider value={setisFolderPopup}>
    <renderContext.Provider value={newRender} >


    <Header />
    <div className="layout">
    <Main />
    <Nav />
    </div>

    {isFolderPopup && <CreateFolderPopup setMe={setisFolderPopup} />}

    <EditPopup />
    
    </renderContext.Provider>
    </createFolderPopupContext.Provider>
    </currentFolderContext.Provider>
   
    </>
  )
}
