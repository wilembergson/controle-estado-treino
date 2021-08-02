import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './template/Custom.css'
import './App.css';
import Routes from './Routes';
import Menu from './template/Menu';

function App() {
  return (
    <div className="container">
      <Menu/>
      <Routes/>
    </div>
  );
}

export default App;
