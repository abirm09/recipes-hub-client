import { useEffect, useState } from "react";

const Blog = () => {
  const [answer, setAnswer] = useState([]);
  useEffect(() => {
    fetch("questionAnswers.json")
      .then(res => res.json())
      .then(data => setAnswer(data));
  }, []);
  console.log(answer);
  return (
    <section className="pt-28 pb-10 bg-gray-200">
      <div className="cs-container">
        <h2 className="section-title">Question answers</h2>
        <div className="mt-10">
          <ol className="list-decimal ml-5">
            {answer.map(ans => (
              <>
                <li
                  className="font-bold font-poppins mt-5 text-xl"
                  key={ans.id}
                >
                  {ans.question}
                </li>
                <p className="font-poppins text-slate-700 mt-2">{ans.answer}</p>
              </>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Blog;
