import React from 'react';

interface Props {
  code: string;
  question: string;
  content: string;
}

function Question({ code, question, content }: Props) {
  return (
    <>
      <h3 className="title">{question}</h3>
      <div className="content">{content}</div>
      <pre>
        <code className="language-javascript">{code}</code>
      </pre>
    </>
  );
}

export default Question;
