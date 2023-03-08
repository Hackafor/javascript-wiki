import { type NextPage } from 'next';
import Principal from '~/Componentes/home';

const Home: NextPage = () => {
  return (
    <main className="dark:bg-slate-600">
      <Principal />
    </main>
  );
};

export default Home;
