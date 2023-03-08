import { type NextPage } from 'next';
import Principal from '~/Componentes/home';
import Layout from '~/Componentes/Layout';

const Home: NextPage = () => {
  return (
    <Layout title='Home' >
      <Principal />
    </Layout>
  );
};

export default Home;
