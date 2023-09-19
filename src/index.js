import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = () => {
  return (
    <div className="header">
      <div className="logo-img">
        <img className='logo' src='https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=740'/>
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>

      </div>
    </div>
  )
}
//url=https://www.themealdb.com/images/category/
const Meal = [
    {
      "idCategory": "1",
      "strCategory": "Beef",
      "strCategoryThumb": "beef.png",
      "strCategoryDescription": "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]"
    },
    {
      "idCategory": "2",
      "strCategory": "Chicken",
      "strCategoryThumb": "chicken.png",
      "strCategoryDescription": "Chicken is a type of domesticated fowl, a subspecies of the red junglefowl. It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011."
    },
    {
      "idCategory": "3",
      "strCategory": "Dessert",
       "strCategoryThumb": "dessert.png",
      "strCategoryDescription": "Dessert is a course that concludes a meal. The course usually consists of sweet foods, such as confections dishes or fruit, and possibly a beverage such as dessert wine or liqueur, however in the United States it may include coffee, cheeses, nuts. "
    },
    {
      "idCategory": "4",
      "strCategory": "Lamb",
      "strCategoryThumb": "lamb.png",
      "strCategoryDescription": "Lamb, hogget, and mutton are the meat of domestic sheep (species Ovis aries) at different ages.\r\n\r\nA sheep in its first year is called a lamb, and its meat is also called lamb. The meat of a juvenile sheep older than one year is hogget;  "
    },
    {
      "idCategory": "5",
      "strCategory": "Miscellaneous",
      "strCategoryThumb": "miscellaneous.png",
      "strCategoryDescription": "General foods that don't fit into another category"
    },
    {
      "idCategory": "6",
      "strCategory": "Pasta",
      "strCategoryThumb": "pasta.png",
      "strCategoryDescription": "Pasta is a staple food of traditional Italian cuisine, with the first reference dating to 1154 in Sicily.\r\n\r\nAlso commonly used to refer to the variety of pasta dishes, pasta is typically a noodle made from an unleavened dough of a durum wheat flour mixed with water or eggs and formed into sheets or various shapes."
  },
 {
      "idCategory": "7",
      "strCategory": "Pork",
      "strCategoryThumb": "pork.png",
      "strCategoryDescription": "Pork is the culinary name for meat from a domestic pig (Sus scrofa domesticus). It is the most commonly consumed meat worldwide,[1] with evidence of pig husbandry dating back to 5000 BC. Pork is eaten both freshly cooked and preserved. Curing extends the shelf life of the pork products. Ham, smoked pork, gammon, bacon and sausage are examples of preserved pork."
    },
    {
      "idCategory": "8",
      "strCategory": "Seafood",
      "strCategoryThumb": "seafood.png",
      "strCategoryDescription": "Seafood is any form of sea life regarded as food by humans. Seafood prominently includes fish and shellfish. Shellfish include various species of molluscs, crustaceans, and echinoderms. Historically, sea mammals such as whales and dolphins have been consumed as food, though that happens to a lesser extent in modern times. Edible sea plants"
    },
    {
      "idCategory": "9",
      "strCategory": "Side",
      "strCategoryThumb": "side.png",
      "strCategoryDescription": "A side dish, sometimes referred to as a side order, side item, or simply a side, is a food item that accompanies the entrée or main course at a meal. Side dishes such as salad, potatoes and bread are commonly used with main courses throughout many countries of the western world. New side orders introduced within the past decade[citation needed],"
    },
    {
      "idCategory": "10",
      "strCategory": "Starter",
      "strCategoryThumb": "starter.png",
      "strCategoryDescription": "An entrée in modern French table service and that of much of the English-speaking world (apart from the United States and parts of Canada) is a dish served before the main course of a meal; it may be the first dish served, or it may follow a soup or other small dish or dishes. In the United States and parts of Canada, an entrée is the main dish or the only dish of a meal."
    },
]


  const RestaurentCard = (props) => {
  const {resData} = props
  return (
    <div className='card-items'>
      {/* <img className='img' src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + resData.restaurent.logo1} /> */}
      <img className='img' src={'https://www.themealdb.com/images/category/' + resData.strCategoryThumb} />
      
      <h3> { resData.idCategory}</h3>
      <h3>{resData.strCategory }</h3>
      <h3>{ resData.strCategoryDescription} </h3>
      <h3> </h3>
      
 
    </div>
  )
}
const Body = () => {
  return (
    <div className='body'>
      <div className='search'>
        <input type='text' />
        <button>Search</button>
      </div>
      <div className='res-container'>
        {Meal.map((res) => <RestaurentCard key={res.idCategory} resData={ res} />)}
      </div>
    </div>
  )
}
const Footer = () => {
  return (
    <div className='footer'>
      <p>copyright2018</p>
    </div>
  )
}
const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<AppLayout/>);