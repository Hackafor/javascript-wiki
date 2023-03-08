import { useEffect, useState } from 'react';
import Layout from '~/Componentes/Layout';
import Library from '~/Componentes/library';

interface library {
  title: string;
  id: string;
  logo: string;
  page: string;
}

export default function Libraries() {
  const [librarys, setLibrarys] = useState([]);
  const [isLoadin, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);
    fetch(`https://api-js-wiki.deno.dev/api/libraries`)
      .then((d) => d.json())
      .then((d) => {
        setLibrarys(d);
      })
      .finally(() => {
        setIsloading(false);
      });
  }, []);

  return isLoadin ? (
    ''
  ) : (
    <Layout title="Libraries">
      <div className='mx-auto w-full '>
      <h1 className="text-3xl mb-9">Librerías de JavaScript</h1>

      <div
        style={{
          gridTemplateColumns: 'repeat(auto-fit,minmax(9.8rem, 1fr)',
        }}
        className="grid gap-2 "
      >
        {librarys.map((datum: library) => (
          <div key={datum.id}>
            <Library
              title={datum.title}
              id={datum.id}
              logo={datum.logo}
              page={datum.page}
            />
          </div>
        ))}
      </div>
      </div>
    </Layout>
  );
}
