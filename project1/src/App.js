import logo from './logo.svg';
import './App.css';
import BoxMaster from './Components/BoxMaster';
import BoxMaster2 from './Components/BoxMaster2';
import BoxMaster3 from './Components/BoxMaster3';

function App() {
  return (
    <div className="App">
     <BoxMaster/>
     <h1>Plan B</h1>
     <BoxMaster2/>
     <h1>Plan C -Best Plan</h1>
    <BoxMaster3/>
    </div>
  );
}

export default App;
