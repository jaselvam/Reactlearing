import logo from './logo.svg';
import './App.css';
import Fruits from './Components/Fruits';
import Indexlab3 from './Components/Indexlab3';
import Classcompo from './Components/Classcompo';
import Functionalcompo from './Components/Functionalcompo';
import ErrBoundary from './Components/ErrBoundary';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  return (
    <div>
      Hello world!
      <div >
        
        {/*address<textarea min='0' max='8' placeholder='enter address with pincode'></textarea><br/>
        description <textarea placeholder='enter description'></textarea>
        <hr/>
        <Fruits/>
        <hr/>
        <Indexlab3/>
        <hr/>
        <Classcompo/>
        <Functionalcompo/>
        <Login/>*/}
        <Register/>
      </div>
    </div>
  );
}

export default App;
