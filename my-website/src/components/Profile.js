import React from "react";

const profileData = [
  {
    title: "Birthdate",
    info: "12.10.1996",
  },
  {
    title: "Current Address",
    info: "Muğla",
  },
  {
    title: "Education",
    info: "Hacettepe University Chemical Engineering, 2021",
  },
  {
    title: "Preferred Role",
    info: "Frontend, Backend",
  },
];

function Profile() {
  return (
    <div className="pt-[25px] pb-[72px] max-w-7xl mx-auto">
      <h2 className="text-3xl text-center p-16">Profile</h2>
      <div className="flex flex-col items-center gap-[64px] lg:flex-row justify-center">
        <div className="bg-white p-4 w-2/3 rounded-xl shadow-[8px_9px_rgba(82,82,82,0.5)] lg:max-w-[500px] lg:pl-[41px] lg:py-[36px] ">
          {/* widthi nasıl vercez? */}
          <h3 className="text-medium text-[#ea2678] mb-8">Personal Information</h3>
          <div className="flex flex-col gap-[22px]">
            {profileData.map((item) => {
              return (
                <div className="flex flex-col text-base lg:flex-row">
                  <p className="w-2/3 font-semibold">{item.title}</p>
                  <p className="w-3/5">{item.info}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col w-2/3 gap-[20px] p-[9px] lg:w-1/3 lg:pt-9">
          <h3 className="font-playfair text-medium relative  pl-[2px] after:content-[''] after:bg-[#82BBFF] after:block after:absolute after:rounded after:w-[90px] after:h-[18px]  after:-z-50 after:right-40 after:top-5 after:left-0">
            About me
          </h3>
          <p className="text-base">
          After my undergraduate education, I decided to change
my career according to my skills such as patience,
creativity, and algorithmic thinking.
          </p>
          <p className="text-base ">
            {" "}
            Whatever the purpose,
I believe it is more important to take pleasure in the
process than the result. I am self-aware and adaptable, so
I can readily cope with difficult situations.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;

