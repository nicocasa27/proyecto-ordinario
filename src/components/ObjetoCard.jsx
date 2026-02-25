import React from 'react';

function ObjetoCard({ objeto }) {
    return (
        <div className="card">
            <h3>{objeto.nombre}</h3>
            <p className="ubicacion-texto">📍 <strong>{objeto.ubicacion}</strong></p>
            <p className="descripcion">{objeto.descripcion}</p>
        </div>
    );
}

export default ObjetoCard;
