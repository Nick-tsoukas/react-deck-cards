import React, { Component } from 'react';

//  first lets get the deck of cards its just an id 
class Deck extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    async componentDidMount(){
        console.log("The deck mounted")
    }

    render(){
        return((
            <div>
                <h2>This is the deck component What other components should deck have</h2>
            </div>
        ))
    }
}

export default Deck;