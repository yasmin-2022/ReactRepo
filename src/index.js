import React,{lazy,Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Create from './components/Create';
import RestaurentCard from './components/RestaurentCard';
// import Grocery from './components/Grocery';

import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
const Grocery = lazy(() => import("./components/Grocery"));
const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  )
}
const appRouter = createBrowserRouter([{
  path: '/',
  element: <AppLayout />,
  children: [ 
  {
      path: "/",
      element:<Body />
    },
    {
      path: "/about",
      element:<About />
    },
  {
      path: "/create",
      element:<Create />
    },
    {
      path: "/Restaurent/:resId",
      element:<RestaurentCard/>
    },
     {
      path: "/grocery",
      // element:<Grocery/>
      element: <Suspense fallback = {<h1>Loading...</h1>}><Grocery/></Suspense>
  },
  ]
},
]

)

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<RouterProvider router={appRouter}/>);