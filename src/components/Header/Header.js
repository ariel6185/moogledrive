import React, {useContext, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { currentFolderContext } from '../../contexts/currentFolderContext'

export default function Header() {

    const [currentFolder, setCurrentFolder] = useContext(currentFolderContext),
          [arrayOfcurrentFolder, setArrayOfcurrentFolder] = useState([])

        useEffect(()=>{
            
             let tmpArray = []
            for (let i in currentFolder){
                if(currentFolder[i]==="/")
               tmpArray.push(currentFolder.slice( 0, i ))
            }
            tmpArray.push(currentFolder);
            setArrayOfcurrentFolder(tmpArray)
          
        },[ currentFolder])


  return (
    <header>My storage: /
        {arrayOfcurrentFolder?.map((v,i)=>{
            return (
              <HeaderLink key={i} >
                <div className="headerlink" onClick={()=>setCurrentFolder(v)}>
                  {v.includes("/")?v.slice(v.lastIndexOf("/")):v}
                </div>
              </HeaderLink>
            )})
        ||"root"} 
    </header>
  )
}

function HeaderLink(props){
    return <> {props.children} </>
}