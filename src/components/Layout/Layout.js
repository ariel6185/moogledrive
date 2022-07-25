import React, {useState} from 'react'
import EditPopup from '../EditPopup/EditPopup'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Nav from '../Nav/Nav'
import './Layout.css'
import { alertPopupContext } from '../../contexts/alertPopupContext'
import { currentFolderContext } from '../../contexts/currentFolderContext'
import { renderContext } from '../../contexts/renderContext'
import CornerCss from '../CornerCss/CornerCss'
import GenPopup from '../GenPopup/GenPopup'

export default function Layout() {

  const [isAlertPopup, setisAlertPopup] = useState('')
  const [currentFolder, setCurrentFolder] = useState("root")
  const newRender = useState(0)

  return (
    <>
    <currentFolderContext.Provider value={[currentFolder, setCurrentFolder]}>
    <alertPopupContext.Provider value={[isAlertPopup, setisAlertPopup]}>
    <renderContext.Provider value={newRender} >

    <Header />

    <div className="layout">
    <Main path={currentFolder} />
    <Nav />
    </div>

    {isAlertPopup && <GenPopup message={isAlertPopup} setMe={setisAlertPopup} />}
    {/* <EditPopup /> */}
    <CornerCss />
    
    </renderContext.Provider>
    </alertPopupContext.Provider>
    </currentFolderContext.Provider>
   
    </>
  )
}
