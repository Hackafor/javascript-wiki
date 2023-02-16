import React from 'react'
import '/src/estilos/Principal.css'

export default function Principal(props) {
  return (
    <div className='contenedor mx-auto px-4 sm:px-6 lg:px-8'>
        <header>
        <div class=' flex-cold '>
        <h1 class="max-w-lg py-6 font-mono leading-snug tracking-tight text-5xl text-left">Pregunta Frecuentes de JavaScript!!</h1>
        </div>
        <div>
       <input autoFocus type="search" id="search"  name="search" placeholder='SEARCH' class='bg-gray-50  text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  border rounded-md p-2 focus:outline-none focus:border-purple-500 '></input>
       </div>
    
</header>

<section className="bg-gray-100 py-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white p-6 shadow-md rounded-md hover:bg-blue-100 hover:transform hover:scale-105 transition duration-400 ease-in-out">
              <h2 className="text-lg font-bold mb-4">{props.titulo1}</h2>
              <p className="text-gray-600">{props.contenido1}</p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-md hover:bg-blue-100 hover:transform hover:scale-105 transition duration-400 ease-in-out">
              <h2 className="text-lg font-bold mb-4">{props.titulo2}</h2>
              <p className="text-gray-600">{props.contenido2}</p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-md hover:bg-blue-100 hover:transform hover:scale-105 transition duration-400 ease-in-out">
              <h2 className="text-lg font-bold mb-4">{props.titulo3}</h2>
              <p className="text-gray-600">{props.contenido3}</p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-md hover:bg-blue-100 hover:transform hover:scale-105 transition duration-400 ease-in-out">
              <h2 className="text-lg font-bold mb-4">{props.titulo4}</h2>
              <p className="text-gray-600">{props.contenido4}</p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-md hover:bg-blue-100 hover:transform hover:scale-105 transition duration-400 ease-in-out">
              <h2 className="text-lg font-bold mb-4">{props.titulo5} </h2>
              <p className="text-gray-600">{props.contenido5}</p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-md hover:bg-blue-100 hover:transform hover:scale-105 transition duration-400 ease-in-out">
              <h2 className="text-lg font-bold mb-4">{props.titulo6} </h2>
              <p className="text-gray-600">{props.contenido6}</p>
            </div>
    </div>
  </div>
</section>






</div>
  )
}
