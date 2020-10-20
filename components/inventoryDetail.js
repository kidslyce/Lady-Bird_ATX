class InventoryDetail extends React.Component{

    render = () => {
        return <div className="InventoryDetail">
<div class="card-body-title">
           <h2>Inventory</h2>
          </div>
            <ul>
                {
                    this.props.items.map((item) => {
                        return (
         <div key={item.id}>
         <details>
                                <summary>Click to Update</summary>
                                <div class="card-body1">
                                    <form id={item.id} onSubmit={this.props.updateItem}>
                                    <input onChange={this.props.onInputChange}  name="Item" value={this.props.Item} type="text" placeholder="item"/><br/>
                                    <input onChange={this.props.onInputChange} name="Name" value={this.props.Name} type="text" placeholder="name"/><br/>
                                    <input onChange={this.props.onInputChange} name="Description" value={this.props.Description} type="text" placeholder="description"/><br/>
                                    <input onChange={this.props.onInputChange} name="Price" value={this.props.Price}type="number" placeholder="price"/><br/>
                                    <input onChange={this.props.onInputChange} name="Img" value={this.props.Img}type="text" placeholder="img"/><br/>
                                    <input onChange={this.props.onInputChange} name="Cat" value={this.props.Cat}type="text" placeholder="cat"/><br/>
                                    <input onChange={this.props.onInputChange} name="Qty" type="number" value={this.props.Qty} placeholder="qty"/><br/>
                                    <input onChange={this.props.onInputChange} name="Reord_Qty" value={this.props.Reord_Qty} type="number" placeholder="reord_qty"/><br/>
                                    <input class="btn btn-danger" type="submit" value="Update Item"/>
                                </form>
                                </div>
                                </details>
                <table class="table">
                    <div class="card-body">
                        <thead>
                        <tr>

                        
                            <th class="table-head sku">Vendor</th>
                            <th class="table-head Item">Sku</th>
                            <th class="table-head cat">Name</th>
                            <th class="table-head qty">Description</th>
                            <th class="table-head reord_qty">Price</th>
                            <th class="table-head cat">cat</th>
                            <th class="table-head qty">qty</th>
                            <th class="table-head reord_qty">Reorder Qty</th>
                        </tr>
                        </thead>
                        <tbody>
                             <tr>
                               <td>{item.img}</td>
                               <td>{item.item}</td>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                                <td>{item.cat}</td>
                                <td>{item.qty}</td>
                                <td>{item.reord_qty}</td>
                                <button value={item.id} onClick={this.props.deleteItem} class="btn btn-danger">
                                    DELETE
                                </button>
                            </tr>
                        </tbody>
                    </div>
                </table>

                            </div>
                        )
                    })
                }
            </ul>
        </div>
    }

}
