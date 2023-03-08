import { useEffect, useState } from 'react';
import Question from '../../Componentes/Question';
import Prism from 'prismjs';
import { useRouter } from 'next/router';
import Layout from '~/layouts/layout';

interface Question {
  code: string;
  content: string;
  title: string;
}

function Quest() {
  const router = useRouter();
  const { slug } = router.query;
  const [question, setQuestion] = useState({} as Question);
  const highlight = () => {
    Prism.highlightAll(); // <--- prepare Prism
  };

  useEffect(() => {
    console.log(slug);
    highlight();
  }, [question]);

  useEffect(() => {
    if (!router.isReady) return;
    fetch(`https://api-js-wiki.deno.dev/api/questions/${slug}`)
      .then((d) => d.json())
      .then((d) => {
        setQuestion(d);
      });
  }, [router.isReady]);

  return (
    <Layout title="Question dinamica aqui">
      <Question
        code={question.code}
        content={question.content}
        question={question.title}
      />
    </Layout>
  );
}

export default Quest;
