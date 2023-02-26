import './App.scss';
import Header from './components/layout/header/Header';
import Navbar from './components/layout/navbar/NavBar';
import Tools from './components/layout/tools/Tools';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Tools />
      <div className="section">
        <Header />
      </div>
    </div>
  );
}

export default App;
