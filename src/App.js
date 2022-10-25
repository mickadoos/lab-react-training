import './App.css';
import BoxColor from './components/BoxColor';
import Greetings from './components/Greetings';
import IdList from './components/IdList';
import Random from './components/Random';

function App() {

  return (
    <div className="App">
    <IdList />
    <Greetings lang="de">Ludwig</Greetings>
    <Greetings lang="fr">Amelie</Greetings>
    <Random min={1} max={6}/>
    <Random min={1} max={100}/>
    <BoxColor r={255} g={0} b={0}/>
    <BoxColor r={255} g={0} b={0}/>
    </div>
  );
}

export default App;
