import React, { useContext } from 'react'
import { fileContentContext } from '../contexts/fileContent'

export default function FilePage() {

    const [fileContent, setFileContent] = useContext(fileContentContext)

  return (
    <div>
        {fileContent}
    </div>
  )
}
