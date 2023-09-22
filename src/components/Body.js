import Meal from '../utils/mokeDetails'
import RestaurentCard from './Restaurent'
import { useState,useEffect } from 'react'


const Body = () => {
  const [List,setList] = useState(Meal)
  useEffect(()=>{
    fetchData()
  }, [])
  const fetchData = async() => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6012849&lng=88.3312686&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json()
    console.log(json)
  }
  return (
    <div className='body'>
      <div className='filter'>
        <button className='filter-btn ' onClick={() => {
          let filtered = List.filter((res) => res.strCategoryRating > 4);
          console.log(filtered)
          setList(filtered)

        }}>TopRestaurant</button>
      </div>
      <div className='res-container'>
        {List.map((res) => <RestaurentCard key={res.idCategory} resData={ res} />)}
      </div>
    </div>
  )
}
export default Body;