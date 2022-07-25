import React, { useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilePage from "../../pages/FilePage";
import FolderPage from "../../pages/FolderPage/FolderPage";
import { fileContentContext } from "../../contexts/fileContent";

export default function Main({path}) {

    const  [fileContent, setFileContent] = useState('')

    return (<>
        <fileContentContext.Provider value={[fileContent, setFileContent]} >

        <main>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<FolderPage />} />
                    <Route path="/my-storage" element={<FolderPage />} />
                    <Route path={'/'+path} element={<FilePage />} />
                </Routes>
            </BrowserRouter>
        </main>
        </fileContentContext.Provider>
    </>
    );
}
