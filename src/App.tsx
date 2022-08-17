import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Main from "./components/Main";
import PhotoComponent from "./components/photo/PhotoComponent";
import PhotosComponent from "./components/PhotosComponent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/photos/:areaName" element={<PhotosComponent />} />
    </Routes>
  );
}

export default App;
