import React, { useState } from 'react';

function BuscadorObjetos({ items }) {
    const [busqueda, setBusqueda] = useState('');
    const [resultado, setResultado] = useState(null);

    const buscar = () => {
        const objetoEncontrado = items.find(
            item => item.nombre.toLowerCase().includes(busqueda.toLowerCase())
        );

        if (objetoEncontrado && busqueda !== '') {
            setResultado(`¡Localizado! El/la "${objetoEncontrado.nombre}" se encuentra en: ${objetoEncontrado.ubicacion}`);
        } else {
            setResultado('Lo sentimos, aún no tenemos reporte de ese objeto en el campus.');
        }
    };

    return (
        <section id="buscar" className="seccion-busqueda">
            <div className="buscador-contenedor">
                <h2>¿Qué se te perdió?</h2>
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Escribe un objeto (ej: llaves, credencial...)"
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                    />
                    <button onClick={buscar}>Buscar en el campus</button>
                </div>
                {resultado && <p className="resultado-busqueda">{resultado}</p>}
            </div>
        </section>
    );
}

export default BuscadorObjetos;
