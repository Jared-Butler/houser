import React, { Component } from 'react';
import House from './../House/House';
import axios from 'axios';

export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            houses: []
        }
    }

    componentDidMount() {

        axios.get('/api/houses')
        .then( res => this.setState({houses: res.data}))
    };

    

    render() {
        return (
            <div>
                <h2>Dashboard Component</h2>
                {this.state.houses.map((house, i) => {
                    return (house.name)
                })}
                <button>Create New Property</button>
            </div>
        )
    }
};
