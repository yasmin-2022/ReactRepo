import { CDN_URL } from "../utils/contants";
const RestaurentCard = (props) => {
  const {resData} = props
  return (
    <div className='m-4 p-4 w-[270px] bg-gray-200'>
     
      <img className='img border border-solid  ' src={CDN_URL+ resData.strCategoryThumb} />
      
      <h3 className="font-bold"> { resData.idCategory}</h3>
      <h3 className="font-bold">{resData.strCategory }</h3>
      <h3>{resData.strCategoryRating }</h3>
      
 
    </div>
  )
}
export default RestaurentCard;