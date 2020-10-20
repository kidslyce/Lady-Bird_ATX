class CreateItem extends React.Component {


    render = () => {
      return <div className="CreateItem">
              <div class="card-body">
              
                <form onSubmit={this.props.createItem}>
                  <input onChange={this.props.onInputChange} name="Item" value={this.props.Item} type="text"  placeholder="item"/><br/>
                  <input onChange={this.props.onInputChange} name="Name" value={this.props.Name} type="text" placeholder="name"/><br/>
                  <input onChange={this.props.onInputChange} name="Description" value={this.props.Description} type="text" placeholder="description"/><br/>
                  <input onChange={this.props.onInputChange} name="Price" value={this.props.Price} type="number" placeholder="price"/><br/>
                  <input onChange={this.props.onInputChange} name="Img" value={this.props.Img} type="text" placeholder="vendor num"/><br/>
                  <input onChange={this.props.onInputChange} name="Cat" value={this.props.Cat} type="text" placeholder="cat"/><br/>
                  <input onChange={this.props.onInputChange} name="Qty" type="number" value={this.props.Qty} placeholder="qty"/><br/>
                  <input onChange={this.props.onInputChange} name="Reord_Qty" value={this.props.Reord_Qty} type="number" placeholder="reord_qty"/><br/>
                  <input type="submit" class="btn btn-secondary" value="Add Item"/>
                </form>
              </div>
            </div>
    }

  }
