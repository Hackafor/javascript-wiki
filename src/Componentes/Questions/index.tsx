import { useState } from 'react';
import Heart from '../icons/Hearth';
import HeartBroken from '../icons/HeartBroken';

interface Props {
  code: string;
  question: string;
  content: string;
}

function Question({ code, question, content }: Props) {
  const [like, setLike] = useState(false);

  const handleClick = () => {
    setLike(!like);
  };

  return (
    <>
      <section className="prose lg:prose-xl align-middle mx-auto dark:text-gray-200 text-black py-4">
        <button
          onClick={handleClick}
          className="h-10 mx-2 p-2 float-left hover:text-yellow-300 text-red-400"
        >
          {like ? <Heart /> : <HeartBroken />}
        </button>
        <h2>{question}</h2>
        <div>
          <p>{content}</p>
        </div>
      </section>
      {code && (
        <pre>
          <code className="language-javascript text-black dark:text-white">
            {code}
          </code>
        </pre>
      )}
    </>
  );
}

export default Question;
