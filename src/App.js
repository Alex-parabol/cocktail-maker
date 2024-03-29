import React from 'react';
import Header from './components/Header'
import Form from './components/Form'
import ListaRecetas from './components/ListaRecetas';
import CategoriasProvider from './context/CategoriasContext';
import RecetasProvider from './context/RecetasContext';
import ModalProvider from './context/ModalContext';

function App() {


  return (
    <ModalProvider>
      <CategoriasProvider>
        <RecetasProvider>
          <Header />
          <div className="container mt-5">
            <div className="row">
              <Form/>
            </div>
            <ListaRecetas />
          </div>
          </RecetasProvider>
      </CategoriasProvider>
    </ModalProvider>
  );
}

export default App;
