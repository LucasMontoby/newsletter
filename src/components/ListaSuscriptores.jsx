
const ListaSuscriptores = ({suscriptores}) =>{

    const listaSuscriptores = Array.isArray(suscriptores) ? suscriptores : [];
    return(
        <div>
            <h2>Suscriptores</h2>
                <ul>
                    {listaSuscriptores.map((correo, index  ) => (
                        <li key={index}>{correo}</li>
                        ))}
                </ul>
        </div>
    )
}

export default ListaSuscriptores;