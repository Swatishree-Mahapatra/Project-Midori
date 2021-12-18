import React from "react";
import logo from "../assets/testimonial_img-1.jpg";
const Leaderboard = () => {
  return (
    <div className="h-screen bg-pink-100">
      <div className="text-2xl text-center pt-12 font-mono text-gray-400">
        LeaderBoard
      </div>
      <div className="flex  h-1/2">
        <div className="w-1/2 z-0 ">
          <div className="-mr-20  divide-y-2 divide-gray-300 opacity-75	 rounded-lg p-10 mt-16 ml-48 bg-yellow-100 ">
            <div className="py-2 flex">
              # 1{" "}
              <img
                className="rounded-full  h-8 w-8 mx-2"
                src={logo}
                alt="logo"
              />{" "}
              John Doe
            </div>{" "}
            <div className="py-2 flex">
              # 1{" "}
              <img
                className="rounded-full  h-8 w-8 mx-2"
                src={logo}
                alt="logo"
              />{" "}
              John Doe
            </div>{" "}
            <div className="py-2 flex">
              # 1{" "}
              <img
                className="rounded-full  h-8 w-8 mx-2"
                src={logo}
                alt="logo"
              />{" "}
              John Doe
            </div>{" "}
            <div className="py-2 flex">
              # 1{" "}
              <img
                className="rounded-full  h-8 w-8 mx-2"
                src={logo}
                alt="logo"
              />{" "}
              John Doe
            </div>
          </div>
        </div>
        <div className="w-1/2 z-10 ">
          <div className="bg-gray-300 mt-6 w-1/2 ">
            <div className="p-4">
              {" "}
              <img
                className=" p-6 mx-auto rounded-full cursor-pointer h-40 w-40"
                src={logo}
                alt="logo"
              />
              <div className="mx-auto text-center px-2">
                <h1>Jhon Doe</h1>
                <p>
                  LOREM IPSUM Do pariatur aliqua duis reprehenderit. Duis fugiat
                  est sit sit anim do esse velit laborum sunt. Exercitation
                  nostrud deserunt sint aliquip sit nulla velit dolore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
