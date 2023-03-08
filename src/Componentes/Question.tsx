import React from 'react';

interface Props {
  code: string;
  question: string;
  content: string;
}

function Question({ code, question, content }: Props) {
  return (
    <>
      <h3 className="title text-black dark:text-white">{question}</h3>
      <div className="content text-black dark:text-white">{content}</div>
      <pre>
        <code className="language-javascript text-black dark:text-white">
          {code}
        </code>
      </pre>
    </>
  );
}

export default Question;
