import React from "react";

const Hero = () => {
  return (
    <div className="container mx-auto ">
      <div className="flex flex-col md:flex-row justify-between items-center py-10">
        <div className="flex flex-col gap-4">
          <p className="text-6xl capitalize font-semibold">
          Holistic   business 
            <span className="text-purple-500 pl-2 capitalize">services</span>{" "}
            <br /> from  {" "}
            <span className="text-purple-500 pl-2 capitalize">fingertips  </span>{" "}
            to your <br />{" "}
            <span className="text-purple-500 pl-2 capitalize">footsteps </span> 
          </p>
          <p className="text-lg text-gray-600">
          Putatoe enables direct customer-service provider interactions{" "}
            <br />
            through a user-friendly interface, allowing easy appointment scheduling.
          </p>
          <div className="flex gap-4">
            <button className="btn bg-purple-500 border-none capitalize btn-lg">
              Get Started
            </button>
            {/* <button className="btn bg-purple-100 text-purple-500 border-none capitalize btn-lg ">
              Get Free Trial
            </button> */}
          </div>
          <div className="flex gap-6 items-center pt-20">
            <div className="flex gap-2 items-center">
                <img src="/assets/public.svg" alt="" />
                <p>Recharge </p>
            </div>
            <div className="flex gap-2 items-center">
                <img src="/assets/career.svg" alt="" />
                <p>Bill Payments</p>
            </div>
            <div className="flex gap-2 items-center">
                <img src="/assets/think.svg" alt="" />
                <p>Financial services and Taxes</p>
            </div>
          </div>
        </div>

        <img src="https://www.onlinekkrecharge.in/assets/new_outside_template_things/images/services/mobile-recharge.png" alt="" />
      </div>
      {/* <img src="/assets/company.svg" alt="" /> */}
    </div>
  );
};

export default Hero;
