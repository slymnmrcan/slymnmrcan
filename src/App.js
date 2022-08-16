import Main from "./components/main";
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from "./components/add"
import Footer from "./components/footer"
import {
  BrowserRouter,
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Update from "./components/update";
import {useState} from 'react'

function App() {
  const [bank, setBank] = useState()
  return (
    <div>
      <BrowserRouter>
            <Routes>
                <Route path="/Add" element={<Add />}></Route>
                <Route bank={bank} path="/" element={<Main />}></Route>
                <Route path="/Update" element={<Update />}></Route>
            </Routes>
      </BrowserRouter>
      <Footer />
      
    </div>
  );
}

export default App;
