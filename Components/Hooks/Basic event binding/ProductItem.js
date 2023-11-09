import { useState } from "react"


export let ProductItem = () => {

    let [product, setProduct] = useState({
        id: 'AA123',
        image: 'NOT available',
        name: 'Philips Light',
        qty: 0,
        price: 550

    })

    let incrementQty = () => {
        setProduct({
            ...product,
            qty: product.qty += 1
        })
    }

    let decrementQty = () => {
        setProduct({
            ...product,
            qty: product.qty - 1 > 0 ? product.qty - 1 : 1
        })
    }


    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-primary">
                            Product Cart
                        </p>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsum in officia magni, eligendi sunt.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <table className="table table-hover text-center table-dark ">
                            <thead className="text-white">
                                <tr >
                                    <th>S.No.</th>
                                    <th>Name</th>
                                    <th>Image</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>Total Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.image}</td>
                                    <td>&#8377; {product.price}</td>
                                    <td><i onClick={decrementQty} className="fa fa-minus-circle mx-1" />
                                        {product.qty}
                                        <i onClick={incrementQty} className="fa fa-plus-circle mx-1" /></td>
                                    <td>{(product.price * product.qty).toFixed(2)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}