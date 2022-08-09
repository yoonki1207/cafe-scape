import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Main from "./components/Main";
import PhotosCompoenent from "./components/PhotosComponent";

function App() {
  return (
    <Routes>
      <Route path='/*' element={<Main/>}/>
    </Routes>
  );
}

export default App;
