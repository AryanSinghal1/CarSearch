import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";

function Footer() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParam = new URLSearchParams(location.pathname);
  const term = queryParam.get("search");
  const pageNo = location.pathname[6];
  const gotoPage = (e) => {
    const pageLink = term ? `/page/${e}&search=${term}` : `/page/${e}`;
    navigate(pageLink);
  };
  const prevPage =
    pageNo > 1
      ? term
        ? `/page/${parseInt(pageNo) - 1}&search=${term}`
        : `/page/${parseInt(pageNo) - 1}`
      : location.pathname;
  const nextPage =
    pageNo < 10
      ? term
        ? `/page/${parseInt(pageNo) + 1}&search=${term}`
        : `/page/${parseInt(pageNo) + 1}`
      : location.pathname;
  return (
    <div className="w-full h-[7%] shadow-md rounded-3xl flex justify-center items-center">
      <div className="h-[50%] w-[97%] flex justify-between items-center">
        <p className="text-md">6 from 100</p>
        <div className="h-full w-[40%] flex justify-between items-center">
          <div className="w-8 h-8 bg-white rounded-xl flex justify-center items-center">
            <a href={prevPage}>
              <AiOutlineArrowLeft className="w-4 h-4" />
            </a>
          </div>
          <div
            onClick={() => gotoPage(1)}
            className="w-8 h-8 hover: cursor-pointer bg-white rounded-xl flex justify-center items-center"
          >
            <p className="font-semibold text-md">1</p>
          </div>
          <div
            onClick={() => gotoPage(2)}
            className="w-8 h-8 hover: cursor-pointer bg-white rounded-xl flex justify-center items-center"
          >
            <p className="font-semibold text-md">2</p>
          </div>
          <div
            onClick={() => gotoPage(3)}
            className="w-8 h-8 hover: cursor-pointer bg-white rounded-xl flex justify-center items-center"
          >
            <p className="font-semibold text-md">3</p>
          </div>
          <div
            onClick={() => gotoPage(4)}
            className="w-8 h-8 hover: cursor-pointer bg-white rounded-xl flex justify-center items-center"
          >
            <p className="font-semibold text-md">4</p>
          </div>
          <div
            onClick={() => gotoPage(5)}
            className="w-8 h-8 hover: cursor-pointer bg-white rounded-xl flex justify-center items-center"
          >
            <p className="font-semibold text-md">5</p>
          </div>
          <div
            onClick={() => gotoPage(6)}
            className="w-8 h-8 hover: cursor-pointer bg-white rounded-xl flex justify-center items-center"
          >
            <p className="font-semibold text-md">6</p>
          </div>
          <div
            onClick={() => gotoPage(7)}
            className="w-8 h-8 hover: cursor-pointer bg-white rounded-xl flex justify-center items-center"
          >
            <p className="font-semibold text-md">7</p>
          </div>
          <div
            onClick={() => gotoPage(8)}
            className="w-8 h-8 hover: cursor-pointer bg-white rounded-xl flex justify-center items-center"
          >
            <p className="font-semibold text-md">8</p>
          </div>
          <div
            onClick={() => gotoPage(9)}
            className="w-8 h-8 hover: cursor-pointer bg-white rounded-xl flex justify-center items-center"
          >
            <p className="font-semibold text-md">9</p>
          </div>
          <div
            onClick={() => gotoPage(10)}
            className="w-8 h-8 hover: cursor-pointer bg-white rounded-xl flex justify-center items-center"
          >
            <p className="font-semibold text-md">10</p>
          </div>
          <div className="w-8 h-8 bg-white rounded-xl flex justify-center items-center">
            <a href={nextPage}>
              <AiOutlineArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
