import './App.css';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import AddPage from './crudPages/AddPage';
import EditPage from './crudPages/EditPage';
import EditElement from './crudPages/EditElement'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element= {< Intro />} />
          <Route path="/add" element={< AddPage />} />
          <Route path="/edit" element={< EditPage />} />
          <Route path="/editElement/:id" element={< EditElement />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
