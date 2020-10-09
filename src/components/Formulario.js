import React, {useState} from 'react';


const Formulario = () => {

    const [busqueda, guardarBusqueda] = useState({
        artista:'',
        cancion:''
    });

    const [error, guardarError] = useState(false);

    const { artista, cancion } = busqueda;

    // Función para cada input para leer el contenido
    const actualizarEstado = (e) => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value 
        })
    }

    // Consultar las apis
    const buscarInformacion = (e) => {
        e.preventDefault();

        if(typeof artista !== 'string' || artista.trim() === '' || typeof cancion !== 'string' || cancion.trim() === ''){
            guardarError(true);
            return;
        }
        guardarError(false);
        // Pasar al componente principal
        
    }

    return (
        <div className="bg-info">
            <div className="container">
                <div className="row">
                
                <form
                    onSubmit={buscarInformacion}
                    className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                >
                    <fieldset>
                        <legend className="text-center">
                            Buscador letras canciones
                        </legend>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Artista</label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        name="artista"
                                        placeholder="Nombre artista..."
                                        value={artista}
                                        onChange={actualizarEstado}
                                    />
                                </div>
                            </div>
                            

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Canción</label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        name="cancion"
                                        placeholder="Nombre cancion..."
                                        value={cancion}
                                        onChange={actualizarEstado}
                                    />
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary float-right">Buscar</button>
                    </fieldset>
                </form>

                </div>
            </div>
        </div>
    );
} 

export default Formulario;
