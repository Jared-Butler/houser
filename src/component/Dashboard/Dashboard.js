import React, { Component } from 'react';
import House from './../House/House';

export default class Dashboard extends Component{
    constructor(){
        super();
        this.state = {
            houses:[]
        }
    }


    render(){
        return(
            <div>
                <h2>Dashboard Component</h2>
                <House/>
                <button>Create New Property</button>
            </div>
        )
    }
};
