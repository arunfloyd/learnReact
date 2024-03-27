import useOnlineStatus from "../utils/useOnlineStatus";
import ResturantCard, { withPromotedLabel } from "./ResturantCard";
import Shimmer from "./shimmer";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
const Body = () => {
  //Local state Variable -Super Powerful variable
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filterRes, setFilterRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(ResturantCard);

  //when this call back function called is after the render
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.21890&lng=75.72680&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    var dater =
      json?.data?.cards[2]?.card?.card.gridElements.infoWithStyle.restaurants;
    setListOfRestaurant(
      json?.data?.cards[2]?.card?.card.gridElements.infoWithStyle.restaurants ||
        []
    );
    console.log(dater);
    setFilterRes(
      json?.data?.cards[2]?.card?.card.gridElements.infoWithStyle.restaurants ||
        []
    );
  };

  //Conditional Rendering
  // if(listOfRestaurant.length ===0){
  //   return <Shimmer/>
  // }

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1> Oho !!! Check Your Connection </h1>;
  }

  const { loggedInUser,setUserName } = useContext(UserContext);

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4 rounded-lg">
          <input
            type="text"
            data-testid= "searchInput"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-300 m-4 rounded-xl"
            onClick={() => {
              //Filter the restraunt cards and update UI
              // SearchText
              const filterRes = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterRes(filterRes);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurant.filter(
                (res) => res.info.avgRating > 4.2
              );
              setFilterRes(filteredList);
            }}
          >
            Top Rated Resturants
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <label>UserName : </label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      {/* <div className="flex flex-wrap">
        {filterRes.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/rest/" + restaurant.info.id}>
            
            <ResturantCard resData={restaurant} />
          </Link>
        ))}
      </div> */}
      <div className="flex flex-wrap">
        {filterRes.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/rest/" + restaurant.info.id}>
            {restaurant.info.ids ? (
              <RestaurantCardPromoted restaurant={restaurant} />
            ) : (
              <ResturantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
