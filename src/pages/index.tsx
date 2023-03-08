import { type NextPage } from 'next';
import Principal from '~/Componentes/Principal';
import Layout from '~/layouts/layout';

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <Principal />
    </Layout>
  );
};

export default Home;
