import Meal from '../utils/mokeDetails'
import RestaurentCard from './Restaurent'
import { useState } from 'react'


const Body = () => {
  const [List,setList] = useState(Meal)
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