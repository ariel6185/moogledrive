import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fake from "../../pages/Fake";
import FolderPage from "../../pages/FolderPage/FolderPage";

export default function Main() {
    return (
        <main>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<FolderPage />} />
                    <Route path="/my-storage" element={<FolderPage />} />
                </Routes>
            </BrowserRouter>
        </main>
    );
}
