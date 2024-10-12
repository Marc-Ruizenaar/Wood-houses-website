"use client";

import { useState } from "react";
import Image from "next/image";
import backgroundImage1 from "../../assets/house-1.jpeg";
import backgroundImage2 from "../../assets/house-2.jpg";
import backgroundImage3 from "../../assets/house-3.jpg";

const Slider = [
  {
    backgroundImage: backgroundImage1,
    title: "Chasing Dreams",
    adres: "New York",
    header: "Capturing moments, inspiring change for tomorrow",
    p: "The Luxora landing page embraces a modern and elegant design, highlighting vivid visuals and harmonious color schemes.",
    buttonText: "Discover more",
    buttonLink: "#",
  },
  {
    backgroundImage: backgroundImage2,
    title: "Embracing Adventure",
    adres: "San Francisco",
    header: "Creating memories, enhancing environments for the future",
    p: "The Luxora landing page showcases a sleek and sophisticated layout, emphasizing stunning imagery and gentle hues.",
    buttonText: "Explore further",
    buttonLink: "#",
  },
  {
    backgroundImage: backgroundImage3,
    title: "Finding Serenity",
    adres: "Miami",
    header: "Cherishing moments, shaping spaces for generations",
    p: "The Luxora landing page reflects a minimalist yet striking style, focusing on expansive visuals and soothing colors.",
    buttonText: "Learn more",
    buttonLink: "#",
  },
];

export default function GallerySlider() {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [slideOut, setSlideOut] = useState(false);
  const [slideIn, setSlideIn] = useState(false);

  const handleImageClick = () => {
    setSlideOut(true);
    setOpacity(0);
    setTimeout(() => {
      setSliderIndex((prevIndex) => (prevIndex + 1) % Slider.length);
      setOpacity(1);
      setTimeout(() => {
        setSlideOut(false);
        setSlideIn(true);
      }, 50);
    }, 500);
  };

  const handleButtonClick = (index) => {
    setSlideOut(true);
    setOpacity(0);
    setTimeout(() => {
      setSliderIndex(index);
      setOpacity(1);
      setTimeout(() => {
        setSlideOut(false);
        setSlideIn(true);
      }, 50);
    }, 500);
  };

  return (
    <div className="flex h-[calc(100vh-81px)] flex-col justify-between py-10">
      <div id="sliderContent">
        <div className="absolute top-0 -z-10 h-full w-full bg-black/50"></div>

        <div id="imageHolder" onClick={handleImageClick}>
          <Image
            src={Slider[sliderIndex].backgroundImage}
            alt=""
            width={500}
            height={300}
            className="absolute top-0 -z-20 h-screen w-screen object-cover transition-opacity duration-500"
            style={{ opacity }}
          />
        </div>

        <div className="container mx-auto mt-5 flex items-center md:mt-14">
          <div
            className={`flex w-full transform flex-col gap-5 px-5 transition-transform duration-500 md:w-7/12 ${slideOut ? "-translate-x-[200%]" : "translate-x-0"}`}
          >
            <h1 className="text-3xl font-bold md:text-4xl">
              {Slider[sliderIndex].header}
            </h1>
            <p>{Slider[sliderIndex].p}</p>
            <a
              aria-label={Slider[sliderIndex].buttonText}
              className="w-max rounded-full bg-white px-6 py-2 text-black"
              href={Slider[sliderIndex].buttonLink}
            >
              {Slider[sliderIndex].buttonText}
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-4 flex flex-col gap-4 px-5">
        <div
          id="amount"
          className="flex items-center justify-between gap-4 md:justify-start"
        >
          <p>{String(sliderIndex + 1).padStart(2, "0")}</p>
          <div className="relative flex w-full md:w-auto">
            <span
              className={`absolute top-1/2 z-10 h-1 w-${sliderIndex + 1}\/3 -translate-y-1/2 transform rounded bg-white transition-all`}
            ></span>
            <span className="h-1 w-full rounded bg-slate-400 md:w-80"></span>
          </div>
          <p>03</p>
        </div>

        <div id="sliders" className="flex gap-5">
          {Slider.map((item, index) => (
            <button
              aria-label={item.title}
              key={index}
              className="flex items-center justify-center rounded border-1 text-left backdrop-blur-md transition-transform duration-500 focus:scale-110 md:p-3"
              onClick={() => handleButtonClick(index)}
            >
              <Image
                src={item.backgroundImage}
                alt=""
                width={75}
                height={75}
                className="rounded object-cover"
              />
              <div className="hidden px-5 md:block">
                <h2 className="font-bold">{item.title}</h2>
                <p className="text-sm">{item.adres}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
