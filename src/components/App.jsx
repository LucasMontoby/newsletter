import React, {useState, useEffect} from 'react';

import FormularioNewsletter from './FormularioNewsletter';
import ListaSuscriptores from './ListaSuscriptores';

const App = () => {
  const [suscriptores, setSuscriptores] = useState([]);

  useEffect(() => {
    const suscriptoresGuardados = JSON.parse(localStorage.getItem('suscriptores')) || [];
    setSuscriptores(suscriptoresGuardados)
  }, []);

  const agregarSuscriptor = (correo) => {
    const nuevoSuscriptor = [...suscriptores, correo];
    setSuscriptores(nuevoSuscriptor);
    localStorage.setItem('suscriptores', JSON.stringify(nuevoSuscriptor));
  }

  return(
    <div className="container">
      <h1>Suscripción a la Newsletter</h1>
      <FormularioNewsletter agregarSuscriptor={agregarSuscriptor} />
      <ListaSuscriptores suscriptores={suscriptores} />
    </div>
  )
}

export default App;
