import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fake from "../../pages/Fake";
import FolderPage from "../../pages/FolderPage/FolderPage";
// import './Main.css'

export default function Main() {
    return (
        <main>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<FolderPage />} />
                    <Route path="/home" element={<FolderPage />} />
                    <Route path="/fake" element={<Fake />} />
                </Routes>
            </BrowserRouter>
        </main>
    );
}
