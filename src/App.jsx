import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ObjetoGrid from './components/ObjetoGrid';
import BuscadorObjetos from './components/BuscadorObjetos';
import ReportarObjeto from './components/ReportarObjeto';
import QuienesSomos from './components/QuienesSomos';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/objetos.json')
      .then(res => res.json())
      .then(data => {
        setItems(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error cargando objetos:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <Header />

      <main className="container">
        <BuscadorObjetos items={items} />

        <div id="quienes-somos" className="divisor"></div>
        <QuienesSomos />

        <div id="objetos" className="divisor"></div>

        <h2 className="titulo-seccion">Objetos reportados recientemente</h2>
        <ObjetoGrid items={items} isLoading={isLoading} />

        <div className="divisor"></div>

        <ReportarObjeto />
      </main>

      <footer className="footer-bottom">
        <p>Centro de Pérdidas Universitarias — Proyecto académico</p>
      </footer>
    </div>
  );
}

export default App;
