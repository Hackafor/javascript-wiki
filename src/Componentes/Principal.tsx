import principal from '../estilos/Principal.module.css';

type Props = {
  titulo1: string;
  contenido1: string;
  titulo2: string;
  contenido2: string;
  titulo3: string;
  contenido3: string;
  titulo4: string;
  contenido4: string;
  titulo5: string;
  contenido5: string;
  titulo6: string;
  contenido6: string;
};

export default function Principal(props: Props) {
  return (
    <div className="contenedor mx-auto px-4 sm:px-6 lg:px-8">
      <header>
        <div className=" flex-cold ">
          <h1 className="max-w-lg py-6 text-left font-mono text-5xl leading-snug tracking-tight">
            Pregunta Frecuentes de JavaScript!!
          </h1>
        </div>
        <div>
          <input
            autoFocus
            type="search"
            name="search"
            placeholder="SEARCH"
            className={`${principal.search} block  w-full rounded-lg rounded-md border  bg-gray-50 p-2.5 pl-10  text-sm text-gray-900 focus:border-purple-500 focus:outline-none focus:ring-blue-500 dark:border-gray-600  dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 `}
          ></input>
        </div>
      </header>

      <section className="bg-gray-100 py-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            <div className="duration-400 rounded-md bg-white p-6 shadow-md transition ease-in-out hover:scale-105 hover:transform hover:bg-blue-100">
              <h2 className="mb-4 text-lg font-bold">{props.titulo1}</h2>
              <p className="text-gray-600">{props.contenido1}</p>
            </div>
            <div className="duration-400 rounded-md bg-white p-6 shadow-md transition ease-in-out hover:scale-105 hover:transform hover:bg-blue-100">
              <h2 className="mb-4 text-lg font-bold">{props.titulo2}</h2>
              <p className="text-gray-600">{props.contenido2}</p>
            </div>
            <div className="duration-400 rounded-md bg-white p-6 shadow-md transition ease-in-out hover:scale-105 hover:transform hover:bg-blue-100">
              <h2 className="mb-4 text-lg font-bold">{props.titulo3}</h2>
              <p className="text-gray-600">{props.contenido3}</p>
            </div>
            <div className="duration-400 rounded-md bg-white p-6 shadow-md transition ease-in-out hover:scale-105 hover:transform hover:bg-blue-100">
              <h2 className="mb-4 text-lg font-bold">{props.titulo4}</h2>
              <p className="text-gray-600">{props.contenido4}</p>
            </div>
            <div className="duration-400 rounded-md bg-white p-6 shadow-md transition ease-in-out hover:scale-105 hover:transform hover:bg-blue-100">
              <h2 className="mb-4 text-lg font-bold">{props.titulo5} </h2>
              <p className="text-gray-600">{props.contenido5}</p>
            </div>
            <div className="duration-400 rounded-md bg-white p-6 shadow-md transition ease-in-out hover:scale-105 hover:transform hover:bg-blue-100">
              <h2 className="mb-4 text-lg font-bold">{props.titulo6} </h2>
              <p className="text-gray-600">{props.contenido6}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
