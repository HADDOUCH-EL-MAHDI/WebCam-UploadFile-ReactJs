
import AjouterDocument from './AjouterDocument';
import { BrowserRouter,Routes , Route} from 'react-router-dom';
import Webcamera from './Webcamera';
import './App.css';
import UploadFile from './UploadFile';
import DossierVertStructure from './DossierVertStructure';
// import { BrowserRouter as Router, useLocation, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<AjouterDocument/>} />
          <Route path="/Webcamera" element={<Webcamera />} />
          <Route path="/UploadFile" element={<UploadFile />} />
        </Routes>
      </BrowserRouter>

    {/* <Router>
      <DossierVertStructure />
    </Router> */}
    </div>
  );
}

export default App;
