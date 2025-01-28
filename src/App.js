import logo from './logo.svg';
import './App.css';
import Navbar from './navbar/Navbar';
import HomeScreen from './home-screen/HomeScreen';


function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HomeScreen />
    </div>
  );
}

export default App;
