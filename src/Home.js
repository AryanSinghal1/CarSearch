import React from "react";
import Card from "./Card";
import data from "./data.json";
import { useLocation, useParams } from "react-router-dom";

function Home() {
  const { pageNo } = useParams();
  const location = useLocation();
  const queryParam = new URLSearchParams(location.pathname);
  const term = queryParam.get("search");
  const startIndex = (parseInt(pageNo) - 1) * 2;
  const searchData = data.filter((x) => x.title.toLowerCase().includes(term));
  return (
    <div className="w-full h-[85%] rounded-3xl flex flex-wrap justify-between">
      {term ? (
        searchData.length ? (
          searchData.slice(startIndex, startIndex + 6).map((e) => {
            return (
              <Card
                image={e.image}
                title={e.title}
                seater={e.seater}
                fuel={e.Fuel}
                mileage={e.Mileage}
                transmission={e.Transmission}
                price={e.Price}
                year={e.Model}
              />
            );
          })
        ) : (
          <div className="w-full h-[90vh] flex justify-center items-center">
            <h1 className="text-3xl text-blue-600">No Results</h1>
          </div>
        )
      ) : (
        data.slice(startIndex, startIndex + 6).map((e) => {
          return (
            <Card
              image={e.image}
              title={e.title}
              seater={e.seater}
              fuel={e.Fuel}
              mileage={e.Mileage}
              transmission={e.Transmission}
              price={e.Price}
              year={e.Model}
            />
          );
        })
      )}
    </div>
  );
}

export default Home;
