import React, { useEffect, useContext} from 'react';
import '../App.css';
import { csv } from 'd3';
import data from '../assets/products.csv';
import { GlobalContext } from '../context/GlobalContext';
import { useState } from 'react';

function Products() {
    const { AddItem, cartItemsUnique, AddStockItems, stockItems, firstLoad, FirstLoaded } = useContext(GlobalContext);
    const [category, setCategory] = useState("Formal");
    useEffect(() => {
        csv(data, function (d) {
            return {
                id: d.ID,
                product: d.Product,
                cost: +d.Cost,
                qty: +d.Quantity,
                img: d['Image'],
                hovImg: d['Hover Image'],
                color: d.Color,
                catg: d.Category
            };
        }).then(function (data) {
            console.log(firstLoad)
            if (firstLoad) {
                AddStockItems(data);
                FirstLoaded();
            }
        });// eslint-disable-next-line
    }, [])
      
    const addCartItem = (item) => {
        if (item.qty > 0) {
            AddItem(item)
        }
    }

    return (
        <div className="container product-container">
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <h3 className="products-title">{"PRODUCTS: " + category}</h3>
                <div class="form-group">
                    <label style={{width:'fit-content'}} for="sel1">Select Category</label>
                    <select class="form-control" id="sel1" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option>Formal</option>
                        <option>Casual</option>
                        <option>Peshawari</option>
                        <option>Sports</option>
                        <option>Chappal</option>
                    </select>
                </div>
            </div>
            <div className="row">
                {(stockItems.filter(a=> a.catg === category)).map(item => <div key={"product00" + item.id} className="col-lg-3 col-md-6 col-12">
                    <div className="card product-card">
                        
                        <img className="card-img-top product-image" src={"http://"+item.img+"_350x.jpg"} alt="Shoe Card" />
                        
                        <div className="card-body product-card-body" >
                            <div style={{ display: 'flex', justifyContent: 'space-between', verticalAlign: 'center' }}>
                                <p className="card-title product-text">{item.product}</p>
                                <p className="card-text product-cost">{"$" + item.cost}</p>
                            </div>
                            <div>
                                <p style={{ textAlign: 'left', fontWeight: 'bold', fontStyle: 'italic', marginBottom: '5pt', marginTop: 0, padding: 0, fontSize: 'small' }}>{item.color}</p>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 0 }}>
                                <p style={{ textAlign: 'left', marginBottom: '2pt', fontSize: 'small' }}>{"In Stock: " + item.qty}</p>
                                <p onClick={() => addCartItem(item)} className="btn btn-primary add-to-cart-btn">{"Add to Cart" + (cartItemsUnique.filter(a => { return (a.item.id === item.id) })[0] === undefined ? "" : " +" + (cartItemsUnique.filter(a => { return (a.item.id === item.id) })[0].cqty))}</p>
                            </div>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
}

export default Products;
