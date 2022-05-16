import React from "react";
import Spinner from '../compoments/Spinner';
import Menu from '../compoments/Menu';
import { GetHttp } from "../util/HttpCalls";
import '../App.css'

export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            loading: false,
            cart: [],
            total: 0
        }
    }

    componentDidMount() {
        this.loadData();
    }

    loadData = async () => {
        let self = this;
        self.setState({ loading: true });
        GetHttp("/showitems").then(results => {
            self.setState({ items: results });
        }).finally(() => {
            self.setState({ loading: false });
        });
    }

    addToCart = (item) => {
        const { cart,items } = this.state;
        //check is the item is already in the cart before adding 
        var existitem = cart.findIndex((item_, i)=>item_.id === item.id);
        if (existitem === -1) {
            item.quantity=1;
            this.setState({ cart: [...cart, item] });
        }else{
            cart[existitem].quantity=cart[existitem].quantity+1;
            this.setState({ cart: cart });
        }

        var found = items.findIndex((item_, i)=>item_.id === item.id);
        items[found].amountAvailable-=1;
        this.setState({ items: items });
    }

    resetCart=()=>{
        this.setState({cart:[]});
    }

    render() {
        const { loading, items, cart } = this.state;
        
        return (
            <div className="container">

                <div className="row menu">
                    <Menu cart={cart} />

                    <div className="col-10 offset-1">
                        <h3>Market Place</h3><hr />
                    </div>

                    <div className="col-10 offset-1">
                        {(loading === true) && <div className=" text-center"><Spinner fill="#222" bg="#fff" /></div>}
                        <div className="row">
                            {items.map((item, index) => {
                                return <div key={index} className="col-4">
                                    <div className="item-container"  data-testid="item-container">
                                        <div className="item-image">
                                            <img src={item.image} alt={item.name}/>
                                        </div>
                                        <div className="item-data">
                                            <h4>{item.name}</h4>
                                            <strong>&euro;{item.price}</strong><br />
                                            <span>Avaliable : {item.amountAvailable}</span>
                                            <p>{item.description}</p>
                                            <button onClick={() => this.addToCart(item)}>Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}