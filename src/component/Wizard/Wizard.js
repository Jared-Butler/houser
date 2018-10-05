import React, { Component } from 'react';

class Wizard extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 10000
        }
    };

     handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
        // console.log(this.state.name);
    };
    handleAddressChange = (event) => {
        this.setState({
            address: event.target.value
        })
        // console.log(this.state.address);
    };
    handleCityChange = (event) => {
        this.setState({
            city: event.target.value
        })
        // console.log(this.state.city);
    };
    handleStateChange = (event) => {
        this.setState({
            state: event.target.value
        })
        // console.log(this.state.state);
    };
    handleZipChange = (event) => {
        this.setState({
            zipcode: event.target.value
        })
        // console.log(this.state.zipcode);
        // console.log(this.state);
    };

    render() {
        return (
            <div>
                <h2>Wizard Component</h2>
                <input placeholder='Name' onChange={this.handleNameChange} />
                <input placeholder='Address' onChange={this.handleAddressChange}/>
                <input placeholder='City' onChange={this.handleCityChange}/>
                <input placeholder='State' onChange={this.handleStateChange}/>
                <input placeholder='Zipcode' onChange={this.handleZipChange}/>
                <button>Submit</button>
                <button>Cancel</button>
            </div>
        )
    }
};

export default Wizard;