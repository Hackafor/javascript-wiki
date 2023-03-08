import principal from '../estilos/Principal.module.css';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface LinkType {
  url: string;
  id: string;
  title: string;
}

export default function Principal() {
  const [links, setLinks] = useState([] as LinkType[]);

  useEffect(() => {
    fetch('https://api-js-wiki.deno.dev/api/questions')
      .then((d) => d.json())
      .then((d) => {
        setLinks(d);
      });
  }, []);

  if (links) {
    return (
      <div className="contenedordark:bg-slate-600 mx-auto px-4 sm:px-6 lg:px-8">
        <header>
          <div className=" flex-cold ">
            <h1 className="max-w-lg py-6 text-left dark:text-white text-black font-mono text-5xl leading-snug tracking-tight">
              Preguntas Frecuentes de JavaScript!!
            </h1>
          </div>
          <div>
            <input
              autoFocus
              type="search"
              name="search"
              placeholder="porque typeof null es object"
              className={`${principal.search} block  w-full border p-2.5 pl-4 rounded-sm  text-sm text-gray-900 focus:border-purple-500 focus:outline-none focus:ring-blue-500 dark:border-gray-600  dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 `}
            ></input>
          </div>
        </header>

        <ul className="grid place-content-center">
          {links.map((l) => {
            return (
              <li>
                <Link
                  className="hover:underline py-3"
                  key={l.id}
                  href={`/questions/${l.id}`}
                >
                  {l.title}
                </Link>
              </li>
            );
          })}
        </ul>

        <section className="bg-gray-100 dark:bg-slate-600 py-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 dark:text-blue-500 text-black md:grid-cols-3">
              <div className="duration-400 rounded-md bg-white p-6 shadow-md transition ease-in-out hover:scale-105 hover:transform hover:bg-blue-100">
                <h2 className="mb-4 text-lg font-bold"> Something amazing </h2>
                <p className="text-gray-600">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quasi et sit illo molestiae, veniam nulla consectetur ratione
                  qui saepe beatae possimus iste aliquid dolores, adipisci
                  pariatur fugiat culpa suscipit optio.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="contenedordark:bg-slate-600 mx-auto px-4 sm:px-6 lg:px-8">
      <header>
        <div className=" flex-cold ">
          <h1 className="max-w-lg py-6 text-left dark:text-white text-black font-mono text-5xl leading-snug tracking-tight">
            Preguntas Frecuentes de JavaScript!!
          </h1>
        </div>
        <div>
          <input
            autoFocus
            type="search"
            name="search"
            placeholder="porque typeof null es object"
            className={`${principal.search} block  w-full border p-2.5 pl-4 rounded-sm  text-sm text-gray-900 focus:border-purple-500 focus:outline-none focus:ring-blue-500 dark:border-gray-600  dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 `}
          ></input>
        </div>
      </header>

      <p>Loading...</p>

      <section className="bg-gray-100 dark:bg-slate-600 py-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 dark:text-blue-500 text-black md:grid-cols-3">
            <div className="duration-400 rounded-md bg-white p-6 shadow-md transition ease-in-out hover:scale-105 hover:transform hover:bg-blue-100">
              <h2 className="mb-4 text-lg font-bold"> Something amazing </h2>
              <p className="text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
                et sit illo molestiae, veniam nulla consectetur ratione qui
                saepe beatae possimus iste aliquid dolores, adipisci pariatur
                fugiat culpa suscipit optio.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
