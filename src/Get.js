import React, { Component } from "react";
import axios from "axios";

export class Get extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serverports: []
    };
    this.deleteProduct= this.deleteProduct.bind(this);
    this.onChangeProductName= this.onChangeProductName.bind(this);
        this.onChangeProductPrice= this.onChangeProductPrice.bind(this);
    this.onSubmit= this.onSubmit.bind(this);
  }
  baseUrl = "http://localhost:4001/serverport";

  getproducts = () => {
    axios.get(this.baseUrl).then(response => {
      this.setState({ serverports: response.data });
    });
  };

  deleteProduct(id) {
    axios
      .delete("http://localhost:4001/serverport/deleteproduct/" + id)
      .then(res => {
        this.getproducts();
      });
  }

  UpdateProduct(id){
    this.setState({id:id})
     console.log(this.state.id)
   }

   onSubmit=(e)=>{
    e.preventDefault()
    const serverports = {
      productname: this.state.productname,
      productprice: this.state.productprice
     
    };
    axios.put(this.baseUrl+'/edit/'+ this.state.id, serverports).then(response=>{
      this.getproducts()
  
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

  componentDidMount() {
    this.getproducts();
  }
  render() {
    return (
      <div className="jumbotron">
        <table border="2">
          <thead>
            <tr>
              <td><h2>Product Name</h2></td>
              <td><h2>Product Price</h2></td>
            </tr>
          </thead>

          {this.state.serverports.map((obj,i) => <tbody>
              <tr key={i}>
                <td>{obj.productname}</td>
                <td>
                  {obj.productprice}
                  <button
                    className="btn btn-danger"
                    onClick={(e) => this.deleteProduct(obj._id)}>
                    X
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={(e)=> this.UpdateProduct(obj._id)}>
                    Edit
                  </button>
                </td>
                </tr>
              </tbody>
            
            )}
        </table>
        <h3>Update Product</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Add Product Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.productname}
              onChange={this.onChangeProductName} />
          </div>
          <div className="form-group">
            <label>Add Product Price: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.productprice}
              onChange={this.onChangeProductPrice}/>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Update"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Get;
