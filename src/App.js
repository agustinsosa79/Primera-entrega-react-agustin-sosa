import './App.css';
import ItemListConatier from './components/ItemListContainer/ItemListConatier';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListConatier greeting={'Productos'}/>
    </div>

  );
}

export default App;
