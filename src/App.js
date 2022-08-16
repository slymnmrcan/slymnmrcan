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

function App() {
  return (
    <div>
      <BrowserRouter>
            <Routes>
                <Route path="/Add" element={<Add />}></Route>
                <Route path="/" element={<Main />}></Route>
                <Route path="/Update" element={<Update />}></Route>
            </Routes>
      </BrowserRouter>
      <Footer />
      
    </div>
  );
}

export default App;
