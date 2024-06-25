import './App.scss';
import {Home, AddNote, EditNote, Notes, SingleNotePage} from "./pages/index";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Home/>}> 
            <Route path = "/home" element = {<Notes />}/>
            <Route path = "/add" element = {<AddNote />}/>
            <Route path = "/edit/:id" element = {<EditNote />}/>
            <Route path = "/note/:id" element = {<SingleNotePage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
