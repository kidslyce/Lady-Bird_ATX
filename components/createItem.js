class CreateItem extends React.Component {

    render = () => {
      return <div>
      <h2>Create Item</h2>
              <form onSubmit={this.props.createItem}>
                <input onChange={this.props.onInputChange} name="Item" value={this.props.Item} type="text"  placeholder="item"/><br/>
                <input onChange={this.props.onInputChange} name="Name" value={this.props.Name} type="text" placeholder="name"/><br/>
                <input onChange={this.props.onInputChange} name="Description" value={this.props.Description} type="text" placeholder="description"/><br/>
                <input onChange={this.props.onInputChange} name="Price" value={this.props.Price} type="number" placeholder="price"/><br/>
                <input onChange={this.props.onInputChange} name="Img" value={this.props.Img} type="text" placeholder="img"/><br/>
                <input onChange={this.props.onInputChange} name="Cat" value={this.props.Cat} type="text" placeholder="cat"/><br/>
                <input onChange={this.props.onInputChange} name="Qty" type="number" value={this.props.Qty} placeholder="qty"/><br/>
                <input onChange={this.props.onInputChange} name="Reord_Qty" value={this.props.Reord_Qty} type="number" placeholder="reord_qty"/><br/>
                <input type="submit" class="btn btn-outline-primary" value="Create Item"/>
              </form>
              <div className="modal fade" id="modalCart" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
   
      <div className="modal-header">
        <h4 className="modal-title" id="myModalLabel">Your cart</h4>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
   
      <div className="modal-body">

        <table className="table table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Product name</th>
              <th>Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Product 1</td>
              <td>100$</td>
              <td><a><i className="fas fa-times"></i></a></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Product 2</td>
              <td>100$</td>
              <td><a><i className="fas fa-times"></i></a></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Product 3</td>
              <td>100$</td>
              <td><a><i className="fas fa-times"></i></a></td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Product 4</td>
              <td>100$</td>
              <td><a><i className="fas fa-times"></i></a></td>
            </tr>
            <tr className="total">
              <th scope="row">5</th>
              <td>Total</td>
              <td>400$</td>
              <td></td>
            </tr>
          </tbody>
        </table>

      </div>
      
      <div className="modal-footer">
        <button type="button" className="btn btn-outline-primary" data-dismiss="modal">Close</button>
        <button className="btn btn-primary">Checkout</button>
      </div>
    </div>
  </div>
</div>
              </div>
               
    }

  }


  