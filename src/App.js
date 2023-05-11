import logo from './logo.svg';
import './App.css';
{/*Importing all the components from their respective files*/}
import ProfilePhoto from './Component/Profile/ProfilePhoto.js';
import Address from './Component/Profile/Address.js';
import FullName from './Component/Profile/FullName.js';

function App() {
  return (
    
    <div className="App">
      <!--Using the created components-->
      <ProfilePhoto />
      <FullName />
      <Address />
    </div>
  );
}

export default App;
