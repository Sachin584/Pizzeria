import { Component, useState } from "react";
import axios from "axios"
import { Card, Col, Row } from "react-bootstrap";
import { Button } from 'react-bootstrap';



class OrderPizza extends Component {
    constructor() {
        super();
        this.state = {
            pizzasdata: [],
            selectedItems: []
        }

    }
    componentDidMount() {
        axios.get("http://localhost:7000/orderPizza")
            .then((res) => {
                this.setState({
                    pizzasdata: res.data
                })
            })

    }
    handleClick = (pizza) => {
        this.state.selectedItems.push(pizza)
        console.log("list is " + this.state.selectedItems)
    }


    render() {
        var data = <Row xs={1} md={3} className="g-0">
            {this.state.pizzasdata.map((pizza, id) =>
                <Col key={id}>
                    <Card className="cardContainer"  >
                        <Card.Img className="pizzaImage" variant="top" src={pizza.image} />
                        <Card.Body style={{ 'textAlign': 'center' }}>
                            {/* <img id="type" src={pizza.type == 'veg'} /> */}
                            <Card.Title>{pizza.name}</Card.Title>
                            <Card.Text>
                                {pizza.description}
                            </Card.Text>
                            <Card.Text>
                                <strong>ingredients</strong>: {pizza.ingredients.map((i) => (i + ","))}
                            </Card.Text>

                            <Card.Text>
                                <Card.Text>
                                    <strong>Topping</strong>: {pizza.topping.map((i) => (i + ","))}
                                </Card.Text>

                                <strong>Price</strong> : {"\u20b9"}{pizza.price}
                            </Card.Text>
                            <Button variant="warning" onClick={() => this.props.changeState(pizza)}>Add to Cart</Button>
                        </Card.Body>
                    </Card>
                </Col>
            )}
        </Row>
        return (
            <div className="box">
                {data}
            </div>
        )
    }
}

export default OrderPizza