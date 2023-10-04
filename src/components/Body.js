import Meal from '../utils/mokeDetails'
import RestaurentCard from './Restaurent'
import { useState, useEffect } from 'react'
import Shimmer from'./Shimmer'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'


const Body = () => {
  const [List,setList] = useState([])
  const [FilterRes,setFilterRes] = useState([])
  const [searchText, setSearchText] = useState("")
  console.log("Body Rerender")
  useEffect(()=>{
    fetchData()
  }, [])
  const fetchData = async() => {
    // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6012849&lng=88.3312686&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    // const json = await data.json()
    // console.log(json)
    setList(Meal)
    setFilterRes(Meal)
  }
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <div>
      <p>Look like some thing went wrong !!</p>
    <h1>Check Your Internet Connection</h1>
  </div> }
  return List.length === 0 ?<Shimmer /> :(
    <div className='body'>
      <div className='filter flex mt-4'>
        <div className='search '>
          <input className='mx-4  border border-solid border-black' value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
          <button className='searchBtn mr-4 bg-gray-200 px-4' onClick={() =>{

            console.log(searchText);
            const searchFiltered = List.filter((ele) => ele.strCategory.toLowerCase().includes(searchText.toLowerCase()));
            setFilterRes(searchFiltered)
          }
            
          
          }>Search</button>
       </div>
        <button className='filter-btn  mr-4 bg-gray-200 px-5 ' onClick={() => {
          let filtered = List.filter((res) => res.strCategoryRating > 4);
          console.log(filtered)
          setList(filtered)

        }}>TopRestaurant</button>
      </div>
      <div className='res-container flex flex-wrap text-center'>
          {FilterRes.map((res) =>
            <Link to={"/about"} key={res.idCategory}  >
            <RestaurentCard  resData={res} />
        </Link>
            )}
      </div>
    </div>
  )
}
export default Body;