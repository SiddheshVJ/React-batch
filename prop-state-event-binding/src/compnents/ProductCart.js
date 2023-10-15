import React from "react";

class ProductCart extends React.Component {

    constructor(pros) {
        super(pros);

        this.state = {
            product: {
                id: 'AA101',
                image: 'https://m.media-amazon.com/images/I/41xT7Z2t85L._SY445_SX342_QL70_FMwebp_.jpg',
                name: ' Philips Bulb',
                quantity: 1,
                price: 250
            }
        }
    }

    increQty = () => {
        this.setState({
            product: {
                ...this.state.product,
                quantity: this.state.product.quantity + 1
            }
        })
    }

    decreQty = () => {
        this.setState({
            product: {
                ...this.state.product,
                quantity: (this.state.product.quantity - 1) > 0 ? this.state.product.quantity - 1 : 1
            }
        })
    }

    render() {
        let { id, image, name, quantity, price } = this.state.product
        return (
            <>
                <div className="container mt-5 text-center">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-primary">
                                Product Cart
                            </p>
                            <p className="lead">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eius cupiditate sit nulla. Cupiditate, cumque!
                            </p>
                        </div>
                    </div>
                    {/* {JSON.stringify(this.state.product)} */}
                    <div className="row">
                        <div className="col">
                            <table className="table-striped table-lght table table-hover text-center">
                                <thead className="bg-dark text-danger">
                                    <tr>
                                        <th>Sr. No.</th>
                                        <th>Image</th>
                                        <th>Product Name</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{id}</td>
                                        <td><img src={image} height='70' width='70' alt="" /></td>
                                        <td>{name}</td>
                                        <td>&#8377; {price.toFixed(2)}</td>
                                        <td>
                                            <i onClick={this.decreQty} className="mx-2 fa fa-minus-circle" />
                                            {quantity}
                                            <i onClick={this.increQty} className="mx-2 fa fa-plus-circle" />
                                        </td>
                                        <td> &#8377;{(quantity * price).toFixed(2)}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default ProductCart;