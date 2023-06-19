import './App.css';
import {Route, Routes} from "react-router-dom";
import PostPage from "./pages/PostPage";
import EditPage from "./pages/EditPage";
import DeletePage from "./pages/DeletePage";
import CreatePage from "./pages/CreatePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<PostPage/>}/>
        <Route path='delete' element={<DeletePage/>}/>
        <Route path='edit' element={<EditPage/>}/>
        <Route path='create' element={<CreatePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
