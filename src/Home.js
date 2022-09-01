import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Homelogo1 from "./images/Homelogo1.png"

class Home extends Component {
    render() {
        return (
            <div>
                <a class="navbar-brand" href="#!">
                    <img width={1200} src={Homelogo1} class="img-fluid" alt="mdb logo" />
                </a>
            </div>
        )
    }
}

export default Home