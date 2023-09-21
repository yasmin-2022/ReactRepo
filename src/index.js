import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';







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