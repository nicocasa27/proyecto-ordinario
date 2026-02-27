import React from 'react';

function QuienesSomos() {
    return (
        <section id="quienes-somos" className="seccion-quienes-somos">
            <div className="quienes-somos-contenedor">
                <div className="quienes-somos-texto">
                    <h2>¿Quiénes somos?</h2>
                    <p>
                        Somos una iniciativa estudiantil dedicada a fomentar la honestidad y la comunidad dentro del campus.
                        El <strong>Centro de Pérdidas Universitarias</strong> nace como respuesta a la necesidad de tener un punto
                        de encuentro digital confiable donde los estudiantes puedan reportar objetos hallados o buscar pertenencias extraviadas.
                    </p>
                    <p>
                        Nuestro objetivo es simplificar el proceso de recuperación de objetos, conectando a quien lo perdió con quien lo encontró
                        de manera rápida y eficiente. ¡Entre todos cuidamos nuestras cosas!
                    </p>
                </div>
                <div className="quienes-somos-stats">
                    <div className="stat-card">
                        <h3>+50</h3>
                        <p>Objetos devueltos</p>
                    </div>
                    <div className="stat-card">
                        <h3>100%</h3>
                        <p>Comunidad unida</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default QuienesSomos;
