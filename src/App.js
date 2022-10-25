import './App.css';
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
    </div>
  );
}

export default App;
