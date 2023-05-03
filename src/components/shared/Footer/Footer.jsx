const Footer = () => {
  return (
    <footer className="mt-28">
      <div className="bg-slate-900 py-5">
        <div className="cs-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="section-title text-white">About</h2>
              <p className="mt-5 text-slate-400">
                Welcome to{" "}
                <span className="text-red-500 font-bold ">Recipes HUB</span> ,
                the ultimate recipe website for turkey lovers! Our platform is
                dedicated to showcasing a wide range of mouthwatering recipes
                specifically focused on turkey dishes. Explore our extensive
                collection of turkey recipes, from classic Thanksgiving
                favorites to innovative and exotic creations. Each recipe is
                carefully crafted by our talented team of chefs, providing
                detailed step-by-step instructions, ingredient lists, and expert
                tips for achieving the perfect turkey dish. Whether you&#39;re a
                seasoned cook or a novice in the kitchen, Turkey&#39;s Chef is
                your go-to resource for mastering the art of cooking with
                turkey.
              </p>
            </div>
            <div>
              <h2 className="section-title text-white">News letter</h2>
              <div className="mt-10">
                <p className="text-slate-400">
                  Sign up to receive email updates on new product announcements,
                  gift ideas, sales and more.
                </p>
                <div className="max-w-[500px] font-poppins space-y-5">
                  <input
                    type="text"
                    className="bg-slate-800 p-3 w-[70%] text-slate-400 outline-none border-b-2 border-t-2 border-l-2 border-slate-500"
                    style={{ borderRadius: "10px 0 0 10px" }}
                    placeholder="user@examples.com"
                  />
                  <input
                    type="submit"
                    value="Subscribe"
                    className="w-[30%] bg-red-500 py-3 border-2 border-red-500 cursor-pointer text-white text-base"
                    style={{ borderRadius: "0 10px 10px 0" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-950 text-white text-center py-3">
        <h2>
          &#169; <span className="text-red-500">Recipes HUB</span> | All rights
          reserved.
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
