import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import RestCategory from "./RestCategory";
const RestMenu = () => {
  const [restMenu, setRestMenu] = useState(null);
  const [showIndex,setShowIndex] = useState(null)
  const { id } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + id);
    const json = await data.json();

    setRestMenu(json);
  };
  if (restMenu === null) return <Shimmer />;
  const { name, cuisines } = restMenu?.data?.cards[2]?.card?.card?.info;
  const itemCards =
    restMenu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards;
  // console.log(
  //   restMenu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  // );

  const categories =
    restMenu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-4xl">{name}</h1>
      <p className="font-bold text-xl">{cuisines.join(" , ")}</p>
      {categories.map((category, index) => (
        <RestCategory key={index}
         data={category?.card?.card}
         showItems={index===showIndex ? true :false}
         setShowIndex={()=>setShowIndex(index)} />

      ))}
    </div>
  );
};
export default RestMenu;

// return (
//   <div className="menu">
//     <h1>{name}</h1>
//     <p>{cuisines.join(",")}</p>
//     <h2></h2>
//     <ul>
//       {itemCards.map((item) => (
//         <li key={item?.card?.info?.id}>
//           {item?.card?.info?.name} - Rs:{item?.card?.info?.price / 100}
//         </li>
//       ))}
//     </ul>
//   </div>
// );
// import Shimmer from "./shimmer";
// import { useParams } from "react-router-dom";
// import useRestMenu from "../utils/useRestMenu";
// const RestMenu = () => {
//   const { id } = useParams();
//   const restMenu = useRestMenu(id);
//   console.log("Ku",restMenu)

//   if (restMenu === null) return <Shimmer />;
//   const { name, cuisines } = restMenu?.data?.cards[2]?.card?.card?.info;
//   const itemCards =
//     restMenu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
//       ?.card?.itemCards;

//   return (
//     <div className="menu">
//       <h1>{name}</h1>
//       <p>{cuisines.join(",")}</p>
//       <h2></h2>
//       <ul>
//         {itemCards.map((item) => (
//           <li key={item?.card?.info?.id}>
//             {item?.card?.info?.name} - Rs:{item?.card?.info?.price / 100}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// export default RestMenu;
