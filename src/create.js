import React, { Component } from 'react'
import axios from "axios"

export class Create extends Component {
    constructor(props){
        super(props)
        this.state={
            productname:"",
            productprice:""
        }
        this.onChangeProductName= this.onChangeProductName.bind(this);
        this.onChangeProductPrice= this.onChangeProductPrice.bind(this);
        this.onSubmit= this.onSubmit.bind(this);
    }

    onSubmit(event){
        event.preventDefault();
        const serverport={
            productname: this.state.productname,
            productprice: this.state.productprice
        }
        axios.post("http://localhost:4001/serverport/add", serverport)
        .then((response)=>{
           console.log(response.data)
           alert(response.data)
        })
        this.setState({
            productname:"",
            productprice:""
        })
    }

    onChangeProductName(event){
        this.setState({
            productname: event.target.value
        })
    }
    onChangeProductPrice(event){
        this.setState({
            productprice: event.target.value
        })
    }

  render() {
    return (
      <div>
        <h2>Add Product</h2>
        <form onSubmit={this.onSubmit}>

            <div className="form-group">
            <label><h2>Product Name:</h2></label>
            <input type="text" value={this.state.productname}
            onChange={this.onChangeProductName} className="form-control"/>
            </div>

            <div className="form-group">
            <label><h2>Product Price:</h2></label>
            <input type="text" value={this.state.productprice} 
            onChange={this.onChangeProductPrice} className="form-control"/>
            </div>

            <div className="form-group">
            <input type="Submit" className="btn btn-primary" value="Add"/>
            </div>
        </form>
      </div>
    )
  }
}

export default Create
