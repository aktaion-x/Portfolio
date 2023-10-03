import { Tilt } from "react-tilt";
import { Suspense } from "react";

import BackgroundCanvas from "./BackgroundCanvas";
import { Link } from "react-router-dom";
import { options } from "../../utils/tilt";

function Index() {
  return (
    <div>
      <Suspense>
        <BackgroundCanvas />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10/12 md:w-auto">
          <Tilt options={options}>
            <div className="hero-text bg-[#ffffffb0] border-2 py-10 px-10 max-w-[800px] ">
              <h1 className="text-3xl font-bold">
                <div className="mb-5 text-start">Hi, <span className=" line-through relative my-name">I'm Ghassan</span></div>
                <div className="text-center">Web Developer, Design Enthusiast and maybe more!</div>
              </h1>
              <Link to='/projects' className="primary-btn block w-fit mx-auto border bg-slate-900 text-white px-10 py-4 mt-14 rounded text-lg  duration-300 ">See My Projects</Link>
            </div>
          </Tilt>
        </div>
      </Suspense >
    </div >
  );
}

export default Index;
