import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListConatiner';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
      <div className="App">
        <NavBar />
        <ItemListContainer greeting={"Productos"} />
        <ItemDetailContainer />
      </div>
  );
}

export default App;