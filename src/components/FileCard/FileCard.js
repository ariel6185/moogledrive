import React, { useContext, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { debounce } from "lodash";
import { currentFolderContext } from '../../contexts/currentFolderContext'
import { fileContentContext } from '../../contexts/fileContent'
import { renderContext } from '../../contexts/renderContext'
import EditPopup from '../EditPopup/EditPopup'
import TypeImage from '../TypeImage'

export default function FileCard({data, type}) {

    const [currentFolder, setCurrentFolder] = useContext(currentFolderContext),
          [fileContent, setFileContent] = useContext(fileContentContext),
          [newRender, setNewRender] = useContext(renderContext),
          [openEditMenu, setOpenEditMenu] = useState(""),
          [clickFlag, setClickFlag] = useState(false),
          [editName, setEditName] = useState(false),
          // enterToInput = useRef(),
          navigate= useNavigate(),
          [showLongName, setShowLongName] = useState(false);

          
          const ftype = type==="Folders" ? "folder" :
    data.slice(data.lastIndexOf('.')+1);

    const fileName = type==="Folders" ? data :
    data.slice(0,data.lastIndexOf('.'));
    
    const openFile = (filePath) => {
      console.log(filePath);
      
      fetch("http://localhost:3004/files/file",{
        method: "PUT",
        body:JSON.stringify({"myPath": filePath}),
        headers: { "Content-Type": "application/json" }
      })
      .then( response => response.text()
      // const isJson = response.headers.get('content-type')?.includes('application/json');
      // isJson? response.json() : response.text();
        // // const data = isJson && await response.json();
        // if (!response.ok) {
          //     const error = (data && data.message) || response.status;
          //     return Promise.reject(error);
          // }
      )
      .then(data =>{
        console.log(data); 
        setFileContent(data)
        navigate(`/${currentFolder}`)} )
    }
    
    const onDoubleClick = () => {
      whaitForDoubleClick.cancel();
      if (type ==="Folders") setCurrentFolder(currentFolder+"/"+data)
        else openFile(currentFolder+"/"+data)       
      }
    
    const onRightClick=(e)=>{
        e.preventDefault();
        console.log(data);
        if (type ==="Files") setOpenEditMenu(true)
      }

      const onClick=(e)=>{
        if(clickFlag) whaitForDoubleClick()
          else setClickFlag(true)
        },
        whaitForDoubleClick= debounce(()=>{
        setEditName(true)
        setClickFlag(false)

      },500);

      const exitEdite=()=>{
      
        setEditName(false);
        setClickFlag(false)
      }

      const mouseEnter= ()=>{
        fileName.length>10 && enterLong();
      },

      enterLong = debounce(()=>setShowLongName(true),500),

      mouseLeave = ()=>{
        enterLong.cancel()
        setShowLongName(false)
      };
      
      const changeFilename = (newName) => {

        const newNamePath = ftype==="folder"? 
        currentFolder+"/"+newName
        :currentFolder+"/"+newName+'.'+ftype

      fetch("http://localhost:3004/files/rename-file",{
        method: "PUT",
        body:JSON.stringify({
          "fileName": currentFolder+"/"+data,
          "newName": newNamePath}),
        headers: { "Content-Type": "application/json" }
      })
      .then( response => response.text())
      setEditName(false)
      setNewRender(newRender+1)
    }

    return (
    <>
    <div className='filecard' onDoubleClick={onDoubleClick} onContextMenu={onRightClick}>

      { editName?
          <input 
          onKeyDown={(e)=>{e.key==="Enter" && changeFilename(e.target.value)}} 
          defaultValue={fileName} 
          autoFocus 
          />
          
          : <div className='filename'  >
            { showLongName ? 
                <ShowLongName> 
                  <div className="longName" 
                    onMouseLeave={mouseLeave} 
                    onClick={()=>setEditName(true)} 
                  >{fileName}
                  </div> 
                </ShowLongName>
              : <div 
                  className={clickFlag?"selection":"filename-text"} 
                  onClick={(e)=>onClick(e)} 
                  onMouseEnter={mouseEnter} 
                >
                  {fileName} 
                </div>
            }
          </div>
      } 
      <div><TypeImage type={ftype} /></div>
      

    </div>

    
    {openEditMenu && <EditPopup setMe={setOpenEditMenu} data={currentFolder+"/"+data} /> }

    {(editName || clickFlag) &&  <div className='input-overlay' onClick={exitEdite}></div>}
    </>
  )
}


function ShowLongName(props){
  return<>{props.children}</>
}