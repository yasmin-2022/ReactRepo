import { CDN_URL } from "../utils/contants";
const RestaurentCard = (props) => {
  const {resData} = props
  return (
    <div className='card-items'>
     
      <img className='img' src={CDN_URL+ resData.strCategoryThumb} />
      
      <h3> { resData.idCategory}</h3>
      <h3>{resData.strCategory }</h3>
      <h3>{resData.strCategoryRating }</h3>
      
 
    </div>
  )
}
export default RestaurentCard;