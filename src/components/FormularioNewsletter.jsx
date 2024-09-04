import React, {useState} from 'react';


const FormularioNewsletter = ({agregarSuscriptor}) =>{
    const [correo, setCorreo] = useState('');

    const manejarEnvio = (e) => {
        e.preventDefault();
        if (correo){
            agregarSuscriptor(correo);
            setCorreo('');//Limpiar el campo una vez agregado
        }
    }

    return(
        <form onSubmit={manejarEnvio}>

            <input
            type="email"
            placeholder="Correo electrónico"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            />
            <button type='submit'>Suscribirse</button>
        </form>
    )

};

export default FormularioNewsletter;