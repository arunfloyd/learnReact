import { CDN_URL } from "../utils/constants";
const ResturantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info;

  return (
    <div data-testid="resCard" className="m-4 p-4 w-[280px] h-[400px] bg-green-100 hover:bg-green-250">
      <img
        className="rounded-lg text-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4">{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};
///Higher order Component

//input - RestaurantCard ==>> RestaurantCardPromoted

export const withPromotedLabel = (ResturantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <ResturantCard {...props}/>
      </div>
    );
  };
};

export default ResturantCard;
