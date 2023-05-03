import { useEffect, useRef, useState } from "react";
import Pdf from "react-to-pdf";
import { FaDownload } from "react-icons/fa";
const Blog = () => {
  const [answer, setAnswer] = useState([]);
  const ref = useRef();
  useEffect(() => {
    fetch("questionAnswers.json")
      .then(res => res.json())
      .then(data => setAnswer(data));
  }, []);
  console.log(answer);
  return (
    <>
      <section className="pt-28 pb-10 bg-gray-200">
        <div className="cs-container">
          <h2 className="section-title">Question answers</h2>

          <div className="mt-10 p-5">
            <ol className="list-decimal ml-5">
              {answer.map(ans => (
                <>
                  <li
                    className="font-bold font-poppins mt-5 text-xl"
                    key={ans.id}
                  >
                    {ans.question}
                  </li>
                  <p className="font-poppins text-slate-700 mt-2">
                    {ans.answer}
                  </p>
                </>
              ))}
            </ol>
          </div>
        </div>
      </section>
      <section className="mt-28 mb-10">
        <div className="cs-container">
          <h2 className="section-title">About this page</h2>
          <div className="flex justify-end mt-10">
            <Pdf targetRef={ref} filename="Answer.pdf">
              {({ toPdf }) => (
                <button onClick={toPdf} className="btn">
                  <span className="mr-3 normal-case font-poppins">
                    Download now
                  </span>{" "}
                  <FaDownload />
                </button>
              )}
            </Pdf>
          </div>
          <div className="mt-10 p-10 max-w-[800px] mx-auto" ref={ref}>
            <p className="font-poppins text-slate-500 font-semibold">
              Hi,
              <br />I am Md. Abir mahmud. Welcome to the blog. This page
              contains some questions given by Programming hero and their ans.
              There are 4 questions and their answer.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
