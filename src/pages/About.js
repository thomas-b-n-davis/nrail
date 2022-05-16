import React from "react";
import Menu from '../compoments/Menu';
import '../App.css'

export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cart:[]
        }
    }

    render() {
        const {cart}=this.state;
        
        return (
            <div className="container">

                <div className="row menu">
                    <Menu cart={cart}/>
                    <div className="col-10 offset-1">
                        <h3>About Us</h3><hr />
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}