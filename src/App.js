
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import OrderPizza from './OrderPizza';
import NavigationBar from './NavigationBar';
import BuildPizza from './BuildPizza';
import { useState } from 'react';
import Cart from './Cart';

function App(){
  const[cartProducts, setCounter] = useState([]);
  const changeState = (prod) =>{
    setCounter([...cartProducts, {...prod}]);
  }

  return(
    <div className="App">
      <Router>
        <NavigationBar />
        <div>
        <Route exact path="/" component={Home}/>    
        <Route exact path="/orderPizza" render={() => <OrderPizza changeState={changeState}/>}/>  {/*if we dont use exact here it will show home also here */}
        <Route exact path="/buildPizza" component={BuildPizza}/>
        <Route exact path="/Cart" render={() => <Cart changeState={changeState} cartProducts={cartProducts}/>}/>
        </div>
        </Router>
      </div>
);
}

export default App