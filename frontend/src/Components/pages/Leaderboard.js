import React from "react";
import logo from "../assets/testimonial_img-1.jpg";
const Leaderboard = () => {
  return (
    <div className="h-screen bg-green-700">
      <div className="text-3xl text-center pt-12 font-mono text-brown-600 font-bold">
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
              John Doe - 100 credit points earned.
            </div>{" "}
            <div className="py-2 flex">
              # 2{" "}
              <img
                className="rounded-full  h-8 w-8 mx-2"
                src={logo}
                alt="logo"
              />{" "}
              Spider Man - 98 credit points earned.
            </div>{" "}
            <div className="py-2 flex">
              # 3{" "}
              <img
                className="rounded-full  h-8 w-8 mx-2"
                src={logo}
                alt="logo"
              />{" "}
              Batman - 95 credit points earned.
            </div>{" "}
            <div className="py-2 flex">
              # 4{" "}
              <img
                className="rounded-full  h-8 w-8 mx-2"
                src={logo}
                alt="logo"
              />{" "}
              Krish - 94 credit points earned.
            </div>
            <div className="py-2 flex">
              # 5{" "}
              <img
                className="rounded-full  h-8 w-8 mx-2"
                src={logo}
                alt="logo"
              />{" "}
              Hulk - 92 credit points earned.
            </div>
            <div className="py-2 flex">
              # 6{" "}
              <img
                className="rounded-full  h-8 w-8 mx-2"
                src={logo}
                alt="logo"
              />{" "}
              Hawk-eye - 90 credit points earned.
            </div>
            <div className="py-2 flex">
              # 7{" "}
              <img
                className="rounded-full  h-8 w-8 mx-2"
                src={logo}
                alt="logo"
              />{" "}
              Shaktiman - 87 credit points earned.
            </div>
          </div>
        </div>
        <div className="w-1/2 h-1/2 z-10 ">
          <div className="bg-green-100 mt-6 w-1/2 rounded-lg ">
            <div className="p-4">
              {" "}
              <img
                className=" p-6 mx-auto rounded-full cursor-pointer h-40 w-40"
                src={logo}
                alt="logo"
              />
              <div className="mx-auto text-center px-6">
                <h1>John Doe</h1>
                <p>
                  She is an undergrad student at ABC college! <br/><br/>
                  Meet our weekly TOP Contributor! We Congratulate you for your noble deed towards saving our green planet. The world owes its life to people like you. Keep contributing and keep buying organic products. Hope to see you next week with more contributions!
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
