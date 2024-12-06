import React from "react";

function Skils() {
  return (
    <div className="w-full h-screen">
      <div className="max-w-screen-xl  m-auto">
        <div>
          <h1 className="text-4xl mt-20 mb-9 font-[Acme]">
            <i className="ri-arrow-right-line"></i>Coding Skills
          </h1>
          <div className="w-[70%] my-5 h-32 bg-zinc-100 rounded-md flex items-center px-9 gap-20 justify-center">
            <img src="html.png" alt="" />
            <img src="css.png" alt="" />
            <img src="js.png" alt="" />
            <img src="reac.png" alt="" />
            <img src="node.png" alt="" />
            <img src="ex.png" alt="" />
            <img src="mongo.png" alt="" />
          </div>
          <h1 className="text-4xl mt-20 mb-9 font-[Acme]">
            <i className="ri-arrow-right-line"></i>Designing Skills
          </h1>
          <div className="w-[70%] my-5 h-32 bg-zinc-100 rounded-md flex items-center px-9 gap-20 justify-center">
            <img src="ps.png" alt="" />
            <img src="fig.png" alt="" />
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skils;
