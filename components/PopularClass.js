import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
const PopularClass = () => {
  const service = [
    {
      img: "https://storage.googleapis.com/putatoeapp/Image/testImage/X0R1DJI",
      title: "Figma UI Ux Design",
      sub: "Lessons on design that cover the most recent developments.",
      promo: "design",
      rating: "4.5",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsbNxN5aTR8TZ9_I81E4H3Leljnrh1iK3NAa5ZyfBg8zRBmSpzfUgcuhu4NRbjg1MqfPM&usqp=CAU",
      title: "web  Development",
      sub: "Lessons on design that cover then most recent developments.",
      promo: "design",
      rating: "4.5",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSurf-tTDh7RlwHYw5hX5qLOha9J5_ZCyXSGJgHzBiPGOQ7br2uAIchKBtVgMogMZLiibU&usqp=CAU",
      title: "Marketing",
      sub: "Lessons on design that cover then most recent developments.",
      promo: "design",
      rating: "4.5",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzjLjGrkH3dWm11mzlhq-jxltD32pry1kJbEgB3yP5u_92pW8h2WOTaw0zALa7YWkKBac&usqp=CAU",
      title: "Marketing",
      sub: "Lessons on design that cover then most recent developments.",
      promo: "design",
      rating: "4.5",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuAU1S02jqK_fwjN0wKnsWrGvC12EUKp5YDnCayKiyoFHeoH3pOMYd2y6jegeiO96Vu6M&usqp=CAU",
      title: "Marketing",
      sub: "Lessons on design that cover then most recent developments.",
      promo: "design",
      rating: "4.5",
    },
 
  ];
  return (
    <div className="container mx-auto md:h-screen py-10 mb-40">
      <p className="text-lg text-purple-500  font-medium">All Products</p>
      <p className="text-3xl font-semibold  py-3">Our Most Popular Class</p>
      <p className="text-gray-500 text-base py-3">
        Lets join our famous class, the knowledge provided will definitely be
        useful for you.
      </p>
      <div className="mb-40 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-12 py-10">
        {service.map((ser, i) => {
          return (
            <div
              className="px-6 py-4 rounded-xl bg-gray-50 shadow-lg border border-gray-200 hover:bg-purple-600 group "
              key={i}
            >
              <img className="w-full" src={ser.img} alt="services" />
              {/* <p className="text-lg text-purple-600 group-hover:text-white capitalize py-2">
                {ser.promo}
              </p>
              <div className="flex justify-between items-center">
                <p className="text-2xl group-hover:text-white font-semibold line-clamp-1">
                  {ser.title}
                </p>
               <HiOutlineArrowUpRight className="group-hover:text-white text-lg font-semibold"/>
              </div>

              <p className="text-base group-hover:text-white pr-6 py-2">
                {ser.sub}
              </p>
              <div className="flex items-center gap-2 group-hover:text-white">
                <p>{ser.rating}</p>
                <img src="/assets/star.svg" alt="star" />
                <p>123</p>
              </div> */}
            <div className="flex justify-between py-2">
                {/* <div className="flex gap-3">
                    <img src="/assets/person.svg" alt="person" />
                    <div className="flex flex-col">
                        <p className="text-sm group-hover:text-white">Jimmy</p>
                        <p className="text-xs text-gray-500 group-hover:text-white">200 Enrolled</p>
                    </div>
                </div> */}
                {/* <p className="text-xl text-purple-600 group-hover:text-white font-semibold">$13.45</p> */}
            </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularClass;
