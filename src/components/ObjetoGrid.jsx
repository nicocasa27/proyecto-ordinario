import React from 'react';
import ObjetoCard from './ObjetoCard';

function ObjetoGrid({ items, isLoading }) {
    if (isLoading) {
        return <p className="mensaje-carga">Buscando en el desván...</p>;
    }

    return (
        <div className="grid">
            {items.map(item => (
                <ObjetoCard key={item.id} objeto={item} />
            ))}
        </div>
    );
}

export default ObjetoGrid;
