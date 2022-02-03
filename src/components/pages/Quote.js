import React from 'react';
//import {useState} from 'react';
import '../../App.css';
import './Quote.css';
import Axios from 'axios';

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
            comments: ''
        };
        this.onServiceOptionChange = this.onServiceOptionChange.bind(this);
    }
    
    // state = {
    //     firstName: '',
    //     lastName: '',
    //     username: '',
    //     email: '',
    //     password: '',
    //     phone: '',
    //     serviceType: 'patio',
    //     comments: ''
    // }


  
    change = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };
  
    // onSubmit(e) {
    //     e.preventDefault();
    //     this.props.onSubmit(this.state);
    // };

    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();
      
        console.log("You have submitted:", this.state["serviceType"], this.state["firstName"],this.state["email"],this.state["comments"]);

        Axios.post('http://localhost:3002/create', {
            firstName: this.state["firstName"], 
            lastName: this.state["lastName"], 
            username: this.state["username"], 
            email: this.state["email"], 
            phoneNumber: this.state["phoneNumber"], 
            serviceType: this.state["serviceType"], 
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

    onChangeValue(event) {
        console.log(event.target.value);
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

                    <br />
                    <input 
                    name="username"
                    className='form-input'
                    placeholder='username' 
                    value={this.state.username} 
                    onChange={e => this.change(e)} />

                    <br />
                    <input 
                    name="email"
                    className='form-input'
                    placeholder='email' 
                    type="email"
                    value={this.state.email} 
                    onChange={e => this.change(e)} />
                    
                    <br />
                    <input 
                    name="password"
                    className='form-input'
                    type="password"
                    placeholder='password' 
                    value={this.state.password} 
                    onChange={e => this.change(e)} />

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
  
  
  
/////////////////////// ORIGINAL//////////////////
// export default function Quote(){
    
//     return (
//         <h1 className='quote'>QUOTE</h1>
        
//     )
    
// }