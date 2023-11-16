import Countrie from "./Countrie"

const Countries = ({ countriesToShow, filter }) => {
    return (
        <div>
            {
                countriesToShow.length > 1 &&
                countriesToShow.length > 10 ? (
                    <div>Too many matches, specify another filter</div>
                ) : (
                    <div>
                        
                        { /* CountriesToShow itera sobre cada pais renderizando su nombre  */
                            countriesToShow.map(({ name }) => (
                                <div key={name.common}>
                                    {/* usamos ternarios para verificar si se encontro solo un pais, si es asi deja de mostrarse el nombre, en caso de ser mas de uno muestra los nombres del pais */
                                        countriesToShow.length === 1 ? '' : <p>{name.common}</p>
                                    }
                                </div>
                        ))}

                        { /* Verificamos si countriesToShow tiene un solo pais, si es asi procedemos a renderizar countrie con sus respectivas props */
                            countriesToShow.length === 1 && (
                            <Countrie
                                name={countriesToShow[0].name.common}
                                capital={countriesToShow[0].capital}
                                population={countriesToShow[0].population}
                                languages={countriesToShow[0].languages}
                                flags={countriesToShow[0].flags.png}
                            />
                            )
                        }

                    </div>
                )
            }
        </div>
    )
}

export default Countries