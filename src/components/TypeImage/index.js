import React from 'react'

export default function TypeImage({type}) {


  // const fileTypes = ['folder', 'txt', 'js', 'css', 'json', 'doc', 'docx', 'xls', 'wav', 'psd', 
  //       'png', 'jpg', 'jpge', 'mp3', 'mp4', 'php', 'pdf', 'gif']

  return (
    <>
    <img src={type} alt={type} id="TypeImage" />
    </>
  )
}
