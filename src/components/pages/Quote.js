import React from 'react';
//import {useState} from 'react';
import '../../App.css';
import './Quote.css';
import Axios from 'axios';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

function Map() {
    return <GoogleMap defaultZoom={10} defaultCenter={{lat: 43.186008, lng:-95.845001}}/>;
}

const WrappedMap = withScriptjs(withGoogleMap(Map)); 


export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            phoneNumber: '',
            serviceType: 'pad',
            address: '',
            comments: ''
        };
        
        this.onServiceOptionChange = this.onServiceOptionChange.bind(this);
        
    }
   
      
    change = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();
      
        //console.log("You have submitted:", this.state["serviceType"], this.state["firstName"],this.state["email"],this.state["comments"]);

        Axios.post('http://localhost:3002/create', {
            firstName: this.state["firstName"], 
            lastName: this.state["lastName"], 
            // username: this.state["username"], 
            email: this.state["email"], 
            phoneNumber: this.state["phoneNumber"], 
            serviceType: this.state["serviceType"], 
            address: this.state["address"],
            comments: this.state["comments"]
        }).then(() => {
            console.log("Axios post request to backend suceeded");
        });

    };

    onServiceOptionChange(event) {
        this.setState({
            serviceType: event.target.value
        });
    };
   


  
    render(){
        return (
            <div className='form-box'>
                <h5>Quote Form</h5>

                <form onSubmit={this.handleFormSubmit}>
                    <input 
                    name="firstName"
                    className='form-input'
                    placeholder='First Name' 
                    value={this.state.firstName} 
                    onChange={e => this.change(e)} />

                    <br />
                    <input 
                    name="lastName"
                    className='form-input'
                    placeholder='Last Name' 
                    value={this.state.lastName} 
                    onChange={e => this.change(e)} />

                    {/* <br />
                    <input 
                    name="username"
                    className='form-input'
                    placeholder='username' 
                    value={this.state.username} 
                    onChange={e => this.change(e)} /> */}

                    <br />
                    <input 
                    name="email"
                    className='form-input'
                    placeholder='email' 
                    type="email"
                    value={this.state.email} 
                    onChange={e => this.change(e)} />
                    
                    {/* <br />
                    <input 
                    name="password"
                    className='form-input'
                    type="password"
                    placeholder='password' 
                    value={this.state.password} 
                    onChange={e => this.change(e)} /> */}

                    <br />
                    <input 
                    name="phone"
                    className='form-input'
                    placeholder='Phone Number' 
                    type="tel"
                    value={this.state.phone} 
                    onChange={e => this.change(e)} />

                    <div className='serviceTypeBox'>
                        <br />
                        <h4>Service Type:</h4>
                        <br />

                        <div className='form-check'>
                            <label>  
                                <input 
                                type="radio" 
                                name="serviceType" 
                                value="pad" 
                                checked={this.state.serviceType === "pad"} 
                                onChange={this.onServiceOptionChange} /> Pad
                            </label>
                        </div>
                        <div className='form-check'>
                            <label> 
                                <input 
                                type="radio"
                                name="serviceType"
                                value="patio"
                                checked={this.state.serviceType === "patio"} 
                                onChange={this.onServiceOptionChange} /> Patio
                            </label>
                        </div>
                        <div className='form-check'>
                            <label> 
                            <input 
                                type="radio"
                                name="serviceType"
                                value="driveway"
                                checked={this.state.serviceType === "driveway"} 
                                onChange={this.onServiceOptionChange} /> Driveway
                            </label>
                        </div>
                    </div>

                    <br />
                    <input 
                    name="address"
                    className='form-input'
                    placeholder='Address/Approx Location of work to be done' 
                    value={this.state.address} 
                    onChange={e => this.change(e)} />

                    <br />
                    <div className='map-box' style={{width:'60vw', height:'70vh', margin:'auto'}}>
                        <WrappedMap 
                            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&
                            libraries=goemetry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
                            loadingElement={<div style={{ height: "100%" }}/>}
                            containerElement={<div style={{ height: "100%" }}/>}
                            mapElement={<div style={{ height: "100%" }}/>}
                        />
                    </div>

                    <br />
                    <input 
                    name="comments"
                    className='comments-input'
                    placeholder='Comments' 
                    value={this.state.comments} 
                    onChange={e => this.change(e)} />
                    <br />
                    <button onClick={e => this.handleFormSubmit(e)}>Submit</button>
                </form>
            </div>
        )
    }
}