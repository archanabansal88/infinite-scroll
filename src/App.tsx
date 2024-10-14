import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ImageGallery from "./components/image-gallery";
import Navbar from "./navbar/navbar";
import ToDoList from "./components/todo-list";
import Home from "./components/home";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/images" element={<ImageGallery />}></Route>
          <Route path="/todo-lists" element={<ToDoList />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
