import logo from './logo.svg';
import './App.css';
import Navbar from './navbar/Navbar';
import HomeScreen from './home-screen/HomeScreen';


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 to-neutral-800">
      <Navbar />
      <HomeScreen />
    </div>
  );
}

export default App;
