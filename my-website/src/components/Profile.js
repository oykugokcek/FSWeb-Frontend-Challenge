import React from "react";

const profileData = [
  {
    title: "Doğum Tarihi",
    info: "12.10.1996",
  },
  {
    title: "İkamet Şehri",
    info: "Muğla",
  },
  {
    title: "Öğrenim Durumu",
    info: "Hacettepe Ünv. Kimya Mühendisliği, 2015",
  },
  {
    title: "Tercih Ettiği Rol",
    info: "Frontend, UI",
  },
];

function Profile() {
  return (
    <div className="pt-[25px] pb-[72px] max-w-7xl mx-auto">
      <h2 className="text-3xl text-center p-16">Profile</h2>
      <div className="flex flex-col items-center gap-[64px] lg:flex-row justify-center">
        <div className="bg-white p-4 w-2/3 rounded-xl shadow-[8px_9px_rgba(82,82,82,0.5)] lg:max-w-[500px] lg:pl-[41px] lg:py-[36px] ">
          {/* widthi nasıl vercez? */}
          <h3 className="text-medium text-[#ea2678] mb-8">Basic Information</h3>
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            aut, odit laborum aliquam voluptatum nisi mollitia.
          </p>
          <p className="text-base ">
            {" "}
            Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod
            deserunt quam temporibus cumque magnam!{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
{
  /* <div className="flex gap-[22px]">
<div className="flex text-base flex-col">
  <h4 className="font-semibold">Doğum Tarihi</h4>
  <h4 className="font-semibold">İkamet Şehri</h4>
  <h4 className="font-semibold">Öğretim Durumu</h4>
  <h4 className="font-semibold">Tercih ettiği rol</h4>
</div>
<div className="flex text-base flex-col">
  <p>12.10.1996</p>
  <p>Muğla</p>
  <p>Hacettepe Ünv. Kimya Mühendisliği, 2015</p>
  <p>Frontedn, UI</p>
</div>
</div> */
}
