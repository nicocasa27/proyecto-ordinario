import React, { useState } from 'react';

function ReportarObjeto() {
    const [enviado, setEnviado] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setEnviado(true);
        setTimeout(() => setEnviado(false), 3000);
    };

    return (
        <section id="reportar" className="seccion-reportar">
            <div className="reportar-contenedor">
                <h2>Reportar objeto perdido</h2>
                <p>Si encontraste algo o perdiste algo y quieres dejar el registro, llena este formulario.</p>

                {enviado ? (
                    <div className="mensaje-exito">
                        ¡Gracias! Tu reporte ha sido registrado en el sistema.
                    </div>
                ) : (
                    <form className="form-reporte" onSubmit={handleSubmit}>
                        <div className="campo">
                            <label>Nombre del objeto</label>
                            <input type="text" placeholder="Ej: Mochila, Calculadora..." required />
                        </div>
                        <div className="campo">
                            <label>Último lugar donde se vio</label>
                            <input type="text" placeholder="Ej: Biblioteca, Cafetería..." required />
                        </div>
                        <div className="campo">
                            <label>Descripción breve</label>
                            <textarea placeholder="Describe el color, marca o alguna seña particular..." required></textarea>
                        </div>
                        <div className="campo">
                            <label>Tu correo estudiantil</label>
                            <input type="email" placeholder="ejemplo@universidad.edu" required />
                        </div>
                        <button type="submit" className="btn-enviar">Enviar reporte</button>
                    </form>
                )}
            </div>
        </section>
    );
}

export default ReportarObjeto;
