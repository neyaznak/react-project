import RestaurantCard from "../components/RestaurantCard";
import resList from "../src/utils/mockData";
import { useState } from "react";

const Body = () => {

  

    //Local State Variable - Super Powerful Variable
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

    return (
      <div className="body">
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setListOfRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="res-container">
          {listOfRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>

        

      </div>
    );
  };
  export default Body;