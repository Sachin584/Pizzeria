// import { Component } from "react";
// import {Link} from 'react-router-dom';
// import PizzeriaLogo from "./images/PizzeriaLogo.png"


// class NavigationBar extends Component
// {
//     render(){
//         return(
//             <div>
//                 <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
//                     <ul class="navbar-nav ml-auto">

//                         <li class="nav-item">
//                             <Link to="/" class="nav-link waves-effect">
//                                 Pizzeria
//                             </Link>
//                         </li>
//                     </ul>

//                     <Link to="/" class="navbar-brand" >
//                         <img src={PizzeriaLogo} height="30" alt="mdb logo" />
//                     </Link>

//                     <div class="collapse navbar-collapse" id="basicExampleNav11">
//                         <ul class="navbar-nav ml-auto">
//                             <li class="nav-item">
//                                 <Link to="/orderPizza" class="nav-link waves-effect">
//                                     Order Pizza
//                                 </Link>
//                             </li>
//                             <li class="nav-item">
//                                 <a href="#!" class="nav-link waves-effect">
//                                     Build Ur Pizza
//                                 </a>
//                             </li>
//                         </ul>
//                     </div>
//                     <form class="form-inline my-2 my-lg-0">
//                         <button type="button" class="btn btn-warning">Shoping Cart</button>
//                     </form>
//                 </nav>
//              </div>
//         )
//     }
// }

// export default NavigationBar


import { Component } from "react";
import { Link } from "react-router-dom";
import PizzeriaLogo from "./images/PizzeriaLogo.png"

class NavigationBar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                    <Link to="/" class="navbar-brand" style={{ fontSize: "30px" }} >Pizzeria</Link>
                    <span style={{ fontSize: "50px", color: "GrayText" }}> </span>
                    <Link to="/" class="nav-link">
                        <img style={{ width: "80px" }} src={PizzeriaLogo} height="50" width="50" />
                    </Link>

                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to="/OrderPizza" class="nav-link">
                                Order Pizza
                            </Link>
                        </li>

                        <li class="nav-item">
                            <Link to="/buildPizza" class="nav-link">
                                Build Your Pizza
                            </Link>
                        </li>

                        <li class="nav-item">
                            <Link to="" class="nav-link">
                                Contact Us
                            </Link>
                        </li>

                        <li class="nav-item">
                            <Link to="" class="nav-link">
                                About Us
                            </Link>
                        </li>

                        <li class="nav-item">
                            <div class="bootstrap-dark">"At vero eos et accusamus et iusto odio dignissimos ducimus qui cket</div>
                        </li>
                    </ul>
                    <ul class="navbar-nav navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#" >
                                <Link to="/Cart">
                                    <button type="button" class="btn btn-warning">

                                        Shopping Cart
                                    </button>
                                </Link>
                            </a>
                        </li>
                    </ul>


                </nav>
            </div>
        )
    }
}

export default NavigationBar