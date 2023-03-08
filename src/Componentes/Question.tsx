interface Props {
  code: string;
  question: string;
  content: string;
}

function Question({ code, question, content }: Props) {
  return (
    <>
      <section className="prose lg:prose-xl mx-auto dark:text-gray-200 text-black py-8">
        <h2>{question}</h2>
        <p>{content}</p>
      </section>
      <pre>
        <code className="language-javascript text-black dark:text-white">
          {code}
        </code>
      </pre>
    </>
  );
}

export default Question;
