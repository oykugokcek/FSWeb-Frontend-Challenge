import React from "react";
import { ProjectsData } from "../Data/ProjectsData";

function Projects() {
  return (
    <div className="bg-white ">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-medium  text-center pt-20 pb-16">
          Projects
        </h1>
        <div className="flex flex-col content-center flex-wrap gap-20 md:gap-16 md:flex-row md:justify-center">
          {ProjectsData.map((project) => {
            return (
              <div
                className={`relative flex flex-col w-2/3 gap-5 rounded-xl pt-10 px-10 md:w-1/3`}
                style={{ backgroundColor: project.backgroundColor }}
              >
                <h2 className="text-xl text-center font-playfair font-bold">
                  {project.name}
                </h2>
                <img
                  src={project.imgsrc}
                  className="rounded-md w-88 h-60"
                />
                <p>{project.explanation}</p>
                <div className="flex flex-wrap w-11/12 gap-[9px] pb-20">
                  {project.libraries.map((library) => {
                    console.log(library);
                    return (
                      <h4 className="font-playfair font-bold text-sm leading-none rounded-[76px] bg-white pt-[6px] px-5 pb-[10px]">
                        {library}
                      </h4>
                    );
                  })}
                </div>
                
               
                <div className="absolute bottom-1 left-10 flex gap-40 pb-6 font-semibold text-[20px] md:gap-16">
                  <a href= {project.gitHubLink} className="">View on GitHub</a>
                  <a href={project.vercelLink}>Go to app →</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;

// className={`flex flex-col gap-5 bg-[${project.backgroundColor}] rounded-xl p-10 w-1/3`}

{
  /* <div className="flex justify-center gap-16">
<div className="flex flex-col gap-5 bg-[rgba(221,238,254,1)] rounded-xl p-10 w-1/3">
  <h2 className="text-xl font-playfair font-bold">Random Jokes</h2>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
    aut, odit laborum aliquam voluptatum nisi mollitia.
  </p>
  <div className="flex flex-wrap w-11/12 gap-[9px]">
    <h4 className="font-playfair font-bold text-sm leading-none rounded-[76px] bg-white pt-[6px] px-5 pb-[10px]">
      react
    </h4>
    <h4 className="font-playfair font-bold text-sm leading-none rounded-[76px] bg-white pt-[6px] px-5 pb-[10px]">
      vercel
    </h4>
    <h4 className="font-playfair font-bold text-sm leading-none rounded-[76px] bg-white pt-[6px] px-5 pb-[10px]">
      axios
    </h4>
    <h4 className="font-playfair font-bold text-sm leading-none rounded-[76px] bg-white pt-[6px] px-5 pb-[10px]">
      router
    </h4>
  </div>
  <div className="flex justify-between font-semibold text-[20px]">
    <a>View on GitHub</a>
    <a>Go to app →</a>
  </div>
</div>
<div className="flex flex-col gap-5 bg-[rgba(221,238,254,1)] p-10 w-1/3">
  <h2 className="text-xl font-playfair font-bold">Random Jokes</h2>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
    aut, odit laborum aliquam voluptatum nisi mollitia.
  </p>
  <div className="flex flex-wrap w-11/12 gap-[9px]">
    <h4 className="font-playfair font-bold text-sm leading-none rounded-[76px] bg-white pt-[6px] px-5 pb-[10px]">
      react
    </h4>
    <h4 className="font-playfair font-bold text-sm leading-none rounded-[76px] bg-white pt-[6px] px-5 pb-[10px]">
      vercel
    </h4>
    <h4 className="font-playfair font-bold text-sm leading-none rounded-[76px] bg-white pt-[6px] px-5 pb-[10px]">
      axios
    </h4>
    <h4 className="font-playfair font-bold text-sm leading-none rounded-[76px] bg-white pt-[6px] px-5 pb-[10px]">
      router
    </h4>
  </div>
  <div className="flex justify-between font-semibold text-[20px]">
    <a>View on GitHub</a>
    <a>Go to app →</a>
  </div>
</div>
</div> */
}
