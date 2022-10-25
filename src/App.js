import './App.css';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
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
    <CreditCard
  type="Visa"
  number="0123456789018845"
  expirationMonth={3}
  expirationYear={2021}
  bank="BNP"
  owner="Maxence Bouret"
  bgColor="#11aa99"
  color="white" 
/>
    
<CreditCard
  type="Master Card"
  number="0123456789010995"
  expirationMonth={3}
  expirationYear={2021}
  bank="N26"
  owner="Maxence Bouret"
  bgColor="#eeeeee"
  color="#222222"
/>
    
<CreditCard
  type="Visa"
  number="0123456789016984"
  expirationMonth={12}
  expirationYear={2019}
  bank="Name of the Bank"
  owner="Firstname Lastname"
  bgColor="#ddbb55"
  color="white" 
/>
    </div>
  );
}

export default App;
