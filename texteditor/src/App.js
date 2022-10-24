import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
    <Navbar title="Harsh"/>
    <Alert alert="Empty fields!"/>
    <Textform/>
    </>
  );
}

export default App;
