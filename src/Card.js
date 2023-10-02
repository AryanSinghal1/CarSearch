import React from "react";
import { LuFuel } from "react-icons/lu";
import { GoPeople } from "react-icons/go";
import { BsSpeedometer } from "react-icons/bs";
import { PiSteeringWheelBold } from "react-icons/pi";
import { FaMinus } from "react-icons/fa";
import { FaMinus as Fa6Minus } from "react-icons/fa6";

function Card(props) {
  return (
    <div className="w-[32%] h-[47%] shadow-lg bg-gradient-to-b from-slate-300 to-slate-200 rounded-2xl flex justify-center items-center">
      <div className="w-[95%] h-[95%]">
        <div className="w-full relative h-1/2 rounded-xl overflow-hidden">
          <img className="w-full h-full" src={props.image}></img>
          <div className="w-full h-[15%] absolute bottom-0 flex justify-center items-center">
            <FaMinus color="white" className="w-5 h-5" />
            <Fa6Minus color="gray" className="w-5 h-5" />
            <Fa6Minus color="gray" className="w-5 h-5" />
          </div>
        </div>
        <div className="w-[95%] m-auto h-1/2">
          <div className="w-full h-3/4 flex justify-center items-center">
            <div className="w-full h-4/5">
              <div className="w-full h-1/3 flex justify-between items-center">
                <h2 className="text-2xl font-medium">{props.title}</h2>
                <div className="px-4 h-[70%] border-2 border-blue-500 border-dashed rounded-lg flex justify-center items-center">
                  <p>{props.year}</p>
                </div>
              </div>
              <div className="w-full h-2/3 flex flex-wrap">
                <div className="w-1/2 h-1/2 flex items-center">
                  <GoPeople color="blue" className="w-5 h-5" />
                  <p className="mx-1">{props.seater} People</p>
                </div>
                <div className="w-1/2 h-1/2 flex items-center">
                  <LuFuel color="blue" className="w-5 h-5" />
                  <p className="mx-1">{props.fuel}</p>
                </div>
                <div className="w-1/2 h-1/2 flex items-center">
                  <BsSpeedometer color="blue" className="w-5 h-5" />
                  <p className="mx-1">{props.mileage}Km / 1-litre</p>
                </div>
                <div className="w-1/2 h-1/2 flex items-center">
                  <PiSteeringWheelBold color="blue" className="w-5 h-5" />
                  <p className="mx-1">{props.transmission}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-1/4 border-t border-slate-400 flex justify-between items-center">
            <p className="text-2xl">
              ${props.price} <span className="text-lg">/month</span>
            </p>
            <div className="w-[40%] h-full flex justify-between items-center">
              <div className="w-10 h-10 bg-blue-200 flex rounded-xl items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="blue"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </div>
              <button className="w-[70%] h-[70%] rounded-xl bg-blue-500 text-white">
                Rent Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
