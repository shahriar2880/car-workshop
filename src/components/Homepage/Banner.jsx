import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className=" container mx-auto">
      <div className="carousel w-full mt-2">
        {banners.map((banner, index) => (
          <div
            style={{
              backgroundImage: `linear-gradient(45deg, rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(/assets/images/banner/${
                index + 1
              }.jpg)`,
            }}
            key={index}
            id={`slide${index + 1}`}
            className="carousel-item relative w-full h-[80vh] bg-top bg-no-repeat"
          >
            <div className="h-full w-full flex items-center pl-36 text-white">
              <div className="space-y-6">
              <h1 className="text-5xl font-bold">{banner.title}</h1>
              <p>{banner.description}</p>
              <button className="btn btn-primary mr-4">Discover More</button>
              <button className="btn btn-primary btn-outline">Latest Project</button>
              </div>
            </div>
            <div className="absolute flex transform justify-between bottom-12 right-12">
              <a href={banner.prev} className="btn btn-circle mr-6">
                ❮
              </a>
              <a href={banner.next} className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const banners = [
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of available, but the major",
    next: "#slide2",
    prev: "#slide4",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of available, but the major",
    next: "#slide3",
    prev: "#slide1",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of available, but the major",
    next: "#slide4",
    prev: "#slide2",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of available, but the major",
    next: "#slide1",
    prev: "#slide3",
  },
];

export default Banner;
