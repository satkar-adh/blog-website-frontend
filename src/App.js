import './App.css';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Body from './components/Body';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Body />
    </div>
  );
}

export default App;
