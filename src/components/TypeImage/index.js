import React from 'react'
import {AiFillFolderOpen} from 'react-icons/ai'
import {GrDocumentTxt} from 'react-icons/gr'
import {VscJson} from 'react-icons/vsc'


export default function TypeImage({type}) {


  // const fileTypes = ['folder', 'txt', 'js', 'css', 'json', 'doc', 'docx', 'xls', 'wav', 'psd', 
  //       'png', 'jpg', 'jpge', 'mp3', 'mp4', 'php', 'pdf', 'gif']

  return (
    <>
    {type==="folder" && <AiFillFolderOpen />}
    {type==="txt" && <GrDocumentTxt />}
    {type==="json" && <VscJson />}
    {type==="png" && <img src={require('../../images/png.png')} alt="png" width="20px"  />}
    </>
  )
}
