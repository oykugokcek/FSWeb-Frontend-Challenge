import React, { useState } from "react";
import { SkillsData } from "../Data/SkillsData";
export default function Skills() {
  return (
    <div className="flex flex-col pt-20 pb-12 items-center bg-white text-center ">
      <h1 className="text-4xl mb-12">Skills</h1>
      <div className="flex flex-wrap flex-col gap-12 lg:flex-row">
        {SkillsData.map((skill) => {
          return (
            <div className=" flex flex-col items-center gap-1">
              <img className=" rounded-md bg-contain" src={skill.imgsrc} />

              <p className="text-medium text-neutral-500 mt-1 pb-8">
                {skill.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

{
  /* <div className="flex flex-col gap-12 lg:flex-row">
        {" "}
        <div className="my-14">
          <img
            className="w-32 h-32 rounded-md "
            src={require("../images/JavaScript-logo.png")}
          />
          <p className="text-medium text-neutral-500">JAVASCRIPT</p>
        </div>
      </div> */
}
