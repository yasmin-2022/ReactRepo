import { useEffect, useState } from "react";
import Shimmer from './Shimmer'
const RestauentCard = () => {
  const [List, setList] = useState(null);
  useEffect(() => {
    fetchMenu();
  },[])
  const fetchMenu = async () => {
    const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.6012849&lng=88.3312686&restaurantId=53171&catalog_qa=undefined&submitAction=ENTER]')
    
    const json = await data.json()
    setList(json.data)
    console.log(json)
  }
  if (List === null) {
    return <Shimmer />
  }
   const { name, cuisines, costForTwoMessage, avgRating } = List.cards[0]?.card?.card?.info;
   const { cards } = List?.cards[3]?.groupedCard?.cardGroupedMap?.REGULAR;
   console.log(cards)
  return (
    <div>
      <div className="container">
        {/* <h1>{ name}</h1>
        <h1>{ cuisines}</h1>
        <h1>{costForTwoMessage}</h1>
        <h1>{avgRating}</h1> */}


      </div>
    </div>
  )
}
export default RestauentCard;