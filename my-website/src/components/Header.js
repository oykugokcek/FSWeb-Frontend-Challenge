import React from "react";
function Header() {
  return (
    <div className="flex flex-wrap flex-col-reverse w-full  mx-auto gap-10 lg:flex-row lg:flex-nowrap lg:max-w-6xl lg:pt-[151px] lg:pb-[94px] lg:w-9/12">
      <div className="flex flex-col gap-5  mx-auto text-center w-2/3 lg:text-left lg:w-1/2">
        <div className="relative text-2xl leading-none after:content-[''] after:bg-[#E92577] after:block after:rounded after:absolute after:w-32 after:h-[28px] after:-z-50 after:top-20 after:left-13  ">
          Hi!{" "}
        </div>
        <div className=" font-medium text-3xl ">
          <span className="">I'm Öykü.</span>
          I'm a full-stack developer. I can craft solid and scalable frontend
          products. <br /> Let's meet!
        </div>
        <div></div>
        <div className="mt-9">
          <div className="flex gap-5 w-[84px] mx-auto pb-5 lg:mx-0">
            <svg
              width="31"
              height="35"
              viewBox="0 0 31 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.2222 34.3867H10.3333V11.7521H17.2222V15.5245C18.6906 13.4785 20.9174 12.2587 23.293 12.1991C27.5651 12.2251 31.0123 16.0326 31 20.7116V34.3867H24.1111V21.6547C23.8356 19.5471 22.1852 17.9834 20.2412 17.9879C19.3909 18.0174 18.5883 18.4251 18.0186 19.1171C17.4489 19.809 17.1613 20.7254 17.2222 21.6547V34.3867ZM6.88887 34.3867H0V11.7521H6.88887V34.3867ZM3.44444 7.97967C1.54213 7.97967 0 6.2907 0 4.20724C0 2.12379 1.54213 0.434814 3.44444 0.434814C5.34675 0.434814 6.88887 2.12379 6.88887 4.20724C6.88887 5.20775 6.52598 6.16729 5.88002 6.87475C5.23406 7.58222 4.35796 7.97967 3.44444 7.97967Z"
                fill="#0A0A14"
              />
            </svg>
            <svg
              width="34"
              height="37"
              viewBox="0 0 34 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.9991 0.53003C8.66233 0.528862 1.55558 7.12108 0.22079 16.0936C-1.11399 25.0661 3.71732 33.7696 11.6271 36.6416C12.479 36.8088 12.7839 36.2385 12.7839 35.7481C12.7839 35.3078 12.7703 34.1412 12.7652 32.59C8.03715 33.7046 7.03872 30.1044 7.03872 30.1044C6.72747 28.9841 6.05832 28.0226 5.15261 27.3941C3.61919 26.2442 5.27018 26.2702 5.27018 26.2702C6.36176 26.4333 7.32249 27.1385 7.87188 28.1799C8.33691 29.1017 9.12036 29.783 10.0482 30.0721C10.976 30.3613 11.9713 30.2345 12.8129 29.7199C12.892 28.7799 13.2756 27.9014 13.8948 27.2417C10.1226 26.7754 6.15615 25.1853 6.15615 18.0833C6.13522 16.2464 6.76083 14.4707 7.90425 13.1214C7.3869 11.5225 7.44782 9.76878 8.07463 8.21714C8.07463 8.21714 9.50072 7.71743 12.7465 10.1138C15.5302 9.28161 18.4681 9.28161 21.2518 10.1138C24.4993 7.71557 25.9237 8.21714 25.9237 8.21714C26.5534 9.76805 26.6143 11.523 26.094 13.1214C27.2416 14.4705 27.8667 16.251 27.8387 18.0908C27.8387 25.2113 23.8689 26.7754 20.083 27.2343C20.8997 28.1447 21.3185 29.3936 21.2331 30.6636C21.2331 33.1417 21.2126 35.1406 21.2126 35.7481C21.2126 36.2441 21.5159 36.82 22.3832 36.6379C30.2896 33.761 35.1157 25.057 33.7782 16.0869C32.4407 7.11675 25.3342 0.52795 16.9991 0.53003Z"
                fill="#0A0A14"
              />
            </svg>
          </div>
          <div className="pb-16 lg:pb-0">
            Currently Freelancing for UX, UI, & Web Design Project. <br />{" "}
            Invite me to join your team -> pratamaiosi@gmail.com
          </div>
        </div>
      </div>
      <img
        className="mt-20 w-48 h-48 mx-auto object-cover rounded-[32px] shadow-[-20px_-20px_rgba(233,37,119,1)] lg:w-[341px] lg:h-[341px] lg:mt-9 lg:mx-0 lg:mr-8"
        src={require("../images/pp.jfif")}
      />
    </div>
  );
}

export default Header;
