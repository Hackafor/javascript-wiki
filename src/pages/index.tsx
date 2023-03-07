import { type NextPage } from 'next';
import Principal from '~/Componentes/Principal';

const Home: NextPage = () => {
  return (
    <main className="dark:bg-blue-600">
      <Principal />
    </main>
  );
};

export default Home;
