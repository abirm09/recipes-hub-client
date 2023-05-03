import { useEffect, useState } from "react";

const HUbInNumber = () => {
  const [numberData, setNUmberData] = useState([]);
  useEffect(() => {
    //   fetch("https://recipes-hub-server-abirm09.vercel.app/infoinnumber")
    fetch("http://localhost:5000/infoinnumber")
      .then(res => res.json())
      .then(data => setNUmberData(data));
  }, []);
  console.log(numberData);
  return (
    <section className="pt-28 bg-slate-100 pb-10">
      <div className="cs-container">
        <h2 className="section-title">Recipes HUB in number</h2>
        <p className="section-subtitle">Our short info in number.</p>
        <div className="flex justify-center gap-5 flex-wrap mt-10">
          {numberData.map(dd => (
            <div
              key={dd.id}
              className="w-[170px] bg-white px-5 py-8 text-center h-44 hover:scale-110 transition-all hover:shadow-lg"
            >
              <img src={dd.img} alt={dd.name} />
              <h4 className="text-3xl font-rubik font-bold text-red-400">
                {dd.count}
              </h4>
              <h3 className="font-poppins text-slate-500 font-bold">
                {dd.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HUbInNumber;
