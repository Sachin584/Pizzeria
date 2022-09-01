import React, { Component } from 'react'
import axios from 'axios'
import { Card, Form, Col, Container, Button, Table } from 'react-bootstrap'
export default class BuildPizza extends Component {
    constructor() {
        super()
        this.state = {
            buildData: [],
            totalPrice: 0
        }
        this.handleCheck = this.handleCheck.bind(this)
    }
    componentDidMount() {
        axios.get("http://localhost:7000/buildPizza").then((response) => {
            this.setState({
                buildData: response.data
            })
            console.log(this.state.buildData)
        })
    }
    handleCheck = (e) => {
        var checkIfTrueOrFalse = e.target.checked
        console.log(checkIfTrueOrFalse)
        var checkedvalue = +(e.target.value)
        if (checkIfTrueOrFalse) {
            this.setState({
                totalPrice: this.state.totalPrice + checkedvalue
            })
        } else {
            this.setState({
                totalPrice: this.state.totalPrice - checkedvalue
            })
        }
    }
    render() {
        var mappedIngredients = this.state.buildData.map((item) => (
            // <Container align="center">
            <tr key={item.id}>
                <td style={{ width: "150px" }}>
                    <Col xs={10} md={10}>
                        <Card.Img variant="top" src={item.image} />
                    </Col>
                </td>
                <td style={{ width: "150px" }}>{item.tname}</td>
                <td style={{ width: "150px" }}> {"\u20b9"}{item.price}</td>
                <td style={{ width: "150px" }}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Add" value={item.price} onChange={(e) => this.handleCheck(e)} />
                    </Form.Group>
                </td>
            </tr>
            // </Container>
        ));
        return (
            <div>
                <h4 style={{ textAlign: "center" }}> Chose ingredients to add in your pizza
                </h4>
                <Container align="center">
                    <table class="table-bordered">
                        <tbody>{mappedIngredients}</tbody>
                    </table>
                    <div style={{ margin: "20px" }}>
                        <span style={{ color: "green" }}>Total Price :</span>{" "}
                        <strong>{this.state.totalPrice}</strong>
                    </div>
                    <Button>Build Ur Pizza</Button>
                </Container>
            </div>
        )
    }
}